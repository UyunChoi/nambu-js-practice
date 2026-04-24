interface Child2Props {
  value : string;
}

const Child2 = ({value}:Child2Props) => {
  return (<>
    <p>입력된 값 : {value}</p>
  </>)
};

export default Child2;