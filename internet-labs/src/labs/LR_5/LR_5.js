import React from 'react'
import $ from 'jquery'
import './LR_5.css'
import logo from './logo.svg'
import raw_css from './LR_5.css.txt'
import raw_jsx from './LR_5.js.txt'


class LR_5 extends React.Component {
  componentDidMount() {
    $("form input[type=radio]:first").prop('checked', true);
    $("#wishes").hide()

    $(".labContentDiv img").on("click", function(){
      $(this).animate({opacity: "0"}, "fast");
    });

    $("#startMoving").on("click", function(){   
      $("#movingBlock").width(100).height(100)
      $("#movingBlock").css("margin-bottom", "255px");
      $("#movingBlock").animate({
        left: "+50px",
        top: "+250px",
        width: "10px",
        height: "10px",
        marginTop: "90px",
        fontSize: 2
      }, 500)
      .animate({
        left: "0px",
        top: "50px",
        width: "200px",
        height: "200px",
        marginTop: "0px",
        marginBottom: "155px",
        fontSize: 16
      }, 500);
    });

    $("#yesAnswer").on("click", function(){
      $("form button:first").show();
      $("form button:last").hide();
      $("#wishes").hide()
    });
    $("#noAnswer").on("click", function(){
      $("form button:first").hide();
      $("form button:last").show();
      $("#wishes").hide()
    });
    $("#maybeAnswer").on("click", function(){
      $("form button:first").show();
      $("form button:last").show();
      $("#wishes").show()
    });
  }
  
  render() {
    return (
      <div>
        <div>
          <p className="task"><b>Вариант 7.</b></p> 
          <p><b>Задание 1: </b>
          По нажатию на изображение скрывать его.</p>
          <p><b>Задание 2: </b>
          Блок красного цвета с текстом внутри, двигается сверху вниз,
          уменьшается, текст внутри уменьшается, затем блок
          возвращается вверх и увеличивается до размеров больше, чем
          изначальные.</p>
          <p><b>Задание 3: </b>
          Добавить на страницу форму, содержащую несколько элементов формы,
          при этом при выборе определенного значения в одном элементе делать недоступным другой элемент.</p>
          <p><b>Исходный код: </b><a href={ raw_jsx } target="_blank">JSX</a> <a href={ raw_css } target="_blank">CSS</a></p>
          <p><b>Результат выполнения:</b></p>
        </div>
        <div className="labContentDiv">
          <div id="oneSpace">
            <img id="hiddenImage" src={ logo } width="200px"></img>
          </div>   
          <div id="oneSpace">
            <button type="button" id="startMoving" className="castButton">Начать движение</button>
            <div id="movingBlock">&nbsp;Some Text</div>
          </div>          
          <div id="oneSpace">
            <form>
              <p>Вы согласны с политикой использования?</p>
              <div>
                <input type="radio" id="yesAnswer" name="answer" value="yes"></input>
                <label for="yesAnswer">Да</label>

                <input type="radio" id="noAnswer" name="answer" value="no"></input>
                <label for="noAnswer">Нет</label>

                <input type="radio" id="maybeAnswer" name="answer" value="maybe"></input>
                <label for="maybeAnswer">Возможно</label>
              </div>
              <div>
                <input type="text" id="wishes" name="wishes" placeholder="Введите Ваши пожелания.."></input>
              </div>
              <div>
                <button type="submit" className="castButton" onClick = { e => e.preventDefault() }>Подтвердить</button>
                <button type="reset" className="castButton">Отмена</button>
              </div>
            </form>
          </div>  
        </div>    
      </div>
   )
  }
}

export default LR_5

/*   const [check_title, set_check_title] = useState("")
  const [check_reg_exp_title, set_check_reg_exp_title] = useState("")
  const onValueChanged = (e) =>{
    if (e.target.value == "")
        return
    switch(e.target.name){
    case "lastname":
      /^[a-zA-Zа-яА-Я]+$/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    case "firstname":
      /^[a-zA-Zа-яА-Я]+$/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    case "organization":
      /^[a-zA-Zа-яА-Я]+-?_?[a-zA-Zа-яА-Я\d?]+$/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    case "card_number":
      /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    case "phone":
      /^\+380\d{9}$/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    case "mail":
      /\w+@\w+\.\w+/.test(e.target.value) ? e.target.className = "inputOk" : e.target.className = "inputError"; break
    }
  };

 const onCheckClicked = (e) => {
    e.preventDefault();
    let lname_val = document.getElementById('lname').value
    let fname_val = document.getElementById('fname').value
    let org_val = document.getElementById('org').value
    let card_number_val = document.getElementById('card_number').value
    let phone_val = document.getElementById('phone').value
    let mail_val = document.getElementById('mail').value
    if (!(lname_val && fname_val && org_val && card_number_val && phone_val && mail_val))
        set_check_title("Введите все данные!")
    else 
      if (/^[a-zA-Zа-яА-Я]+$/.test(lname_val) &&
          /^[a-zA-Zа-яА-Я]+$/.test(fname_val) &&
          /^[a-zA-Zа-яА-Я]+-?_?[a-zA-Zа-яА-Я\d?]+$/.test(org_val) &&
          /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(card_number_val) &&
          /^\+380\d{9}$/.test(phone_val) && 
          /\w+@\w+\.\w+/.test(mail_val)
            )
            set_check_title("Данные введены правильно!")
      else
          set_check_title("Данные введены не правильно!")
  }; */

{/* <form>
            <div className="container">
              <div className="row">
                <div className="col-25"> <label htmlFor="lname">Фамилия</label></div>
                <div className="col-75"> 
                  <input type="text" id="lname" name="lastname" autoComplete="given-name" placeholder="Введите фамилию.." 
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={ (e)=> e.target.className = ""} onChange = { (e) => onValueChanged(e) }/>
                  </div>
              </div>
              <div className="row">
                <div className="col-25"> <label htmlFor="fname">Имя</label></div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" autoComplete="additional-name" placeholder="Введите имя.."
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={(e)=> e.target.className = ""} onChange = { (e) => onValueChanged(e) }></input>
                </div>
              </div>
              <div className="row">
                <div className="col-25"> <label htmlFor="org">Организация</label></div>
                <div className="col-75">
                  <input type="text" id="org" name="organization" autoComplete="organization" placeholder="Введите наименование организации.."
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={ (e)=> e.target.className = ""} onChange = { (e) => onValueChanged(e) }></input>
                  </div>
              </div>
              <div className="row">
                <div className="col-25"> <label htmlFor="card_number">Кредитная карта</label></div>
                <div className="col-75">
                  <input type="text" id="card_number" name="card_number" autoComplete="cc-number" placeholder="Введите номер кредитной карты.." maxLength="19"
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={ (e)=> e.target.className = ""} onChange = { (e) => onValueChanged(e) }></input>
                </div>
              </div>
              <div className="row">
                <div className="col-25"> <label htmlFor="phone">Номер телефона</label></div>
                <div className="col-75">
                  <input type="text" id="phone" name="phone" autoComplete="tel" placeholder="Введите номер телефона +380.." maxLength="13"
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={ (e)=> e.target.className = ""} onChange = { (e) => onValueChanged(e) }></input>
                </div>
              </div>
              <div className="row">
                <div className="col-25"> <label htmlFor="mail">Адрес электронной почты</label></div>
                <div className="col-75">
                  <input type="text" id="mail" name="mail" autoComplete="email" placeholder="Введите адрес электронной почты.."
                  onPointerEnter={ (e) => onValueChanged(e) } onPointerLeave={ (e)=> e.target.className = "" } onChange = { (e) => onValueChanged(e) }></input>
                </div>
              </div>
              <div className="row">
              <div className="col-25"> </div>
                <div className="col-75"> <label>{check_title}</label>
                  <input type="submit" value="Проверить" onClick={ (e) => onCheckClicked(e)  }></input>
                  <input type="reset" value="Очистить" onClick={ (e) => {document.getElementById('lname').style.outline = "none"; set_check_title(""); }}></input>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-25"> <label htmlFor="reg_exp">Проверка регулярного выражения</label></div>
                <div className="col-75">
                  <input type="text" id="reg_exp" name="reg_exp" placeholder="Введите регулярное выражение.."></input>
                  <div className="col-75"> <label>{check_reg_exp_title}</label></div>
                    <input type="button" value="Проверить"
                      onClick={ (e) => { 
                        let field_val = document.getElementById('reg_exp').value;
                        let res = field_val ? [...field_val.matchAll(/a[^\w^\d]b/g)].join(", ") : null;
                        set_check_reg_exp_title(res? "Найдено такие совпадения: " + res : "Совпадений не найдено!")
                        } 
                      }>
                    </input>  
                </div>
              </div>
            </div>
          </form> */}