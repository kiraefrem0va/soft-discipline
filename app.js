const PASSWORD="1234"

function login(){

let pass=document.getElementById("password").value

if(pass===PASSWORD){

document.getElementById("login").style.display="none"

document.getElementById("app").style.display="block"

loadStats()

showMotivation()

drawChart()

}

}

function addWorkout(){

let minutes=prompt("Минут тренировки")

let type=prompt("Тип (pilates / abs / yoga)")

let points=minutes*3

let total=Number(localStorage.getItem("points")||0)

localStorage.setItem("points",total+points)

let streak=Number(localStorage.getItem("streak")||0)

localStorage.setItem("streak",streak+1)

alert("Тренировка добавлена")

loadStats()

}

function addWaist(){

let waist=prompt("Талия")

localStorage.setItem("waist",waist)

let history=JSON.parse(localStorage.getItem("waistHistory")||"[]")

history.push(waist)

localStorage.setItem("waistHistory",JSON.stringify(history))

drawChart()

loadStats()

}