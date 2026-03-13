const PASSWORD="1234"

const today=new Date()
const todayStr=today.toISOString().split("T")[0]

function login(){

let pass=document.getElementById("password").value

if(pass===PASSWORD){

document.getElementById("login").style.display="none"
document.getElementById("main").style.display="block"

updateStats()
screenHome()

}

}

function updateStats(){

document.getElementById("today").innerText="Сегодня: "+today.toLocaleDateString()

let streak=localStorage.getItem("streak")||0
let points=localStorage.getItem("points")||0
let waist=localStorage.getItem("waist")||"-"

document.getElementById("streak").innerText="🔥 "+streak
document.getElementById("points").innerText="⭐ "+points
document.getElementById("waist").innerText="Талия: "+waist

}

function screenHome(){

document.getElementById("screen").innerHTML=

`
<h3>Добавить тренировку</h3>

<input id="yt" placeholder="YouTube ссылка">

<input id="minutes" placeholder="Минут">

<button onclick="previewVideo()">Показать видео</button>

<div id="preview"></div>

<button onclick="saveWorkout()">Сохранить</button>

<canvas id="chart"></canvas>
`

drawChart()

}

function saveWorkout(){

let minutes=document.getElementById("minutes").value
let url=document.getElementById("yt").value

if(!minutes || minutes<=0){

alert("Введите длительность тренировки")
return

}

let workouts=JSON.parse(localStorage.getItem("workouts")||"{}")

if(workouts[todayStr]){

alert("Тренировка уже записана сегодня")
return

}

workouts[todayStr]={minutes,url}

localStorage.setItem("workouts",JSON.stringify(workouts))

let streak=Number(localStorage.getItem("streak")||0)
streak++

localStorage.setItem("streak",streak)

let points=Number(localStorage.getItem("points")||0)
points+=minutes*3

localStorage.setItem("points",points)

updateStats()

}

function screenGlow(){

document.getElementById("screen").innerHTML=

`
<h3>Glow Up</h3>

<input id="sleep" placeholder="Сон (часы)">
<input id="water" placeholder="Вода (стаканы)">
<input id="steps" placeholder="Шаги">

<button onclick="saveGlow()">Сохранить</button>
`

}

function saveGlow(){

let data={

sleep:document.getElementById("sleep").value,
water:document.getElementById("water").value,
steps:document.getElementById("steps").value

}

localStorage.setItem("glow-"+todayStr,JSON.stringify(data))

alert("Сохранено")

}

function screenDiary(){

document.getElementById("screen").innerHTML=

`
<h3>Дневник</h3>

<textarea id="diary"></textarea>

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
labels:data.map((_,i)=>i+1),
datasets:[{label:"Талия",data:data}]
}

})

}

function getYoutubeThumbnail(url){

let id=""

if(url.includes("watch?v=")){

id=url.split("watch?v=")[1]

}else if(url.includes("youtu.be/")){

id=url.split("youtu.be/")[1]

}

return "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"

}

function previewVideo(){

let url=document.getElementById("yt").value

let thumb=getYoutubeThumbnail(url)

document.getElementById("preview").innerHTML=

`<img src="${thumb}" style="width:100%;border-radius:12px;margin-top:10px">`

}