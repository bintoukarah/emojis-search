const Line = ({ title, symbol }) => {
    return (
      <ul className="Line">
        <li onClick={() => navigator.clipboard.writeText(symbol)}>
          <p>{title}</p>
          <p>{symbol}</p>
        </li>
      </ul>
    );
  };
  
  export default Line;
  