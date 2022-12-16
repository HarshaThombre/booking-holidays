import "./featuredProperties.css";

export default function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="http://www.contemporist.com/wp-content/uploads/2016/12/modern-bedroom-design-ideas-131216-1059-01-800x534.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Paradise pink hotel</span>
        <span className="fpCity">dehradun</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/eden-locke-worlds-best-design-hotels-1551112722.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ladhak Rise</span>
        <span className="fpCity">ladhak</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">   
        <img
          src="https://i.pinimg.com/736x/27/87/f4/2787f4811aeab300e92518048aa2fc58--hostel-hamburg-architecture-interior-design.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Keasariyan</span>
        <span className="fpCity">kanyakumari</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}
