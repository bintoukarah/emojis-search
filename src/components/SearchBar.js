import emojis from "../emojis.json";
import Line from "./Line";

const SearchBar = ({ func, search, setSearch }) => {
  let counter = 0;
  return (
    <div className="Search">
      <h1>
        <span role="img" aria-label="emoji-glasses">
          😎
        </span>
        EmojiSearch
        <span role="img" aria-label="emoji-glasses">
          😎
        </span>
      </h1>
      <input type="text" placeholder="🔎 search..." onChange={func} />
      <span>Click on an emoji to copy it</span>
      {emojis.map((elem, index) => {
        setSearch(search.toLowerCase());
        if (counter === 16) {
          return null;
        }
        if (elem.keywords.indexOf(search) !== -1) {
          counter += 1;
          return (
            <Line
              key={elem.symbol + index}
              title={elem.title}
              symbol={elem.symbol}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default SearchBar;
