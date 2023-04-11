import { useEffect } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  useCurrentLocation,
  useLatitude,
  useLongitude,
} from "./../DataProvider";

export default function Form() {
  const { checked, setChecked, resetChecked } = useCurrentLocation();
  const { latitude, setLatitude, resetLatitude } = useLatitude();
  const { longitude, setLongitude, resetLongitude } = useLongitude();
  const navigate = useNavigate();

  //入力値のバリデーション
  const checkCurrentLocation: boolean =
    checked && latitude === "" && longitude === "";
  const checkLatitudeAndLongitude: boolean =
    !checked && latitude !== "" && longitude !== "";
  const checkNothing: boolean =
    checked === false && latitude === "" && longitude === "";
  const checkIsNumber: boolean = !(
    isNaN(Number(latitude)) || isNaN(Number(longitude))
  );

  //描画時に入力値をリセット
  useEffect(() => {
    resetChecked();
    resetLatitude();
    resetLongitude();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form">
      <h1>This is Form Page!!</h1>
      <Box
        component="form"
        sx={{
          maxWidth: 300,
          display: "inline-block",
          border: 2,
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
        {checkNothing && (
          <Alert severity="error">
            Please set Current Location or Latitude & Longitude
          </Alert>
        )}
        {/*現在地と緯度経度を共に指定している時の警告*/}
        {!checkNothing && !checkCurrentLocation && checked && (
          <Alert severity="error">
            cannot set Current Location and Latitude & Longitude together
          </Alert>
        )}
        {/*緯度経度の指定が不十分な時の警告*/}
        {!checkNothing && !checkLatitudeAndLongitude && !checked && (
          <Alert severity="error">Please set Latitude & Longitude</Alert>
        )}
        {/*緯度経度の値が数値ではない時の警告*/}
        {!checkIsNumber && (
          <Alert severity="error">Invalid Value in Latitude & Longitude</Alert>
        )}
        <Box sx={{ m: 0.5 }} />
        <Button
          variant="outlined"
          disabled={
            !(
              checkCurrentLocation ||
              (checkLatitudeAndLongitude && checkIsNumber)
            )
          }
          onClick={() => navigate(`/url`)}
        >
          Generate URL
        </Button>
      </Box>
    </div>
  );
}
