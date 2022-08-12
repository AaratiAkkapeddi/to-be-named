import sketch1 from "./sketch1";
import sketch2 from "./sketch2";
import sketch3 from "./sketch3";
import sketch4 from "./sketch4";
import sketch5 from "./sketch5";
import sketch6 from "./sketch6";
import genesis from "../Map/genesis.gif"
import { ReactP5Wrapper } from "react-p5-wrapper";
import React from "react";
import * as styles from "./texture.module.css";
import { Link } from "@reach/router";
import TranslatedPhrase from "../TranslationHelpers/translatedPhrase";

const Texture = () => {
  return (
      <div className={styles.root}>
        <ReactP5Wrapper sketch={sketch1} />
        <ReactP5Wrapper sketch={sketch2} />
        <ReactP5Wrapper sketch={sketch3} />
        <ReactP5Wrapper sketch={sketch4} />
        <ReactP5Wrapper sketch={sketch5} />
        <div className={styles.solid}><ReactP5Wrapper sketch={sketch6} /></div>
        <img src={genesis}/>
      </div>
  )
};

export default Texture;


