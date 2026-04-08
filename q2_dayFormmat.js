const day = 3; //임의
let days;

switch(day){
    case 0 :
        days = '일';
        break;
    case 1 :
        days = '월';
        break;
    case 2 :
        days = '화';
        break;
    case 3 :
        days = '수';
        break;
    case 4 :
        days = '목';
        break;
    case 5 :
        days = '금';
        break;
    case 6 :
        days = '토';
        break; 
}
console.log(`요일 : ${days}`);