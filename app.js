const PASSWORD="1234"

const today=new Date()

const todayStr=today.toISOString().split("T")[0]

function login(){

let pass=document.getElementById("password").value

if(pass===PASSWORD){

document.getElementById("login").style.display="none"
document.getElementById("main").style.display="block"

showDate()
loadStats()
drawChart()
aiCoach()

}

}

function showDate(){

document.getElementById("todayDate").innerText="Сегодня: "+today.toLocaleDateString()

}

function loadStats(){

let streak=localStorage.getItem("streak")||0
let points=localStorage.getItem("points")||0
let waist=localStorage.getItem("waist")||"-"

document.getElementById("streak").innerText="🔥 Streak: "+streak
document.getElementById("points").innerText="⭐ Баллы: "+points
document.getElementById("waist").innerText="Талия: "+waist+" см"

}

function addWorkout(){

let url=prompt("Вставь ссылку YouTube")
let minutes=prompt("Сколько минут тренировка?")

if(!minutes)return

let workouts=JSON.parse(localStorage.getItem("workouts")||"{}")

workouts[todayStr]={minutes,url}

localStorage.setItem("workouts",JSON.stringify(workouts))

let streak=Number(localStorage.getItem("streak")||0)

if(!workouts[todayStr]){

streak++

}

localStorage.setItem("streak",streak)

let points=Number(localStorage.getItem("points")||0)

points+=minutes*3

localStorage.setItem("points",points)

loadStats()

}

function openGlow(){

document.getElementById("content").innerHTML=

`

<h3>Glow Up</h3>

Сон (часы)<br>
<input id="sleep"><br><br>

Вода (стаканы)<br>
<input id="water"><br><br>

Шаги<br>
<input id="steps"><br><br>

<button onclick="saveGlow()">Сохранить</button>

`

}

function openDiary(){

document.getElementById("content").innerHTML=

`

<h3>Дневник</h3>

<textarea id="diary" rows="6" style="width:100%"></textarea>

<button onclick="saveDiary()">Сохранить</button>

`

}

function saveDiary(){

let text=document.getElementById("diary").value

localStorage.setItem("diary-"+todayStr,text)

alert("Запись сохранена")

}

function drawChart(){

let data=JSON.parse(localStorage.getItem("waistHistory")||"[]")

new Chart(document.getElementById("chart"),{

type:"line",

data:{
labels:data.map((_,i)=>"Запись "+(i+1)),
datasets:[{
label:"Талия",
data:data
}]
}

})

}