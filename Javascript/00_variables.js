/* Javscript 기본 */

/* 상수와 변수 */
    // 상수 constant
    // 변수 variable
const constant = 20;
//constant = 15; // 재할당 불가

let grade = 3;

let year; // undefined
year = 3;
year = 4; // 재할당 가능

    /* 변수를 선언할때는 되도록 상수를 선언할 것 
        예측 가능성 (코드 안정성): 
            값이 중간에 변하지 않는다는 보장이 있으면 코드를 읽을 때 흐름을 파악하기 쉽습니다. 
            예상치 못한 곳에서 값이 바뀌어 발생하는 버그를 원천 차단할 수 있습니다.
        
        유지보수 용이성: 
            상수는 선언 시점에 의미가 확정되므로, 
            나중에 코드를 수정할 때 해당 값이 어디서 어떻게 변했는지 추적할 필요가 없어 
            협업과 디버깅이 훨씬 편해집니다.
        
        컴파일러 최적화: 
            값이 고정되어 있으면 컴파일러가 메모리 할당이나 실행 속도 측면에서 더 효율적으로 최적화할 수 있어 성능상 유리할 수 있습니다.
            (눈에 띌 정도로 유의미하진 않음)
    */


/* console.log() */
console.log(grade);
console.log(grade, year)

    // template literal 템플릿 리터럴
console.log('나이는'+ age + '살이고 학년은' + grade + '학년이다.'); // 연산? 배열? -> 원리를 찾아보자
console.log(`나이는 ${age}살이고 학년은 ${grade} 학년이다.`);

    /* (추가) 디버거 활용해서 확인해보기 */


/* 변수, 상수 작명규칙 */
    // 컨벤션
/* 문장 Statement */
const age = 20;
console.log(age);


/* 주석 Comment */
    // 한 줄 주석
    //cmd + /

    /* 블록 주석 */
    /*
    Windows/Linux   : Shift + Alt    + A
    macOS           : Shift + Option + A 
    */
