import React from 'react'
import './LR_9.css'
import raw_css from './LR_9.css.txt'
import raw_jsx from './LR_9.js.txt'
import guide_xml from './src/TV guide.xml'

import GUIDE_XSL from './src/guide/TV guide.xsl'
import GUIDE_HTML  from './src/guide/TV guide.html.txt'
import GUIDE_JS  from './src/guide/TV guide.js'

import GUIDE_FILTER_HTML  from './src/filter/TV guide_filter.html.txt'
import GUIDE_FILTER_JS  from './src/filter/TV guide_filter.js'
import GUIDE_FILTER_XSL from './src/filter/TV guide_filter.xsl'

import GUIDE_SORT_HTML  from './src/sort/TV guide_sort.html.txt'
import GUIDE_SORT_JS  from './src/sort/TV guide_sort.js'
import GUIDE_SORT_XSL from './src/sort/TV guide_sort.xsl'

function LR_9 (){  
    return (
      <div>
        <div>
          <p><b>Задание 1:</b> Создать собственные шаблоны XSL. Использовав в качестве исходного файла результаты работ 6 и 7.</p>
          <p><b>Задание 2:</b> Выполнить сортировку записей по одному из возможных критериев и фильтрацию данных по одному из возможных показателей.</p>          
          <p className="task"><b>Вариант 7.</b></p> 
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
            <a href={ guide_xml } target="_blank">XML-документ</a>
        </p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div>
            <b>Обычный шаблон:&nbsp;&nbsp;</b>
            <a href={ GUIDE_XSL } target="_blank">XSL</a>
            <p>
              Результат работы шаблона:&nbsp;&nbsp;
              <a href={ GUIDE_HTML } target="_blank">Код HTML</a>
            </p> 
            <GUIDE_JS></GUIDE_JS>
          </div>
          <br></br>
          <div>
            <hr></hr>
            <p>
              <b>Шаблон XSL с сортировкой по названию канала (CHANELL):&nbsp;&nbsp;</b>
              <a href={ GUIDE_SORT_XSL } target="_blank">XSL</a>
            </p>
            <p>
              Результат работы шаблона:&nbsp;&nbsp;
              <a href={ GUIDE_SORT_HTML } target="_blank">Код HTML</a>
            </p> 
            <GUIDE_SORT_JS></GUIDE_SORT_JS>
          </div>
          <br></br>
          <div>
            <hr></hr>
            <p>
              <b>Шаблон с фильтрацией по числу выхода ТВ-шоу (DATE/DAY):&nbsp;&nbsp;</b>
              <a href={ GUIDE_FILTER_XSL } target="_blank">XSL</a>
            </p> 
            <p>
              Результат работы шаблона:&nbsp;&nbsp;
              <a href={ GUIDE_FILTER_HTML } target="_blank">Код HTML</a>
              <GUIDE_FILTER_JS></GUIDE_FILTER_JS>
            </p>
          </div>
        </div>
      </div>
   )
}

export default LR_9