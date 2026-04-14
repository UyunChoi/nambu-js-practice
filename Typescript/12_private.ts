/* class Student {
    public name: string;
    private grade: number | string;
    constructor(n: string, g: number | string){
        this.name = n;
        this.grade = g;
    }
    public get Grade(): number | string {
        return this.grade;
    }
    public set Grade(input: number | string) {
        //제약 조건
        if (input < 1 || input > 4) { // union 타입이라 string 경우
            throw Error('학년은 1~4 사이여야 합니다.');
        }
        this.grade = input;
    }
}

const person = new Student('손흥민'
, 30);
const grade = person.Grade;
console.log(grade);
person.Grade = 20;
console.log(person.Grade); */

class Student {
    public name: string;
    private grade: number;
    constructor(n: string, g: number){
        this.name = n;
        this.grade = g;
    }
    public get Grade(): number {
        return this.grade;
    }
    public set Grade(input: number) {
        //제약 조건
        if (input < 1 || input > 4) { // union 타입이라 string 경우
            throw Error('학년은 1~4 사이여야 합니다.');
        }
        this.grade = input;
    }
}

const person = new Student('손흥민', 30);
const grade = person.Grade;
console.log(grade);
person.Grade = 20;
console.log(person.Grade);