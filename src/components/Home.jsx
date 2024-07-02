import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Preview from "./Preview";
import Preview2 from "./Preview2";
import ContentList from "./ContentList";
import axios from "axios";
import Footer from "./Footer";
import { useCookies } from "react-cookie";

// initialise our debouncer
function debouncer(delay) {
  let timeout;
  return function timeoutcreater(cb) {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}

let ownfunction = debouncer(500);

export default function Home() {
  let cookie = useCookies()[0];
  let [content_type, setcontent] = useState("movies");
  let [list_data, setList] = useState([]);
  let [range, setrange] = useState([0, Math.ceil(window.innerWidth / 250)]);

  // changing the window size
  // it is fired with every pixel that change
  // lets create a debouncer
  window.onresize = () => {
    ownfunction(() => {
      setrange([0, Math.ceil(window.innerWidth / 250)]);
    });
  };

  function get_data() {
    axios
      .get(
        process.env.REACT_APP_API_URL + `/api/movies/listsAll/${content_type}`,
        { headers: { Authorization: `Bearer ${cookie["user-details"].token}` } }
      )
      .then((response) => {
        setList(response.data.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    get_data();
  }, [content_type]);

  return (
    <div>
      <Navbar setType={setcontent} />
      <Preview2 type={content_type} />
      <div className="content">
        {list_data.map((item, index) => (
          <ContentList range={range} key={index} list_data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
