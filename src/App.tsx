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
        <Route
          path="ar/:latitude/:longitude/:color/:text"
          element={<ArWithProp />}
        />
      </Routes>
    </div>
  );
}

function ArWithProp() {
  const { latitude } = useParams();
  const { longitude } = useParams();
  const { color } = useParams();
  const { text } = useParams();

  return (
    <Ar latitude={latitude} longitude={longitude} color={color} text={text} />
  );
}

export default App;
