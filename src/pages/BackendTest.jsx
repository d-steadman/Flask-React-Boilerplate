import axios from "axios";
import { useEffect, useState } from "react";

export default function BackendTest() {
  const [working, setWorking] = useState(false);

  // Load trending tags once on component load
  useEffect(() => {
    axios({ method: "GET", url: "/api/testing" })
      .then((res) => {
        setWorking(res.data.working);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, []);

  return <span>Is working: {working ? "Yes!" : "Nope"}</span>;
}
