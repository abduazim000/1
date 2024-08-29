
 var age = +prompt('Введите свой возрост')

 if(age <= 18) {
     alert('Вам нужно учиться');
}else if(  age <= 50) {
    alert('Вам нужно работать');
}else if(age <= 59 ) {
    alert('Вам скоро на пенсию');
}else if(age <= 100) {
    alert('Вы пенсионер');
}else if(age > 100) {
    alert('Что-то пошло не так');
}


