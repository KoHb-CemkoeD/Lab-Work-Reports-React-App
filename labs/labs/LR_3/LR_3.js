import React, { useState } from 'react';
import util from 'util'
import './LR_3.css';
import raw_css from './LR_3.css.txt'
import raw_jsx from './LR_3.js.txt'


function LR_3 () {
  const [red_title, set_red_title] = useState("255")
  const [green_title, set_green_title] = useState("255")
  const [blue_title, set_blue_title] = useState("255")
  const onValueChanged = () =>{
    let r = document.getElementById('red').value
    let g = document.getElementById('green').value
    let b = document.getElementById('blue').value
    set_red_title(r)
    set_green_title(g)
    set_blue_title(b)
    document.getElementsByClassName('labContentDiv')[0].style.background = util.format('rgb(%s,%s,%s)', r, g, b)
  };

      return (
      <div>
        <div>
          <p className="task"><b>Вариант 7.</b></p> 
          <b>Задание: </b>
          Создать скрипт, выполняющий получение положения каждого 
          из трех линеек с бегунками для каждой цветовой составляющей.
          Действия изменения каждого из бегунков влечет за собой изменение цвета фона документа.
          <p><b>Исходный код: </b><a href={ raw_jsx } target="_blank">JSX</a> <a href={ raw_css } target="_blank">CSS</a></p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div className="inputs">
            <div><input id="red" type="range" min="0" max="255" step="1" defaultValue="255" onInput={onValueChanged}/>RED: {red_title}</div>
            <div><input id="green" type="range" min="0" max="255" step="1" defaultValue="255" onInput={onValueChanged}/>GREEN: {green_title}</div>
            <div><input id="blue" type="range" min="0" max="255" step="1" defaultValue="255" onInput={onValueChanged}/>BLUE: {blue_title}</div>
          </div>  
        </div>    
      </div>
   )
}

export default LR_3;
