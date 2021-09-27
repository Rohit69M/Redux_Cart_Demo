import React from "react";
import CartContainer from "./Components/container/CartContainer";
import { useEffect } from "react";
import { getData, sendData } from "./redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
// components
import Navbar from "./Components/navbar/Navbar";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allProduct);
  useEffect(() => {
    if (isInitial) {
      console.log("initial");
      isInitial = false;
      return;
    }
    dispatch(sendData(data));
  }, [data]);

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
