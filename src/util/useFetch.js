//app.js에서 함수를 가져와서 Custom hook을 만들어 봅시다.
//hooks.js의 이름도 알맞게 바꿔주세요.
import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      })
      .catch((error) => {
        console.log("useFetch error:", error);
      });
  }, [data]);

  return data;
}
