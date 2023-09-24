import React, { useState } from "react";
import {
  useCurrentLocation,
  useLatitude,
  useLongitude,
} from "./../DataProvider";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Url() {
  const { checked } = useCurrentLocation();
  const { latitude, setLatitude } = useLatitude();
  const { longitude, setLongitude } = useLongitude();
  const baseUrl: string = window.location.host + "/ar/";
  const navigate = useNavigate();
  //クリップボードにコピーした時の結果を表示
  let [copied, setCopied] = useState(false);
  const color = copied ? "success" : "primary";

  //latitude & longitudeの値をセット
  if (checked) {
    const setCurrentPosition = (pos: any) => {
      const crd = pos.coords;
      setLatitude(crd.latitude);
      setLongitude("/" + crd.longitude);
    };

    navigator.geolocation.getCurrentPosition(
      setCurrentPosition,
      error,
      options
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        display: "inline-block",
      }}
    >
      <Typography variant="h5">Share URL with Friends</Typography>
      <Box
        sx={{
          maxWidth: 350,
          display: "inline-block",
          border: 2,
          borderColor: "primary.main",
          borderRadius: 2,
          mt: 2,
        }}
      >
        <TextField
          value={baseUrl + latitude + longitude}
          type="readOnly"
          variant="filled"
          size="small"
        />
        <Button
          sx={{
            mt: 1,
          }}
          color={color}
          onClick={() => {
            copyTextToClipboard(
              baseUrl + latitude + longitude,
              copied,
              setCopied
            );
          }}
        >
          {copied ? "copied" : "copy"}
        </Button>
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => navigate("/ar/" + latitude + longitude)}
      //href="http://santooooooo.github.io/"
      >
        Go to AR Page
      </Button>
    </Box>
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

//URLをクリップボードにコピー
function copyTextToClipboard(
  url: string,
  copied: boolean,
  setCopied: Function
) {
  navigator.clipboard
    .writeText(url)
    .then(() => {
      setCopied(!copied);
    })
    .catch((err) => {
      console.log(err);
    });
}
