import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "../styles/Mylist.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useCookies } from "react-cookie";
import Footer from "./Footer";
import Emptyimage from "../images/—Pngtree—empty box icon for your_4814103.png";
export default function MyList() {
  let [m_data, setMdata] = useState([]);
  let [cookies, setcookie, removecookie] = useCookies();
  let [rendered, setrender] = useState(false);
  let [emptylist, setEmptyList] = useState(false);

  async function get_data() {
    try {
      let response1 = await axios.get(
        process.env.REACT_APP_API_URL +
          `/api/users/getMyList/${cookies["user-details"]._id}`
      );

      let final_data = await Promise.all(
        response1.data.map((item) =>
          axios
            .get(
              process.env.REACT_APP_API_URL + "/api/movies/moviebyId/" + item
            )
            .then((response) => response.data)
            .catch((err) => console.log(err))
        )
      );
      if (final_data.length === 0) {
        console.log("final data length is :", final_data.length);
        setEmptyList(true);
      } else setEmptyList(false);
      setMdata(final_data);
    } catch (err) {
      console.log(err);
    }
  }

  function renderNodata() {
    return (
      <div
        style={{
          height: "calc(100vh - 410px)",
          color: "white",
          fontFamily: "Roboto,Arial",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <img style={{ height: "400px" }} src={Emptyimage} alt="" />
      </div>
    );
  }

  useEffect(() => {
    get_data();
  }, [rendered]);

  return (
    <div>
      <Navbar />
      <div className="my-list-head">My List</div>

      {emptylist === true ? (
        renderNodata()
      ) : (
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
      )}

      <Footer />
    </div>
  );
}
