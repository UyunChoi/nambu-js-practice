import StepClick from "./StepClick";

interface stepPrintProp {
  current : number;
}

const stepPrint = ({current}:stepPrintProp) => {
  return(<>
    <p>총 걧수 : {current}</p>
  </>);
};

export default stepPrint;

// Prop로 받아올 생각하기