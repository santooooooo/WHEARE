import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WHEARELogo from "./assets/WHEARELogo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(`/`)} sx={{ width: 1 / 1 }}>
      <img src={WHEARELogo} alt="WHEARE LOGO" width="50%" />
    </Button>
  );
}
