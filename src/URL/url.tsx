import React from "react";
import {
  useCurrentLocation,
  useLatitude,
  useLongitude,
  //useUrl,
} from "./../DataProvider";

export default function Url() {
  const { checked } = useCurrentLocation();
  const { latitude, setLatitude } = useLatitude();
  const { longitude, setLongitude } = useLongitude();
  //const { url, setUrl, resetUrl } = useUrl();

  if (checked) {
    const setCurrentPosition = (pos: any) => {
      const crd = pos.coords;
      setLatitude(crd.latitude);
      setLongitude(crd.longitude);
    };

    navigator.geolocation.getCurrentPosition(
      setCurrentPosition,
      error,
      options
    );
  }

  return (
    <div className="url">
      <h1>This is Url Page</h1>
      <h1>CurrentLocation: {checked.toString()}</h1>
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude}</h1>
    </div>
  );
}

function error(err: any) {
  console.error("Error in retrieving position", err);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
