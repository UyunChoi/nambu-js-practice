type PersonName = string;

const person1: string = '국기봉';
const person2: PersonName = '신호탄';

/* 타입과 인터페이스는 차이가 있음 */
type Person = {
    name: string;
    age: number;
};

/* 
인터페이스 : 객체 만들때
타입 : 모든 타입 
Promise -> 타입 : 생성자 있음
 */

