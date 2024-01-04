import Container from "react-bootstrap/esm/Container";
import "./product.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Preview from "../impreview/preview";
import { useState } from "react";

export const Product = () => {
  const [qnty, setqnty] = useState(0);
  const incre = (e) => {
    setqnty(qnty + 1);
  };
  const decre = (e) => {
    setqnty(qnty - 1);
  };
  return (
    <div className="product mt-3">
      <Container>
        <Row>
          <Col className="d-flex flex-row flex-lg-column  " lg={6}>
            <Preview />
          </Col>
          <Col lg={6}>
            <div className="img-details pt-5 px-4">
              <div className="h5 title fs-5">
                <p>SNAEKER COMPANY</p>
              </div>
              <div className="h1">
                <h1>Fall Limited Edition Sneakers</h1>
              </div>
              <div className="para my-4">
                <p className=" text-secondary ">
                  These low-profile sneakers are your persfect casual waer
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everthing the weather can offer
                </p>
              </div>
              <div className="slashed-price d-flex d-md-block justify-content-between align-items-center">
                <div className="price">
                  <span className="me-3 h1 fs-3">$125.00</span>
                  <span className="h5">50%</span>
                </div>
                <div className="text-underline my-2 text-secondary h5">
                  <p>$250.00</p>
                </div>
              </div>

              <div className="buttons mt-5 d-flex flex-column flex-md-row gap-4">
                <div className="btn1 d-grid ">
                  <ButtonGroup
                    className="groupedbutton"
                    aria-label="Basic example"
                  >
                    <Button
                      disabled={qnty < 1 ? true : false}
                      name="minus"
                      onClick={decre}
                      variant="secondary"
                    >
                      <img src={minus} alt="" />
                    </Button>
                    <Button variant="secondary">{qnty}</Button>
                    <Button name="plus" onClick={incre} variant="secondary">
                      <img src={plus} alt="" />
                    </Button>
                  </ButtonGroup>
                </div>

                <div className="btn2 d-grid ">
                  <Button className="" variant="primary" size="lg" active>
                    <span>
                      <img className="img-fluid" src={cart} alt="" />
                    </span>
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
