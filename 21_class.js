// 자바스크립트는 프로토타입을 사용한 객체지향 언어지만 추가함
// 내부적 처리는 다를 수 있으나 표면적으론 같은 결과가 나오겠지?
// 기존 방법과 대조해보기

class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    func1() {
        console.log(`test : func1`);
    }
}

const person01 = new Person1('name01', 5);
person01.func1();

/* private */
class Person2 {
    #idNo
    constructor(name, age, idNo){
        this.name = name;
        this.age = age;
        this.#idNo = idNo;
    }
    getIdNo(){}
}

/* (기존) 클로저 활용 */