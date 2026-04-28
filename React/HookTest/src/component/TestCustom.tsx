import { useToggle } from "./ExCustomHook";

const Test = () => {
  const {value, toggle} = useToggle(); // const [value, toggle] = useToggle();
  return(
    <>
      <p>{value ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>변경</button>
    </>
  );
};