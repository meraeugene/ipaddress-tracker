import React, { useState } from "react";
import "./Hero.css";
import bg from "../../images/bg-removebg2.png";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";

const Hero = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [isInvalidIP, setIsInvalidIP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setIPAddress(e.currentTarget.value);
    setIsInvalidIP(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (IPAddress.trim() === "" || !isValidIPAddress(IPAddress)) {
      setIsInvalidIP(true);
      return;
    }

    setIsLoading(true); // Start loading

    fetch(`https://ipapi.co/${IPAddress}/json/`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("IPAddressData", JSON.stringify(data));
        setIsLoading(false); // Stop loading
        navigate("/result");
      });
  };

  const isValidIPAddress = (ipAddress) => {
    const ipFormat = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipFormat.test(ipAddress);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="ip__address-tracker ">
          <h1>IP Address Tracker</h1>
          <p>
            Discover the secrets hidden behind every IP address. Track, analyze,
            and unlock valuable insights with our powerful IP Address Tracker.
            Unveil the digital footprints and unravel the mysteries of the
            online world effortlessly.
          </p>
          <form onSubmit={handleSubmit} className="ip__address-tracker-form">
            <input
              type="text"
              placeholder={
                isInvalidIP
                  ? "Please type a valid IP Address"
                  : "Search for any IP address or domain"
              }
              onChange={handleInput}
              value={IPAddress}
              className={isInvalidIP ? "invalid-input" : ""}
            />
            <button
              type="submit"
              className={isInvalidIP ? "invalid-input" : ""}
            >
              {isLoading ? "Loading..." : "Track"}
            </button>
          </form>
        </div>

        <div className="ip__address-img">
          <img src={bg} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Hero;
