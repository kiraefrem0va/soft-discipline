function openCalendar(){

let workouts=JSON.parse(localStorage.getItem("workouts")||"{}")

let date=new Date()

let year=date.getFullYear()

let month=date.getMonth()

let firstDay=new Date(year,month,1).getDay()

let days=new Date(year,month+1,0).getDate()

let html="<h3>Календарь</h3><div class='calendar'>"

for(let i=0;i<firstDay;i++){

html+="<div></div>"

}

for(let d=1;d<=days;d++){

let dateStr=year+"-"+String(month+1).padStart(2,"0")+"-"+String(d).padStart(2,"0")

let cls="day"

if(workouts[dateStr]){

cls+=" workout"

}

html+=`<div class="${cls}">${d}</div>`

}

html+="</div>"

document.getElementById("content").innerHTML=html

}