function aiCoach(){

let streak=Number(localStorage.getItem("streak")||0)

let workouts=JSON.parse(localStorage.getItem("workouts")||"{}")

let count=Object.keys(workouts).length

let message=""

if(count==0){

message="Начни с 10 минут пилатеса сегодня."

}

else if(streak<3){

message="Попробуй тренироваться 3 дня подряд. Это поможет активировать мышцы кора."

}

else if(streak<7){

message="Отличная дисциплина. Продолжай — талия может уменьшиться на 2-3 см за месяц."

}

else{

message="Ты уже в отличной форме. Добавь растяжку и дыхание для талии."

}

document.getElementById("aiCoach").innerText=message

}