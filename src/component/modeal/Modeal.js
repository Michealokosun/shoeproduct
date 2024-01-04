import Modal from "react-bootstrap/Modal";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import { useContext } from "react";
import { themeContext } from "../../App";

export function MyVerticallyCenteredModal(props) {
  const { image, handlechangeimage } = useContext(themeContext);
  const images = [img1, img2, img3, img4];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {images.map((item, index) => (
              <>
                <div class="carousel-item active" key={index}>
                  <img
                    src={image === "" ? item : image}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <div className="coral-images d-flex justify-content-between">
          {images.map((item, index) => (
            <div className="c_img1" key={index} onClick={handlechangeimage}>
              <img width={100} src={item} alt="" />
            </div>
          ))}
        </div>
      </Modal.Footer>
    </Modal>
  );
}
