/* 타입 지정(어노테이션) */

let num: number = 10;
const greet: string = 'Hello TypeScript';
const isOn: boolean = true;

const person: object = { name: '손흥민', age: 10 };

const numbers: number[] = [1, 4, 8, 0, -3];   // [4, [1,4], 6]
const bts: string[] = ['진', '슈가', '제이홉'];

/* 튜플 tuple*/
const item: [string, number, boolean] = ['', 0, true];
// const item: [string, number, boolean] = ['', 0, 0];   // 타입 불일치 에러
// 자바스크립트

/* 애니 any */
let name: any = '손흥민';
name = 1;

//num = 'hello';    // 타입 불일치 에러

let empty: null = null;
let notAssigned: undefined = undefined;