import "./featured.css";

const Featured = ({ hotelByCity }) => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.mia.vn/uploads/blog-du-lich/dao-buoc-quanh-ho-hoan-kiem-kham-pha-vien-ngoc-sang-cua-thu-do-02-1639495939.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ha Noi</h1>
          <h2>{hotelByCity.hn.length} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5_7F9ML_LLiW4adtO_7daYw5riy8UrNAoA&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ho Chi Minh</h1>
          <h2>{hotelByCity.hcm.length} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.foody.vn/res/g17/162784/prof/s576x330/foody-mobile-hinh1-cachephoarong--570-635760210960472010.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Da Nang</h1>
          <h2>{hotelByCity.dn.length} properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
