import React from "react";
import {
  useCurrentLocation,
  useLatitude,
  useLongitude,
} from "./../DataProvider";

export default function Url() {
  const { checked } = useCurrentLocation();
  const { latitude } = useLatitude();
  const { longitude } = useLongitude();
  console.log(checked);
  console.log(latitude);
  console.log(longitude);
  return (
    <div className="url">
      <h1>This is Url Page</h1>
      <h1>CurrentLocation: {checked.toString()}</h1>
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude}</h1>
    </div>
  );
}
