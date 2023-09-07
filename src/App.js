import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [category, setcategory] = useState("");
  const [messagetext, setmessagetext] = useState("");
  const [text, settext] = useState("");
  const [postdata, setpostdata] = useState([]);
  const [filename, setfilename] = useState([]);
  const [uploadchange, setuploadchange] = useState(false);
  const [file, setFile] = useState();
  const upload = async () => {
    setuploadchange(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("https://zzsocapi.onrender.com/upload", formData, { text: text })
      .then((res) => {
        console.log(res.data); //   https://bigserver.onrender.com/upload

        console.log(0);
        setfilename([...filename, res.data]);
      })
      .catch((er) => console.log(er));
    setuploadchange(false);
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="fileupload">
          <div className="labelshadow"></div>
          <span className="remove">
            {" "}
            <input
              className="link"
              id="fileupload"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </span>
        </label>
      </div>
      <div>
        {uploadchange ? (
          <div className="link">uploading..</div>
        ) : (
          <button type="button" className="link" onClick={upload}>
            Upload
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
