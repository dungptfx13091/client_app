import "./searchItem.css";

const SearchItem = ({ hotel }) => {
  const handleSubmit = () => {
    window.location.href = `/hotel/${hotel._id}`;
  };
  return (
    <div className="searchItem">
      <img src={hotel.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.title}</h1>
        <span className="siDistance">{hotel.distance} from center</span>
        <span className="siTaxiOp">{"tag"}</span>
        <span className="siSubtitle">{hotel.desc}</span>
        <span className="siFeatures">{hotel.type}</span>
        {/* If can cancel */}
        {hotel.featured ? (
          <div>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{hotel.rate}</span>
          <button>{hotel.rate}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${hotel.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSubmit}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
