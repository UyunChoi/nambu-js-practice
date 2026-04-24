interface SayHelloProps {
  name : string
  to : string
}

/* 
export default function SayHello(props:SayHelloProps) {
  return(
    <>
      <h1>안녕하세요. {props.name}님</h1>
      <h1> - {props.to}에게 - </h1>
    </>
  )
}
 */

export default function SayHello({name, to}:SayHelloProps) {
  return(
    <>
      <h1>안녕하세요. {name}님</h1>
      <h1> - {to}에게 - </h1>
    </>
  )
}
