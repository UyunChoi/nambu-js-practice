// lotto 기본 규칙
const lottoNum = () => Math.floor((Math.random() * 45)) + 1;


/* array */
function playArrayLotto(){
    const arrayNums = new Array();
}

/* set */
function playSetLotto(){
    const setNums = new Set();
        //console.log(`test : outputNum : ${setNums}`);
        //console.log(`test : outputNum : ${setNums.size}`);

    //for -> 몇번 돌릴 수 있을지 알 수 없음
    while(setNums.size < 6){
        setNums.add(lottoNum());
    };
        //console.log(`test : outputNum : ${outputNum}`);

    // const sortBefore = [...outputNum];
    const sortAfter = [...setNums].sort((a,b) => a-b);
    console.log(sortAfter);
}

playArrayLotto();
playSetLotto();

// (추가) 4등 3등 2등 당첨 판별하기