import React from 'react'
import $ from 'jquery'
import './LR_6.css'
import raw_css from './LR_6.css.txt'
import raw_jsx from './LR_6.js.txt'


class LR_6 extends React.Component {
  componentDidMount() {
    var circlejElem = $("#circle")
    var circle = document.getElementById("circle")
    function resetCircleStyle(){      
      circle.style.width = "100px";
      circle.style.height = "100px";
      circle.style.marginTop = "50px";
      circle.style.marginLeft = "200px";
      circle.style.left = "0px";
      circle.style.opacity = "1";
      circle.style.transition = "background 0.0s linear 0s";
      circle.style.background = "greenyellow";
    }
    var centerH = $(".labContentDiv").width() / 2 - 200
    var centerV = $(".labContentDiv").height() / 2 - 50 - 25

    $("#startMoving").on("click", function(){
      resetCircleStyle()
      circlejElem.animate({
        width: "50px",
        height: "50px",
        marginBottom: "50px"
      }, 500);

      circle.style.transition = "background 1.0s linear 0s";
      circle.style.background = "red";

      circlejElem.delay(200).animate({
        left: centerH,
        marginTop: centerV
      }, 500);

      circlejElem.animate({ opacity: "0.8" }, 800);

      circlejElem.animate({
        left: "-175px",
        marginTop: "-50px",
        opacity: "0"
      }, 1000);
    });
  }
  
  render() {
    return (
      <div>
        <div>
          <p className="task"><b>Вариант 7. Задание: </b> </p>
          <p>Круг R=100 пикс: </p>
          <ul>
            <li>отображается с отступами 50 пикселей от верхней границы и 200 пикселей от левой границы;</li>
            <li>изменяет радиус до 50 пикселей;</li>
            <li>изменяет цвет на красный;</li>
            <li>начинает движение в центр экрана;</li>
            <li>изменяет прозрачность до 0.8;</li>
            <li>движется в левый верхний угол растворяясь.</li>
          </ul> 
          <p><b>Исходный код: </b><a href={ raw_jsx } target="_blank">JSX</a> <a href={ raw_css } target="_blank">CSS</a></p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv" id="movingCircleDiv">
            <button type="button" id="startMoving" className="castButton">Начать движение</button>
            <div id="circle"></div>
        </div>    
      </div>
   )
  }
}

export default LR_6