import Hello from "./Hello"
interface CountProps {
  num : number
}

export default function Count(props:CountProps) {
  return(
  <>
    {props.num}
    <Hello/>
  </>
 );
}
