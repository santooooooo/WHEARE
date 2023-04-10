import React from "react";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Top from "./Top/top";
import Form from "./Form/form";
import Ar from "./AR/ar";
import Url from "./URL/url";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="form" element={<Form />} />
        <Route path="url" element={<Url />} />
        <Route path="ar/:latitude/:longitude" element={<ArWithProp />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

function ArWithProp() {
  const { latitude } = useParams();
  const { longitude } = useParams();

  return <Ar latitude={latitude} longitude={longitude} />;
}

function NotFoundError() {
  return (
    <div>
      <h1>404 Error</h1>
    </div>
  );
}

export default App;
