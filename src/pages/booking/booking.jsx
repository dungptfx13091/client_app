import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./booking.css";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import DateRangeComp from "../../components/DateRangeComp/DateRangeComp";
import Footer from "../../components/footer/Footer";

const Booking = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginEmail = window.localStorage.getItem("loginEmail");

  const { id } = useParams();
  const [hotel, setHotel] = useState("");
  useEffect(() => {
    const setLogin = async () => {
      if (loginEmail) setIsLogin(true);
    };
    setLogin();
    // fetch loginUser data
    const dataUserFetch = async () => {
      const user = await (
        await fetch(`http://localhost:5000/users/detail?email=${loginEmail}`)
      ).json();

      if (user) {
        setFullName(user.fullName);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);
      }
    };

    dataUserFetch();

    // fetch hotel data
    const dataHotelFetch = async () => {
      const hotel = await (
        await fetch(`http://localhost:5000/hotels/detail?id=${id}`)
      ).json();

      setHotel(hotel);
    };

    dataHotelFetch();
  }, []);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const days = (startDate, endDate) => {
    const difference = new Date(endDate) - new Date(startDate);
    const totalDays = Math.round(difference / (1000 * 3600 * 24));
    return totalDays;
  };

  const [rooms, setRooms] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [chooseRoom, setChooseRoom] = useState("");
  const [chooseRoomArr, setChooseRoomArr] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [method, setMethod] = useState("Credit Card");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (window.confirm("Please login to book hotel ")) {
        window.location.href = "/login";
      }
    } else {
      fetch("http://localhost:5000/transactions/add", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          user: email,
          hotel: hotel._id,
          room: chooseRoomArr.sort(),
          dateStart: new Date(startDate),
          dateEnd: new Date(endDate),
          price: totalBill,
          payment: method,
          status: "Booked",
        }),
      }).then(() => {
        window.location.href = `/user/transactions`;
      });
    }
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setCardNumber("");
  };

  const getStartDate = (value) => {
    setStartDate(value);
  };
  const getEndDate = (value) => {
    setEndDate(value);
    if (startDate && endDate) {
      const dataFetch = async () => {
        const rooms = await (
          await fetch(
            `http://localhost:5000/rooms/search?id=${id}&startDate=${startDate}&endDate=${endDate}`
          )
        ).json();

        setRooms(rooms);
      };

      dataFetch();
    }
  };

  const toggleRoom = (room) => {
    const index = chooseRoomArr.indexOf(room);
    if (index === -1) {
      chooseRoomArr.push(room);
    } else {
      chooseRoomArr.splice(index, 1);
    }
    console.log(chooseRoomArr);
    return chooseRoomArr;
  };

  return (
    <div>
      <Navbar isLogin={isLogin} />
      <Header type="list" />
      <div className="bookingContainer">
        <div className="bookingWrapper">
          <div className="top">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{hotel.title}</h1>
              <p className="hotelDesc">{hotel.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>

          <div className="middle">
            <div className="bookingDate">
              <h1>Dates</h1>
              <DateRangeComp
                getStartDate={getStartDate}
                getEndDate={getEndDate}
              />
            </div>

            <div className="userInfo">
              <h1>Reserve Info</h1>
              <form action="/booking" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="fullName">Your Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phoneNumber">Your Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Card Number"
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </form>
            </div>
          </div>

          <div className="bot">
            <h1>Select Rooms</h1>
            <div className="roomInfoContainer">
              {rooms &&
                rooms.map((room, roomId) => {
                  return (
                    <div className="roomInfo" key={roomId}>
                      <h5>{room.title}</h5>
                      <p>{room.desc}</p>
                      <p>Max people: {room.maxPeople}</p>
                      <p>${room.price}</p>

                      <div className="checkBoxContainer">
                        {room.roomNumbers.map((roomNumber, id) => {
                          return (
                            <div key={id} className="checkBox">
                              <label>{roomNumber}</label>
                              <input
                                type="checkBox"
                                name="room"
                                id={roomNumber.value}
                                onChange={(e) => {
                                  let bill = 0;
                                  setChooseRoom(e.target.value);
                                  toggleRoom(roomNumber);
                                  if (e.target.checked) {
                                    bill =
                                      room.price * days(startDate, endDate);
                                  } else
                                    bill =
                                      -room.price * days(startDate, endDate);
                                  setTotalBill(totalBill + bill);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <h1>Total Bill: ${totalBill}</h1>
            <div className="method">
              <select onChange={(e) => console.log("onchange")}>
                <option>Choose Payment Method</option>
                <option>Credit Card</option>
                <option>Cash</option>
              </select>
              <div className="hotelDetailsPrice" id="botButton">
                <button onClick={handleSubmit}>Reserve Now</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
