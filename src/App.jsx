import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;
    const imageChanger = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current == total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageChanger();
    let interval = setInterval(imageChanger, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  useEffect(() => {
    console.log("mount oldu");
  }, []);
  const handelr = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[585px] bg-logo-pattern bg-[length:465px_635px] bg-[top_left_-46px] relative">
        <button onClick={handelr}>Clickme {count} </button>
        <div className="w-[250px] h-[538px] absolute top-6 right-5" ref={ref}>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700"
            src="/ic-gorsel.png"
            alt="insta telefon"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700"
            src="/ic-gorsel2.png"
            alt="insta telefon"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700"
            src="/ic-gorsel3.png"
            alt="insta telefon"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700"
            src="/ic-gorsel4.png"
            alt="insta telefon"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
