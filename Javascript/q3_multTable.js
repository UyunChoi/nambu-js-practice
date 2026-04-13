let multTable;

for(factor = 1; factor < 10; factor++){
    for(multiple = 1; multiple <10; multiple++){
        multTable = `${factor} x ${multiple} = ${factor * multiple},`;
    }
}
//마지막 ,를 제거하려면?
//multTable = `${factor} x ${multiple} = ${factor * multiple} ,`;
// 아마도 문자열을 계속 더해서 출력해야하지 않을까? 조건문을 어떻게 할지 생각해보기
// 정규표현식 알아보기?
