import React from "react";

export default function Ar({ latitude, longitude, color, text }: ArProps) {
  return (
    <div className="ar">
      <h1>This is AR Page</h1>
      <h1>latitude {latitude}</h1>
      <h1>longitude {longitude}</h1>
      <h1>color {color}</h1>
      <h1>text {text}</h1>
    </div>
  );
}

type ArProps = {
  latitude?: string;
  longitude?: string;
  color?: string;
  text?: string;
};
