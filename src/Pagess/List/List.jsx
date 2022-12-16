import "./list.css";
import Header from "../../componentss/header/Header";
import Navbar from "../../componentss/navbar/Navbar";

export default function List() {
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTittle">Search</h1>
          </div>
          <div className="listResult">to be searched</div>
        </div>
      </div>
    </div>
  );
}
