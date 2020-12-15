import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./../Styles/Modal.scss";
import cancel from "./../Images/cancel.png";

function Modal(props) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
      console.log("cliiick");
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.showModal) {
        props.setShowModal(false);
      }
    },
    [props.setShowModal, props.showModal]
  );

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.showModal ? 1 : 0,
  });

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div>
      {props.showModal ? (
        <div ref={modalRef} className="background" onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal-wrapper">
              <div className="close-btn">
                <a href="#">
                  <img
                    aria-label="Close modal"
                    onClick={() => props.setShowModal((prev) => !prev)}
                    src={cancel}
                  />
                </a>
              </div>
              <div className="modal-thumbnail">
                <img src={props.thumbnail.large} />
              </div>
              <div className="modal-content">
                <h1 className="modal-title">{props.title}</h1>
                <h3 className="modal-text">{props.text}</h3>

                <div className="modal-footer">
                  {props.author.avatar ? (
                    <img src={props.author.avatar} />
                  ) : null}
                  <div className="text-footer">
                    <h3>
                      {props.author.name} - {props.author.role}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
