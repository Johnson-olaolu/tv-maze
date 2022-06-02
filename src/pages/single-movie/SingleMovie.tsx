import { OljebraStar } from "oljebra-rating";
import React from "react";
import "./style.scss";

const SingleMovie = () => {
  return (
    <div className="">
      <div className="show-jumbotron">
        <h4 className="site-brand">TV Bland</h4>
        <div className="show-info">
          <img src="" alt="" className="" />
          <div className="">
            <OljebraStar gap="2px" max={5} size={12} rating={0} color="gold" backgroundColor="#CBCBCB" />
            <h2 className="show-title">This is the title of the TV show which is very long isn't it</h2>
            <p className="show-summary">
              Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis. quo conperto Montius tunc
              quaestor acer quidem sed ad lenitatem propensior, consulens in commune.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
