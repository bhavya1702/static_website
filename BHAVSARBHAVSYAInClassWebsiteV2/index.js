// BHAVYA BHAVSAR

 function getMonthName(month)
 {
    var monthNames = ["January","February","March","April","May","June","July","August","Septmber","October","November","December"];
    return monthNames[month];
}
document.addEventListener("DOMContentLoaded",function(){
    showDate();
})
 function showDate() {
    let date = new Date();
    let month = getMonthName(date.getMonth());
    let day = date.getDate();
     let year = date.getFullYear();
     let dateText = month + ' ' + day + ', ' + year;
     document.getElementById("currentDate").innerHTML = dateText;
}

function returnToTop()
{
	window.scrollTo(0,0);
}


function changeColor(){

	document.getElementById("changeColor").style.color = "red";
	document.getElementById("changeColor").style.borderWidth = "0.3em";
	document.getElementById("changeColor").style.borderStyle = "dotted";
	document.getElementById("changeColor").style.borderColor = "green";

}


