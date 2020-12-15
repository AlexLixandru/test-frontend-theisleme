import React, { useEffect, useState } from "react";
import "./../Styles/Card.scss";
import Modal from "./../Components/Modal";
import Dots from "./../Images/Dots.png";
function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        author={props.author}
        title={props.title}
        text={props.content}
        thumbnail={props.thumbnail}
      />
      <div className="card-container">
        <a href="#">
          <div className="card-thumbnail" onClick={openModal}>
            <img src={props.thumbnail.small} />
            <div class="image-overlay">
              <div class="overlay-text">Learn more</div>
            </div>
          </div>
        </a>
        <div className="card-content">
          <img className="dots-image" src={Dots} />
          <h1 className="card-title">{props.title}</h1>
          <h3 className="card-text">{props.content}</h3>
          <div className="card-footer">
            <h3 className="author-text">
              {props.author.name} - {props.author.role}
            </h3>
            <h3 className="date-text">15 Dec, 2020</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
