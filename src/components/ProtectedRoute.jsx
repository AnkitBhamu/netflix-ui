import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export default function ProtectedRoute(props) {
  let cookie = useCookies()[0];
  let navigate = useNavigate();
  let [user_verified, setverified] = useState(false);

  function checkUserLogged() {
    let item = cookie["user-details"];
    if (!item) {
      navigate("/login");
    } else setverified(true);
  }

  useEffect(checkUserLogged, []);
  return <div>{user_verified ? props.children : null}</div>;
}
