import "./featuredProperties.css";

const FeaturedProperties = ({ top3Hotel }) => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={
            top3Hotel[0].photo
              ? top3Hotel[0].photo[0]
              : "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          }
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/${0}" target="_blank">
            {top3Hotel[0].name}
          </a>
        </span>
        <span className="fpCity">{top3Hotel[0].city}</span>
        <span className="fpPrice">
          Starting from ${top3Hotel[0].cheapestPrice}
        </span>
        <div className="fpRating">
          <button>{top3Hotel[0].rating}</button>
          <span>Rating</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={
            top3Hotel[1].photo
              ? top3Hotel[1].photo[1]
              : "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          }
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/0" target="_blank">
            {top3Hotel[1].name}
          </a>
        </span>
        <span className="fpCity">{top3Hotel[1].city}</span>
        <span className="fpPrice">
          Starting from ${top3Hotel[1].cheapestPrice}
        </span>
        <div className="fpRating">
          <button>{top3Hotel[1].rating}</button>
          <span>Rating</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={
            top3Hotel[2].photo
              ? top3Hotel[2].photo[2]
              : "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          }
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          <a href="./hotels/0" target="_blank">
            {top3Hotel[2].name}
          </a>
        </span>
        <span className="fpCity">{top3Hotel[2].city}</span>
        <span className="fpPrice">
          Starting from ${top3Hotel[2].cheapestPrice}
        </span>
        <div className="fpRating">
          <button>{top3Hotel[2].rating}</button>
          <span>Rating</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
