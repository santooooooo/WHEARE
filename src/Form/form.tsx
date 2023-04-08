import { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";
//import { useNavigate } from "react-router-dom";

export default function Form() {
  const [checked, setChecked] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //入力値のバリデーション
  const useCurrentLocation: boolean =
    checked && latitude === "" && longitude === "";

  const useLatitudeAndLongtitude: boolean =
    !checked && latitude !== "" && longitude !== "";

  const useNothing: boolean =
    checked === false && latitude === "" && longitude === "";

  return (
    <div className="form">
      <h1>This is Form Page!!</h1>
      <Box
        component="form"
        sx={{
          maxWidth: 300,
          display: "inline-block",
          border: 1,
          borderColor: "primary.main",
          borderRadius: 4,
          p: 2,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setChecked(!checked)
              }
            />
          }
          label="Set Current Location"
        />
        <TextField
          label="latitude"
          type="string"
          margin="normal"
          value={latitude}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setLatitude(e.target.value)
          }
        />
        <TextField
          label="longitude"
          type="string"
          margin="normal"
          value={longitude}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setLongitude(e.target.value)
          }
        />
        {/*現在地と緯度経度の指定がない時の警告*/}
        {useNothing && (
          <p>Please set Current Location or Latitude & Longtitude</p>
        )}
        {/*現在地と緯度経度を共に指定している時の警告*/}
        {!useNothing && !useCurrentLocation && checked && (
          <p>cannot set Current Location and Latitude & Longtitude together</p>
        )}
        {/*緯度経度の指定が不十分な時の警告*/}
        {!useNothing && !useLatitudeAndLongtitude && !checked && (
          <p>Please set Latitude & Longtitude</p>
        )}
        <Button
          variant="outlined"
          disabled={!(useCurrentLocation || useLatitudeAndLongtitude)}
          onClick={() => Submit(checked, latitude, longitude)}
        >
          Generate URL
        </Button>
      </Box>
    </div>
  );
}

function Submit(checked: boolean, latitude: string, longitude: string): any {
  //let navigate = useNavigate();
  //navigate("/");
  console.log(checked);
  console.log(latitude);
  console.log(longitude);
}
