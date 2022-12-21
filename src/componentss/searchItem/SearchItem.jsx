import "./searchItem.css";

export default function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://southbeachsa.com/wp-content/uploads/2021/03/south-beach-camps-bay-deluxe-plus-suite-mobile-5-1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTittle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi </span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span classname="siFeatures">
          Entire studio * 1 bathroom * 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDeatilsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
    
  );
}
