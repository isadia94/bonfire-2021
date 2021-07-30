import React, { useState } from "react";
import "./Destinations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Category from "./Category";
import maasaiMara from "../images/maasai-mara.jpg";

import safari from "../images/safari.jpg";
import beach from "../images/beach.jpg";
import mountain from "../images/mounte.jpg";
import fort from "../images/fort.jpg";
import Destination from "./Destination";
import coast from "../images/maasai-mara.jpg";
function Destinations() {
  const [trips, setTrips] = useState([
    {
      name: "Coast 4 Days Packages 2021 ",
      price: "16,999",
      desc: "4 Days 3 Nights Coast 2021, SGR Train From Ksh 16,999/- and 4 Days Flying... ",
      location: "Kenya",
      image: beach,
    },

    {
      name: "Mombasa Beach Holidays. ",
      price: "12,500",
      desc: "COAST 3 Days Flying Holiday Packages From Ksh 22,500/- WITH Return flights TICKETS and FREE...",
      location: "Kenya",
    },
    {
      name: "Samburu Amboseli Bush  Safari Packages. ",
      price: "17,500",
      desc: "Samburu Amboseli 3 Days Safari Packages FROM Ksh.17,500/- FOR ALL 3 DAYS To Download Bonfire...",
      location: "Kenya",
    },
    {
      name: "Tsavo Bush Safari Packages ",
      price: "18,500",
      desc: "Tsavo Weekend Getaway From Ksh.18,500/- Per Person Sharing For All 3 Days WHATS INCLUDED IN THE...",
      location: "Kenya",
    },
    {
      name: "Self Drives and Weekend Getaways Deals. ",
      price: "3,000",
      desc: "Self Drive Weekend Getaways From Ksh 3,000/- Per Person Sharing Per Night LAKE...",
      location: "Kenya",
    },
    {
      name: "Kenya Bush 3 Days  Safari Packages ",
      price: "11,500",
      desc: "3 Days 2021 Bush Safari Packages FROM KSH.11,500/- PER PERSON SHARING WHAT\u2019S INCLUDED...",
      location: "Kenya",
    },
    {
      name: "Zanzibar Holiday or Honeymoon Packages. ",
      price: "64,999",
      desc: "5 days Zanzibar Holiday or Honeymoon package From Ksh. 64,999/- Per Person sharing NOTE: THE...",
      location: "Tanzania",
    },

    {
      name: "Masai Mara 3 Days  Wildebeest Migration Packages ",
      price: "13,500",
      desc: "3Days Masai Mara Wildebeest Migration Safari Packages DAILY DEPARTURES FROM KSHS. 13,999/-",
      location: "Kenya",
      image: maasaiMara,
    },
    {
      name: "Seychelles Holiday or Honeymoon Packages. ",
      price: "118,999",
      desc: "5 days Seychelles Holiday or Honeymoon Packages From Ksh.118,999/- Per Person Sharing",
      location: "",
    },

    {
      name: "Amboseli Bush Package ",
      price: "17,500",
      desc: "3 Days Amboseli Bush Safari Packages FROM KSH.17,500/- PER PERSON SHARING",
      location: "Kenya",
    },
  ]);
  return (
    <div className="destinations_page">
      <div className="destination_greeting">
        <h4>Hi, Guest!</h4>
      </div>
      <div className="destination_text">
        <h2>Let's choose a travel destination</h2>
      </div>
      <div className="destination_country">
        <a href="#">All</a>
        <a className="active" href="#">
          Africa
        </a>
        <a href="#">Europe</a>
        <a href="#">Asia</a>
      </div>
      <div className="destination_categoryLink">
        <h4>Categories</h4>
        <a href="#">See all</a>
      </div>
      <div className="destination_categoryLinkActivity">
        <div className="category_card">
          <Category title="safari" img={safari} />
          <Category title="Beach" img={beach} />
          <Category title="Mountain" img={mountain} />
          <Category title="Historical" img={fort} />
        </div>
      </div>
      <div className="destinations_popular">
        <h4>Popular Destinations</h4>
        <div className="destination_items">
          <Swiper
            spaceBetween={1}
            slidesPerView={1.4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <SwiperSlide>
              <Destination
                img={maasaiMara}
                title="Maasai Mara"
                location="Kenya"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Destination
                img={maasaiMara}
                title="Maasai Mara"
                location="Kenya"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Destination
                img={maasaiMara}
                title="Maasai Mara"
                location="Kenya"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Destination
                img={maasaiMara}
                title="Maasai Mara"
                location="Kenya"
              />
            </SwiperSlide> */}

            {trips.map((trip) => (
              <SwiperSlide>
                <Destination
                  image={trip.image}
                  title={trip.name}
                  location={trip.location}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
