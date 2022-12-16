import "./propertyList.css"

export default function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://luxurylifestyleawards.com/wp-content/uploads/2020/02/MAIN-IMAGE.jpg" alt="" className="pListImg" />
            <div className="plistTitles">
                <h1>Hotels</h1>
                <h2>7855 Banglow</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="http://cdn.home-designing.com/wp-content/uploads/2019/10/cool-colorful-modern-living-room-before-and-after-images.jpg"
            alt="" className="pListImg" />
            <div className="plistTitles">
                <h1>Resorts</h1>
                <h2>1024 Hotels/Resorts </h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://do84cgvgcm805.cloudfront.net/article/362/1200/25cf654358d7812a07902fa42f249dedbec8eb058bdda541c88b9e3b317a93d9.jpg" alt="" className="pListImg" />
            <div className="plistTitles">
                <h1>villas</h1>
                <h2>5000 luxury villas</h2>
                
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.pinimg.com/originals/f6/92/52/f692521d11e8b881bfd1c1e357e50548.jpg" alt="" className="pListImg" />
            <div className="plistTitles">
                <h1>Cabins</h1>
                <h2>1027 cabins</h2>
            </div>
        </div>
        </div>
  )
}
