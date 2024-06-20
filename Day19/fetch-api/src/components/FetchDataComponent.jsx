import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function FetchDataComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //using useEffect to fetch data from API when it mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.phone}</li>

            </>
          );
        })}
      </ul>
    </div>
  );
}
