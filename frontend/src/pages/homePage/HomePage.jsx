import { useState, useEffect } from "react";
import axios from "axios";

const ApplicationID = process.env.REACT_APP_ApplicationID;
const SearchOnlyAPI = process.env.SearchOnlyAPI;

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8090/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(ApplicationID);

  return (
    <div>
      {ApplicationID}
      {data && data.adapter[0]}
    </div>
  );
}
