import React from 'react'
import './LR_7.css'
import raw_css from './LR_7.css.txt'
import raw_jsx from './LR_7.js.txt'
import raw_xml from './TV guide.xml'
import static_model from './img/static_model.png'
import BPMIN from './img/BPMIN.png'
import DFD_1 from './img/DFD_1.png'
import DFD_2 from './img/DFD_2.png'


function LR_7 (){  
    return (
      <div>
        <div>
          <p><b>Задание 1:</b> Построить статистическую и динамическую модель для заданного варианта.</p>
          <p><b>Задание 2:</b> Создать XML-документ, использовав информационную модель, построенную в первой части лабораторной работы.</p>
          <b>Варианг 7: </b>
          <p>Информация о передачах на ТВ:</p>
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
          <div>
            <div>
              <a href={ static_model } target="_blank">
                <img src={ static_model } width="60%" title="Статистическая модель"></img>
              </a>
              <p>Рисунок 1 - Статистическая модель</p>
            </div>
            <div>
              <a href={ BPMIN } target="_blank">
                <img src={ BPMIN } width="80%" title="Диаграмма рабочего процесса"></img>
              </a>
              <p>Рисунок 2 - Диаграмма рабочего процесса</p>
            </div>
          </div>
          <div>
            <div>        
              <a href={ DFD_1 } target="_blank">
                <img src={ DFD_1 } width="40%" title="Диаграмма потоков данных. Уровень 1"></img>
              </a>
              <p>Рисунок 3 - Диаграмма потоков данных. Уровень 1</p>
            </div>
            <div>
              <a href={ DFD_2 } target="_blank">
                <img src={ DFD_2 } width="60%" title="Диаграмма потоков данных. Уровень 2"></img>
              </a>
              <p>Рисунок 4 - Диаграмма потоков данных. Уровень 2</p>
            </div>
          </div>
        </div>    
      </div>
   )
}

export default LR_7