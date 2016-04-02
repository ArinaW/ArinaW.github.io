var date = new Date( );

function getWeekDay(date) {


switch (date.getDay()) {
  case 1:
    alert( 'пн' );
    break;
  case 2:
    alert( 'вт' );
    break;
  case 3:
    alert( 'ср' );
    break;
   case 4:
    alert( 'чт' );
    break;
   case 5:
    alert( 'пт' );
    break;
   case 6:
    alert( 'сб' );
    break;
   case 0:
    alert( 'вс' );
    break;
  default:
    alert( 'не знаю' );
}
}
getWeekDay(date);







var base = prompt('какое число возвести в степень?', 1);
var exponent = prompt('в какую степень возвести число?', 1);



function pow(base, exponent) {
    var b = base;
    var e = exponent;

    for (var i = 1; i < e; i++) {
        b *= base;
    }

    return b;
}

alert(pow(base, exponent));






var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(prompt('Enter Name'));
};

var flag;
var userName = prompt('Enter your User Name');
for (i = 0; i < arr.length; i++){
    if (arr[i] === userName){
        flag = true;
    }
};
if (flag == true) {
    alert('Welcome, '+ userName );
} else
    {
        alert('Sorry, but username' + userName + ' not found :(((')
    };
