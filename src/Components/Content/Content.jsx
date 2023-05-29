import React from "react";
import "./Content.css";

const Content = ({ title, info }) => {
  return (
    <div className="content">
      <span className="title">{title}: </span>
      <span className="info">{info}</span>
    </div>
  );
};

export default Content;
