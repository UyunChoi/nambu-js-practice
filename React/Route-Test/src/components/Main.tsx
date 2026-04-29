import { Link } from "react-router-dom";

const Main = () => {
  return(
    <>
      <h3>Main</h3>
      <Link to='/product/1'>
      </Link>
      <Link to='/product/2'>
        <li>상품2</li>
      </Link>
      <Link to='/product/3'>
        <li>상품3</li>
      </Link>

    </>
  );
};

export default Main;