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

var b = prompt('какое число возвести в степень?', 1);
var e = prompt('в какую степень возвести число?', 1);

var base = 1;

function pow(b, e) {
    

    for (var i = 1; i <= e; i++) {
        base *= b;
    }

    return base;
}

alert(pow(b, e));

