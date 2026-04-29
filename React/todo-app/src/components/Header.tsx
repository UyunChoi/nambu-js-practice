import './Header.css';

const Header = () => {
  return(
    <div className="Header">
        {/* <h4>Header Component</h4> */}
        <h3>오늘은 📆</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;