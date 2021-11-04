import { useRef } from "react";
import "./styles.css";

export default function Card({ author, text, children, open, handleOpen }) {
  const { name = "", avatar = "" } = author;
  const inputEl = useRef(null);
  return (
    <div className="postCardBox" ref={inputEl}>
      <div className="cardDetails">
        {open && (
          <div onClick={handleOpen} className="openIcon">
            +
          </div>
        )}
        <img src={avatar} alt="" />
        <div className="name">{name}</div>
      </div>
      {!open && (
        <div className="flexRow">
          <div className="divder" onClick={() => handleOpen(inputEl)} />
          <div className="cardInfo">
            {!!text && <div className="postText"> {text}</div>}
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
