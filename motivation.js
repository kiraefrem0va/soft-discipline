function showMotivation(){

const list=[

"Дисциплина формирует тело.",

"10 минут пилатеса меняют силуэт.",

"Маленькие действия каждый день.",

"Ты строишь тело своей мечты."

]

let r=list[Math.floor(Math.random()*list.length)]

document.getElementById("motivation").innerText=r

}