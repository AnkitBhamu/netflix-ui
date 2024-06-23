import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "../styles/Mylist.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useCookies } from "react-cookie";
import Footer from "./Footer";
export default function MyList() {
  let [m_data, setMdata] = useState([]);
  let [cookies, setcookie, removecookie] = useCookies();
  let [rendered, setrender] = useState(false);
  async function get_data() {
    try {
      let response1 = await axios.get(
        `http://127.0.0.1:8080/api/users/getMyList/${cookies["user-details"]._id}`
      );

      let final_data = await Promise.all(
        response1.data.map((item) =>
          axios
            .get("http://127.0.0.1:8080/api/movies/moviebyId/" + item)
            .then((response) => response.data)
            .catch((err) => console.log(err))
        )
      );
      setMdata(final_data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    get_data();
  }, [rendered]);

  return (
    <div>
      <Navbar />
      <div className="my-list-head">My List</div>
      <div className="mylist-container">
        {m_data.map((item, index) => (
          <VideoCard
            cardType={"mylist"}
            class={"video-card-mylist"}
            key={index}
            videodata={item}
            mylistrender={setrender}
            parentrenderstatus={rendered}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
