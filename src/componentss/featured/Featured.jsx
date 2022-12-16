import "./featured.css";
export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img 
        src= "https://c4.wallpaperflare.com/wallpaper/299/901/190/beach-indian-ocean-sand-sandy-beach-wallpaper-preview.jpg"
        alt="" className="featuredItem" />

        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>277 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spirit-island-jasper-ab-canada-royalty-free-image-1575037924.jpg" alt="" className="featuredItem" />

        <div className="featuredTitles">
          <h1>IceLand</h1>
          <h2>157 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.shopify.com/s/files/1/0565/7080/6458/files/1rich-pink-flowing-marble-wall-mural.jpg?v=1659940694" alt="" className="featuredItem" />

        <div className="featuredTitles">
          <h1>pinkLand</h1>
          <h2>174 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="featuredItem" />

        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>025 properties</h2>
        </div>
      </div>
    </div>
  );
}
