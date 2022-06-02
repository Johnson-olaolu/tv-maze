import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexRoutes from "./routes/index.routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Maze API</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<IndexRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
