import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Top() {
  const navigate = useNavigate();

  return (
    <div className="top">
      <h1>This is Top Page</h1>
      <Button onClick={() => navigate(`/form`)} sx={{ width: 1 / 1 }}>
        Go to Form
      </Button>
    </div>
  );
}
