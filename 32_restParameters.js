/* Rest Parameters 
rest 매개변수 */

function sum(...nums){
    console.log(nums);
}
sum(1,2,3,4); // array

// Rest 매개변수는 반드시 마지막에 와야 한다 
// 중간에 올 경우 , 자동으로 undefined가 할당되는 상황과 구별할 수 없음
