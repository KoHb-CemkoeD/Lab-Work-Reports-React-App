import { Component } from 'react';
import './LR_1.css';
import raw_css from './LR_1.css.txt'
import raw_jsx from './LR_1.js.txt'


class LR_1 extends Component { 
  prev_item = null 
  constructor(props){
    super(props)
    this.state = {
        content : "\n\nВыберите работу в списке слева!",
        items: [
          { text: "Лабораторная работа № 1" },
          { text: "Лабораторная работа № 2" },
          { text: "Лабораторная работа № 3" },
          { text: "Лабораторная работа № 4" },
          { text: "Лабораторная работа № 5" },
          { text: "Лабораторная работа № 6" },
          { text: "Лабораторная работа № 7" },
          { text: "Лабораторная работа № 8" },
          { text: "Лабораторная работа № 9" },
          { text: "Лабораторная работа № 10" },
          { text: "Лабораторная работа № 11" },
          { text: "Лабораторная работа №12" }
        ]
    }
  }

  render(){
    return (
      <div>
        <div>
          <p className="task"><b>Задание: </b>Используя фреймовую структуру создать многостраничный web-сайт для отчетов о выполнении лабораторных работ.</p>
          <p><b>Исходный код: </b><a href={ raw_jsx } target="_blank">JSX</a> <a href={ raw_css } target="_blank">CSS</a></p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div className="ListLabs">
            <p><b>Навигация по сайту</b></p>
            <ul>
                { this.state.items.map((item, index) => (
                          <li key={ index } id={ index } 
                            style={ { color:item.color, backgroundColor: item.bgcolor } }>                          
                            <p>{ item.text }</p>
                          </li>
                          )
                      )
                  }
            </ul>
          </div>  
          <div className="AppHeader">
            <p>
            <b>Отчеты</b><br></br>
              о лабораторных работах по курсу<br></br>
              «Современные технологии Интернет-программирования»<br></br>
              студента группы ИПЗ-18-1<br></br>Комарова Сергея Ивановича
            </p>
          </div>     
          <div className="ContentLab">
            { this.state.content }
          </div> 
        </div>
      </div>
    );
  }  
}

export default LR_1;