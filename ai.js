function aiCoach(){

let streak=Number(localStorage.getItem("streak")||0)

let waist=Number(localStorage.getItem("waist")||70)

let text=""

if(streak<3){

text="Сегодня хорошая идея сделать 10 минут пилатеса."

}

else{

text="Отличная дисциплина. Продолжай — талия может уменьшиться на 2-3 см за 6 недель."

}

document.getElementById("aiCoach").innerText=text

}