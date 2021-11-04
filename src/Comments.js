import { useState } from "react";
import Card from "./Card";
import "./styles.css";

export default function Comments(props) {
  const [open, setOpen] = useState(false);
  const { data = {} } = props;
  const handleOpen = (inputEl) => {
    if (!open) {
      console.log(inputEl.current.clientHeight);
      // window.screenTop = 0;
      // inputEl.current.scrolltop = 0;
    }
    setOpen(!open);
  };
  return (
    <div className="CommentsCard">
      <div className="cardAuthorBox">
        <Card
          author={data.author}
          text={data.text}
          open={open}
          handleOpen={handleOpen}
        >
          {!open && data.replies && data.replies.length && (
            <div>
              {data.replies.map((replie, index) => {
                return <Comments key={index} data={replie} />;
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
