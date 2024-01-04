import React from "react";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import next from "../../images/icon-next.svg";
import prev from "../../images/icon-previous.svg";
import { useContext } from "react";
import { themeContext } from "../../App";
import { useState } from "react";
import { MyVerticallyCenteredModal } from "../modeal/Modeal";

export default function Preview() {
  const [curr, setcurr] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const images = [img1, img2, img3, img4];

  const handleprev = () => {
    if (curr <= 0) {
      setcurr(curr + 3);
    } else {
      setcurr(curr - 1);
    }
  };
  const handlenext = () => {
    if (curr >= images.length - 1) {
      setcurr(curr - (images.length - 1));
    } else {
      setcurr(curr + 1);
    }
  };
  const { image, handlechangeimage, overlay } = useContext(themeContext);

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="img-preview">
        <div onClick={handleprev} className="prev d-block d-lg-none">
          <img src={prev} alt="" />
        </div>
        <img
          onClick={() => setModalShow(true)}
          className="img-fluid img-thumbnail d-none d-lg-block  rounded"
          src={image === "" ? img1 : image}
          alt=""
        />
        <img
          className="img-fluid img-thumbnail d-block d-lg-none  rounded"
          src={images[curr]}
          alt=""
        />
        <div onClick={handlenext} className="next d-block d-lg-none">
          <img src={next} alt="" />
        </div>
      </div>

      <div className="images flex-column flex-lg-row  d-flex justify-content-between align-items-center mt-0 mt-lg-3">
        {images.map((item, index) => (
          <div className="img1 d-none d-lg-block" key={index}>
            <div className={overlay ? "img-overlay " : ""}></div>

            <img
              onClick={handlechangeimage}
              width={90}
              className={`${index} rounded`}
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
