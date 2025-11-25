import React, { Component } from 'react'
import './LR_2.css'
import logo from './logo.svg'
import createReactClass from 'create-react-class'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import raw_css from './LR_2.css.txt'
import raw_jsx from './LR_2.js.txt'

var Ul = createReactClass({
  getInitialState: function(){ return { open: false } },
  toggleOpen: function(){ this.setState({ open: !this.state.open }) },
  render: function(){
    var className = this.state.open ? "opened" : "closed";
    return (
      <div className="ul">
        <div className="header" onClick={ this.toggleOpen }>
          { this.props.header }
        </div>
        <div className={ className }> { this.props.children } </div>         
      </div>
    );
  }
});

class LR_2 extends React.Component{  
  state = { isImageVisible: false };

  render(){
    const { isImageVisible } = this.state;
    return (
      <div>
        <div>
          <p className="task"><b>Вариант 7.</b></p> 
          <b>Задание 1: </b>
            Создать текстовое двухуровневое меню: при выборе определенного пункта
          меню пункты верхнего уровня раздвигаются и вставляются подпункты выбранного
          пункта, т. е. пункт меню «раскрывается».<nb/>
          <p><b>Задание 2: </b>Организовать движение изображения слева направо.</p>
          <p><b>Исходный код: </b><a href={ raw_jsx } target="_blank">JSX</a> <a href={ raw_css } target="_blank">CSS</a></p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div>
            <Ul header="Список 1">
              <li>Пирожное</li>
              <li>Пончик</li>
              <li>Мёд</li>
            </Ul> 
            <Ul header="Список 2">
              <li>Пирожное</li>
              <li>Пончик</li>
              <li>Мёд</li>
            </Ul>
            <Ul header="Список 3">
              <li>Пирожное</li>
              <li>Пончик</li>
              <li>Мёд</li>
            </Ul>
          </div>
          <br></br>
          <button type='button' name='showImage'
            onClick={ () =>{ this.setState({ isImageVisible: !this.state.isImageVisible })} }>
              { isImageVisible ? "Скрыть изображение": "Показать изображение" }
          </button> 
          <br></br>
          <TransitionGroup>
            { isImageVisible && (
              <CSSTransition timeout={ 2000 } classNames='image'>
                <div>
                  <img src={ logo } width="200px"></img>
                </div>
              </CSSTransition>    
            )}              
          </TransitionGroup>      
        </div>    
      </div>
   )
  }  
}

export default LR_2;
