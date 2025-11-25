const url = "formdata.php";
const list1 = document.getElementById("list1");
const responseList = document.getElementById("list2");
const resField = document.getElementById("result");
const routeInfo = document.getElementById("routeInfo");

window.onload=function()
{
    listChange(0);
};

function listChange(value) {
    let params = "option_value=" + value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {            
            let i = 0
            let oldOptions = responseList.options;
            while(oldOptions.length > 0){
                oldOptions[oldOptions.length-1] = null;
            }
			let routeInfoText = ""
            for (let val of xhr.responseText.split(';')) {
				if (i == 0) {
					routeInfoText += ", водителей на маршруте: " + val;
					}
				else if (i == 1) {
					routeInfoText += ", длина маршрута: " + val + "км.";
					}
				else responseList.append(new Option(val, i));
				i++;
            }
            result(routeInfoText);
        }
    }
    xhr.send(params);
}

function result(routeInfoText) {
    resField.value = "МАРШРУТ: " + list1.options[list1.selectedIndex].text + ", ВОДИТЕЛЬ: "
    + responseList.options[responseList.selectedIndex].text;
	if (routeInfoText)
		routeInfo.value =  "О маршруте: " + list1.options[list1.selectedIndex].text + routeInfoText;
}