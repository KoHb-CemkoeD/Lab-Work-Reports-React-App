import React from 'react'
import axios from 'axios'
import util from 'util'
import './LR_10.css'
import raw_css from './LR_10.css.txt'
import raw_jsx from './LR_10.js.txt'
import guide_xml from './src/TV guide.xml'
import { parseXML } from 'jquery'
import GUIDE_HTML  from './src/TV guide.html.txt'
import GUIDE_HTML_REPLACED  from './src/TV guide withRreplace.html.txt'

function LR_10 (){
  
  const loadXML = () => {  
    axios.get(guide_xml, {
      "Content-Type": "application/xml; charset=utf-8"
    })
    .then((response) => {
      let data = response.data
      loadDocument(data)
    })
  };

  const loadDocument = (xmlString) =>{
    const { DOMParser } = require('xmldom')
  
    const XMLdoc = new DOMParser().parseFromString(
      xmlString,
      'TV guide/xml'
    )
    let contentP = document.getElementById('XMLDocument')
    contentP.innerText = XMLdoc
    let tableNodes = parseXML(XMLdoc)
    let tableNodesWithReplace = parseXMLWithReplace(XMLdoc)
    
    let HTMLContainer = document.getElementById('XMLtoHTMLpage')
    let HTMLContainerWithReplace = document.getElementById('XMLtoHTMLpageWithReplace')
    createHTMLFragment(tableNodes, HTMLContainer)  
    createHTMLFragment(tableNodesWithReplace, HTMLContainerWithReplace)  
  };

  const parseXML = (XMLdoc) =>{
    let tableNodes = []
    let childNodes = XMLdoc.documentElement.childNodes
    for (let indexNode = 1; indexNode < childNodes.length; indexNode += 2){
      let subChildNodes = childNodes.item(indexNode).childNodes
      let showName = childNodes.item(indexNode).attributes[0].nodeValue
      let chanell, janre, startTime, duration, day, month, year, dayOfWeek
      for (let indexTag = 1; indexTag < subChildNodes.length; indexTag +=2){
        let curNode = subChildNodes.item(indexTag)
        switch(curNode.nodeName){
          case "DATE":
            let dateChild = curNode.childNodes
            dayOfWeek = dateChild.item(1).attributes[0].nodeValue
            day = dateChild.item(1).firstChild.nodeValue
            month = dateChild.item(3).firstChild.nodeValue
            year = dateChild.item(5).firstChild.nodeValue
            break
          case "CHANELL":
            chanell = curNode.firstChild.nodeValue
            break
          case "JANRE":
            janre = curNode.firstChild.nodeValue
            break
          case "STARTTIME":
            startTime = curNode.firstChild.nodeValue
            break
          case "DURATION":
            duration = curNode.firstChild.nodeValue
            break
        }
      }
      tableNodes.push(
        util.format(
          '<b>%s<p>%s</b>, <i>%s</i></p><p>%s | 	%s, %s.%s.%s | Duration: %s</p>',
          chanell, showName, janre, startTime, dayOfWeek, day, month, year, duration
        )
      )
    }
    return tableNodes
  };

  let alphabeticAnalogue = new Map([
    ["03", 'March'],
    ["15", 'Fifteen'],
    ["16", 'Sixteen'],
    ["17", 'Seventeen'],
    ["18", 'Eighteen'],
    ["19", 'Nineteen'],
    ["20", 'Twenty'],
    ["21", 'Twenty-one'],
    ["2021", 'Two thousand twenty-one']
  ]);

  const parseXMLWithReplace = (XMLdoc) =>{
    let tableNodes = []
    let childNodes = XMLdoc.documentElement.childNodes
    for (let indexNode = 1; indexNode < childNodes.length; indexNode += 2){
      let subChildNodes = childNodes.item(indexNode).childNodes
      let showName = childNodes.item(indexNode).attributes[0].nodeValue
      let chanell, janre, startTime, duration, day, month, year, dayOfWeek
      for (let indexTag = 1; indexTag < subChildNodes.length; indexTag +=2){
        let curNode = subChildNodes.item(indexTag)
        switch(curNode.nodeName){
          case "DATE":
            let dateChild = curNode.childNodes
            dayOfWeek = dateChild.item(1).attributes[0].nodeValue
            
            day = alphabeticAnalogue.get(dateChild.item(1).firstChild.nodeValue)
            dateChild.item(1).firstChild.nodeValue = day

            month = alphabeticAnalogue.get(dateChild.item(3).firstChild.nodeValue)
            dateChild.item(3).firstChild.nodeValue = month

            year = alphabeticAnalogue.get(dateChild.item(5).firstChild.nodeValue)
            dateChild.item(5).firstChild.nodeValue = year
            break
          case "CHANELL":
            chanell = curNode.firstChild.nodeValue
            break
          case "JANRE":
            janre = curNode.firstChild.nodeValue
            break
          case "STARTTIME":
            startTime = curNode.firstChild.nodeValue
            break
          case "DURATION":
            duration = curNode.firstChild.nodeValue
            break
        }
      }
      tableNodes.push(
        util.format(
          '<b>%s<p>%s</b>, <i>%s</i></p><p>%s | 	%s, %s.%s.%s | Duration: %s</p>',
          chanell, showName, janre, startTime, dayOfWeek, day, month, year, duration
        )
      )
    }
    return tableNodes
  };

  const createHTMLFragment = (tableNodes, container) =>{
    container.innerHTML = ""
    for(let i = 0; i < tableNodes.length; i += 2) {
      let newRow = document.createElement("tr")
      let leftTD = document.createElement("td")
      leftTD.innerHTML = tableNodes[i]
      newRow.appendChild(leftTD)
      let rightTD = document.createElement("td")
      if (tableNodes[i + 1]){
        rightTD.innerHTML = tableNodes[i + 1]
        newRow.appendChild(rightTD)
      }
      container.appendChild(newRow)
    }
  };

  loadXML()
    return (
      <div>
        <div>
          <p><b>Задание 1:</b> Загрузить документ XML, разработанный в предыдущих работах, в объект документ и отобразить в окне браузера.</p>
          <p><b>Задание 2:</b> Используя методы DOM XML, сформировать HTML страницу, содержащую таблицу из нескольких столбцов.</p>          
          <p><b>Задание 3:</b> Используя методы DOM XML, заменить цифровые значения их словесными эквивалентами.</p>        
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
            <b>Содержание документа XML:</b>
            <div>
              <p id="XMLDocument"></p>
            </div>
          </div>
          <div>
            <hr></hr>
            <p>
              <b>HTML страница, созданная при помощи методов DOM XML:&nbsp;&nbsp;</b>
              <a href={ GUIDE_HTML } target="_blank">HTML</a>
            </p>
            <div>
              <h2>TV Guide</h2>
              <table id="XMLtoHTMLpage" border="1" cellpadding="10" cellspacing="0"></table>
            </div>
          </div>
          <br></br>
          <div>
            <hr></hr>
            <p>
              <b>HTML страница с заменой цифровых значений узлов словесными эквивалентами:&nbsp;&nbsp;</b>
              <a href={ GUIDE_HTML_REPLACED } target="_blank">HTML</a>
            </p>
            <div>
              <h2>TV Guide</h2>
              <table id="XMLtoHTMLpageWithReplace" border="1" cellpadding="10" cellspacing="0"></table>
            </div>
          </div>
        </div>
      </div>
   )
}

export default LR_10