import './App.css';
import { Component } from 'react';
import LabSwitcher from './labs/Switcher'

class App extends Component { 
  prev_item = null 
  constructor(props){
    super(props)
    this.state = {
        content : "Выберите работу в списке слева!",
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
          { text: "Модуль 1" },/* 
          { text: "Лабораторная работа № 11" },
          { text: "Лабораторная работа № 12" } */
        ]
    }
  }

  indexChanged(e) {
    let cur_node;
    if (e.target.nodeName == "P"){ cur_node = e.target.parentNode }
    else{ cur_node = e.target }    
    this.setState({ content : <LabSwitcher number = { Number(cur_node.id)}></LabSwitcher> });
    if (cur_node.className == "cur_lab") return;
    cur_node.className = "cur_lab"
    if (this.prev_item) { this.prev_item.className = "" }
    this.prev_item = cur_node;
    }

  render(){
    return (
      <div className="App" id="style-4">
        <div className="ListLabs" id="style-4">
          <p className="navigation"><b>Навигация по сайту</b></p>
          <ul>
              { this.state.items.map( (item, index) => (
                        <li id={ index + 1 } key={index + 1} 
                          onClick={ (e) => this.indexChanged(e) }>
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
            студента группы ИПЗ-18-2<br></br>Комарова Сергея Ивановича
          </p>
        </div>     
        <div className="ContentLab" id="style-4">
          {this.state.content}
        </div> 
      </div>
    );
  }  
}

export default App;
