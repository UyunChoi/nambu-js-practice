/* 유저 정보 */
interface User {
    name: string;
    email: string;
}

/* 
// promise
function chaining(obj:object, callback(obj:Object, callback)=>callback): function{

}
 */

// 1. 객체를 받아서 1초 뒤에 데이터를 추가해 돌려주는 함수 (Promise 반환)
function processStep<T extends object>(obj: T): Promise<T & { added: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 기존 객체에 새로운 속성을 합쳐서 반환
      resolve({ ...obj, added: "done!" });
    }, 1000);
  });
}

// 2. 실행 (Chaining)
processStep({ id: 1 })
  .then((result) => {
    console.log("1단계 완료:", result);
    return processStep(result); // 다음 체이닝으로 넘김
  })
  .then((finalResult) => {
    console.log("최종 완료:", finalResult);
  });


// T는 입력 객체 타입, R은 결과 객체 타입
function chaining<T extends object, R extends object>(
  obj: T, 
  callback: (data: T) => Promise<R>
): Promise<R> {
  return callback(obj);
}

// 사용 예시
chaining({ name: "kim" }, async (data) => {
  return { ...data, age: 20 };
}).then(console.log);

//Poromis 
//제네릭스 -> 일반화된 타입 // 1차 방정식 //2차 방정식의 // y의 일반식을 나타내듯
