import { useState, type ChangeEvent } from "react";
//

const LiveInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (ce:ChangeEvent<HTMLInputElement>) => { //input 변화하는 이벤트
    setInputValue(ce.target.value) //target -> <input> //특정한 값으로 셋팅하는 내용임으로 함수로 넘길 필요없음
  };
  return(<>
    <h2>실시간 입력 보기</h2>
    <input
      type ="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="내용을 입력하시오"
    />
    <p>입력한 내용 : <strong>{inputValue}</strong></p>
  </>);

};

export default LiveInput;