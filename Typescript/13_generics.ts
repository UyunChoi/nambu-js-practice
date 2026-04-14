function getNumber(value: number):number {
    return value;
}

function getString(value: string): string {
    return value;
}

function getGenerics<T>(value: T): T {
    return value;
} 


// 모든 타입 가능
// <> 생략가능 : 같은 타입이니까
// 여러 타입 가능

function getBoolean(bool: boolean) {
    console.log(bool);
return bool;
}
function getArray(arr: string[]) {
    console.log(arr);
return arr;
}
function getObject(obj: { name: string }) {
    console.log(obj);
return obj;
}
function getValue<T>(value: T): T {
    console.log(value);
return value;
}
getValue(true);
getValue<string[]>(['1']);
//getValue<getArray[]>(['1']);
getValue({ name: 1 });


//interface
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 0, // ;
}

const stringBox: Box<string> = {
    value: "일"
}


//
interface Box2<T,U> {
    value: T;
    width: U;
}

const numberBox2: Box2<number, boolean> = {
    value: 0, // ;
    width: true
}

const stringBox2: Box2<string, boolean> = {
    value: "일",
    width: true
}


// 선언 부분과 값으로 할당하는 부분 
interface ApiResponse<T> {
    data: T;
    status: number;
}

//Type 제한
function printLength <T extends {length: number}>(value: T) {
    console.log(value.length);
}

printLength('hello');
printLength([1, 2, 3]);
printLength({ length: 3, name: '손흥민' });
//sprintLength(123); //에러발생

//Type 제한 - union


//
interface Person {
    name: string;
    age?: number;
}

function printName<T extends Person>(input: T) {
    console.log();
}

// extends key of
function getProperty<T,K extends keyof T>(obj:T, key:K) {

}
