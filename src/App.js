import dataJson from "./test.js";
import Comments from "./Comments";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Comments data={dataJson} />
    </div>
  );
}
