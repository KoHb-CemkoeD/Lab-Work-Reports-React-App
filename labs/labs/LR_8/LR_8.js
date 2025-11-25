import React from 'react'
import './LR_8.css'
import raw_css from './LR_8.css.txt'
import raw_jsx from './LR_8.js.txt'
import raw_xml from './src/TV guide.xml'
import DTD from './src/TV guide.dtd.txt'
import XSD from './src/TV guide.xsd'


function LR_8 (){  
    return (
      <div>
        <div>
          <p><b>Задание 1:</b> Создать описание структуры XML-документа с помощью DTD-схемы.</p>
          <p><b>Задание 2:</b> Выполнить описание структуры XML-документа с помощью XML Schema.</p>          
          <p className="task"><b>Вариант 7.</b></p> 
          <p>Информация о передачах на ТВ:
          </p>
          <ul className="task-list">
            <li>передача;</li>
            <li>день;</li>
            <li>число;</li>
            <li>месяц;</li>
            <li>канал;</li>
            <li>жанр;</li>
            <li>время начала;</li>
            <li>продолжительность.</li>
          </ul> 
          <p><b>Исходный код: </b>
            <a href={ raw_jsx } target="_blank">JSX</a>&nbsp;&nbsp;
            <a href={ raw_css } target="_blank">CSS</a>&nbsp;&nbsp;
            <a href={ raw_xml } target="_blank">XML-документ</a>
        </p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv" id="image-wiewer">
          <a href={ DTD } target="_blank">DTD-схема</a>&nbsp;&nbsp;
          <a href={ XSD } target="_blank">XML Schema</a>
        </div>
      </div>
   )
}

export default LR_8