function aiCoach(){

let streak=Number(localStorage.getItem("streak")||0)

if(streak>3){

return "Отличная дисциплина. Продолжай тренировки для узкой талии."

}

else{

return "Попробуй сегодня сделать 10 минут пилатеса."

}

}