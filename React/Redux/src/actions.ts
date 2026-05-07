
export type Action = {type: 'INCREASE'} | {type: 'DESCREASE'};

/* 
//action 반환 함수
const increase = ():Action => ({type: 'INCREASE'});
const descrease = ():Action => ({type: 'DESCREASE'});
*/

const INCREASE = 'INCREASE';
const DESCREASE = 'DESCREASE';


//action 반환 함수
const increase = ():Action => ({type: INCREASE});
const descrease = ():Action => ({type: DESCREASE});

export {increase,descrease, INCREASE};