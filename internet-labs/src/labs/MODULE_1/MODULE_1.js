import React from 'react'
import $ from 'jquery'
import './MODULE_1.css'
import raw_css from './MODULE_1.css.txt'
import raw_jsx from './MODULE_1.js.txt'

  var students = [
    ['Бабенко', 5, 3],
    ['Вернєєв', 4, 3],
    ['Горільський', 4, 4],
    ['Джадан', 2, 3],
    ['Кістірець', 3, 3],
    ['Ковалевський', 4, 4],
    ['Комаров', 5, 5],
    ['Логвиненко', 3, 3],
    ['Максимчук', 4, 2],
    ['Паламарчук', 3, 3],
    ['Пронько', 3, 3]
]

function defineСategory(student){
  var grade1 = student[1]
  var grade2 = student[2]
  if (grade1 > 3 && grade2 > 3)
    if (grade1 == 5 && grade2 == 5)
        return "Отличник"
    else return "Хорошо успевающиий"
  else if (grade2 > 2 && grade1 > 2)
    return "Успевающий"
  else return "Неуспевающий"  
}

function countCategoryStudents(students){
  var excellent = 0, good = 0, performing = 0, underperforming = 0
  for(var i in students) {
    switch(defineСategory(students[i])){
      case 'Отличник':
        excellent +=1
        break
      case 'Хорошо успевающиий':
        good +=1
        break
      case 'Успевающий':
        performing +=1
        break
      case 'Неуспевающий':
        underperforming +=1
        break
    }
  }
  return [excellent, good, performing, underperforming]
}

function updStudents(params) {
  var stDiv = $("#students")
  stDiv.empty()
  stDiv.append ("Данные студентов: <br></br>")
  for(var i in students) {
    stDiv.append("<div>" + students[i][0] + ", КР1: " + students[i][1] + ", КР2: " + students[i][2] + ";" + "</div>")
  }
}

class MODULE_1 extends React.Component {
  componentDidMount() {
    updStudents()
    $("#countStudents").on("click", function(){
      var counted = countCategoryStudents(students)
      console.log(counted);
      $("#excellentStudents").text("Отличников: " + counted[0])
      $("#goodStudents").text("Хорошо успевающих: " + counted[1])
      $("#performingStudents").text("Успевающих: " + counted[2])
      $("#underperformingStudents").text("Неуспевающих: " + counted[3])
    })
    $("#addStudent").on("click", function(){
      var surName = $("#surName").val()
      var grade1 = +($("#grade1").val())
      var grade2 = +($("#grade2").val())
      students.push([surName, grade1, grade2])
      $("#surName").text("")
      $("#grade1").text("")
      $("#grade2").text("")
      updStudents()
    })
  }
  
  
  render() {
    return (
      <div>
        <div>
          <p>
            <b>Принципы, на которых базируется объектная модель документа</b>
          </p>
          <p>
          Объектная Модель Документа (DOM) – это программный интерфейс для HTML и XML документов.
          DOM предоставляет структурированное представление документа и определяет то,
           как эта структура может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. 
          <br></br>Представление DOM состоит из структурированной группы узлов и объектов,
           которые имеют свойства и методы. DOM соединяет веб-страницу с языками описания сценариев либо языками программирования.
          Веб-страница – это документ. Документ может быть представлен как в окне браузера, так и в самом HTML-коде. 
          В любом случае, это один и тот же документ. DOM предоставляет другой способ представления,
           хранения и управления этого документа. 
           <br></br>Все свойства, методы и события, доступные для управления и создания новых страниц, организованы в виде объектов.
            Каждый элемент в документе - весь документ в целом, заголовок, таблицы внутри документа, заголовки таблицы, 
            текст внутри ячеек таблицы - это части объектной документной модели для этого документа, 
            поэтому все они могут быть доступны и могут изменяться с помощью DOM и скриптового языка наподобие JavaScript.
            DOM спроектирован таким образом, чтобы быть независимым от любого конкретного языка программирования, 
            обеспечивая структурное представление документа согласно единому и последовательному программному интерфейсу. 
          </p>
        </div>
        <div>
          <p className="task"><b>Вариант 25 (7 + 18).</b></p> 
          <p><b>Задание 1:</b> В анкете для каждого из десяти студентов приводится информация:
          фамилия и две оценки за контрольную работу. Студенты разделяются на несколько
          категорий. Категория «отличники» состоит из студентов, у которых обе
          контрольные написаны на оценку 5, к категории «хорошо успевающие» относятся
          студенты, у которых оценка за каждую контрольную - 4 или 5, но студент не
          отличник. Категорию «успевающие» составляют студенты, у которых хотя бы одна
          контрольная написана на 3, наконец «неуспевающие» - те студенты, которые
          имеют 2 хотя бы за одну контрольную. Требуется написать сценарий определения
          числа студентов в каждой категории..</p>
          <p><b>Исходный код: </b>
            <a href={ raw_jsx } target="_blank">JSX</a>&nbsp;&nbsp;
            <a href={ raw_css } target="_blank">CSS</a>&nbsp;&nbsp;
            
        </p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div id="oneSpace" ><div id="students"></div></div>
          <div id="oneSpace">
            <form>
              <p>Добавить данные студента</p>
              <div>
                <input type="text" id="surName" placeholder="Введите Фамилию студента.."></input>
                <input type="text" id="grade1" placeholder="Введите оценку за первую контрольную.."></input>
                <input type="text" id="grade2" placeholder="Введите оценку за вторую контрольную.."></input>
              </div>
              <div>
                <button type="submit" id="addStudent" className="castButton" onClick = { e => e.preventDefault() }>Добавить студента</button>
              </div>
            </form>
          </div>
          <div  id="oneSpace">
            <button type="button" id="countStudents" className="castButton">Посчитать студентов</button>  
            <div id="excellentStudents"></div>
            <div id="goodStudents"></div>
            <div id="performingStudents"></div>
            <div id="underperformingStudents"></div>
          </div>
        </div>
      </div>
   )
}
}

export default MODULE_1