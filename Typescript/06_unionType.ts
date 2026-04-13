let num: number | string = 10;
num = '10';
console.log(typeof num);

function getAge(n: number | string): string {
    return "저의 나이는 " + n;
}
//객체 만들어서 비슷비슷한 타입을 반환할 때 씀

// void도 되나?