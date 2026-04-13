class Vehicle {
    constructor(speed){
        this.speed = speed;
    }
    accelerate10(){
        this.speed += 10;
    }
    decelerate10(){
        this.speed -= 10;
    }
    info(){
        console.log(`${this.speed}`);
    }
}

class Car extends Vehicle {
    constructor(speed, wheels, seats){
        super(speed);
        this.wheels = wheels;
        this.seats = seats;
    }
    
}



// Car의 인스턴스 -> 오버로딩 한 것처럼 호출 가능 car1(1); //나머지 undefined
// 오버로딩X → 예외처리
// 조건문으로 나머지 속성 예외처리할경우 !매개변수 -> null(?)이라고? !undefined -> null(?) // !매개변수 vs !!매개변수
// null예외처리하지 않고 메소드로 처리하는 방법은?

//상속 받는 실습

//(숙제) wheel // 삼항연산자 활용? // ?? // !!