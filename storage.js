function loadStats(){

let streak=localStorage.getItem("streak")||0

let points=localStorage.getItem("points")||0

let waist=localStorage.getItem("waist")||"-"

document.getElementById("streak").innerText="🔥 "+streak

document.getElementById("points").innerText="⭐ "+points

document.getElementById("waist").innerText="Талия: "+waist+" см"

}