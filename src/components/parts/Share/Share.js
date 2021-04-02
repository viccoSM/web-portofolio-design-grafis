import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Share = () => {
  const imgUrl = JSON.parse(localStorage.getItem("imgUrl"));
  return (
    <>
      <div className="share container">
        <div className="d-flex justify-content-center">
          <h1>Send this file to your social media</h1>
        </div>
        <div className="image-container d-flex justify-content-center">
          <img src={imgUrl} alt="" />
        </div>
        <div className="content d-flex justify-content-center">
          <FacebookShareButton url={imgUrl}>
            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton url={imgUrl}>
            <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default Share;
