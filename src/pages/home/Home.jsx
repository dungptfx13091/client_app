import { useEffect, useState } from "react";

import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = ({ isLogin }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/hotels/homePage")
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);
  if (data)
    return (
      <div>
        <Navbar isLogin={isLogin} />
        <Header />
        <div className="homeContainer">
          <Featured hotelByCity={data.city} />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList hotelByType={data.type} />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties top3Hotel={data.top3Hotel} />
          <MailList />
          <Footer />
        </div>
      </div>
    );
};

export default Home;
