import React from "react";
import "../css/pagination.css";
import Table from "../components/table";

function Pagination() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return <>{data.length > 0 ? <Table data={data}></Table> : <p>loading.....</p>}</>;
}

export default Pagination;
