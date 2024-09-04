import { useEffect, useState } from "react";
import randomUtility from "./utilities/randomUtility";
import initHex from "./utilities/initHex";
import "./index.css";

export default function ColorGenerator() {
  // Colors State
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#FFFFFF");

  function handleHexColor() {
    // #FFFFFF
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += initHex[randomUtility(initHex.length)];
    }

    setColorType("hex");
    setColor(hexColor);
  }

  function handleRgbColor() {
    // rgb(255, 255, 255);
    let r = randomUtility(255);
    let g = randomUtility(255);
    let b = randomUtility(255);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    setColorType("rgb");
    setColor(rgbColor);
  }

  useEffect(() => {
    colorType === "hex" ? handleHexColor() : handleRgbColor();
  }, [colorType]);

  return (
    <div className="generator">
      <div className="wrapper">
        <div className="buttons">
          <button
            className={colorType === "hex" && "selected"}
            onClick={() => {
              setColorType("hex");
            }}
          >
            Generate <b>Hex</b> Color
          </button>
          <button
            className={colorType === "rgb" && "selected"}
            onClick={() => {
              setColorType("rgb");
            }}
          >
            Generate <b>RGB</b> Color
          </button>
          <button
            onClick={() => {
              colorType === "hex" ? handleHexColor() : handleRgbColor();
            }}
          >
            Generate <b>Random</b> Color
          </button>
        </div>
        <div className="color-view" style={{ background: color }}>
          <h1>{color}</h1>
        </div>
      </div>
      <span>
        <a target="_blank" href="https://github.com/Mohxmed">
          @Mohxmeduni
        </a>
      </span>
    </div>
  );
}
