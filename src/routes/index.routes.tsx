import React from "react";
import { Routes, Route } from "react-router-dom";
const  LandingPage  = React.lazy(() => import("../pages/landing/LandingPage")) 
const  SingleMovie = React.lazy(() => import("../pages/single-movie/SingleMovie")) ;

const IndexRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element ={<LandingPage/>}/>
          <Route path="/movie/:showId" element ={<SingleMovie/>}/>
        </Routes>
      </React.Suspense>
    </>
  );
};

export default IndexRoutes;
