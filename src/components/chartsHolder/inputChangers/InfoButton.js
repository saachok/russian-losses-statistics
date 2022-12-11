import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const InfoButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-label="info"
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          position: "relative",
          margin: 0,
          padding: 0,
        }}
      >
        <InfoIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography variant="body2" sx={{ p: 1 }}>
          The interval must be less than 50 and bigger than 0. (1 ≤ range ≤ 50)
        </Typography>
      </Popover>
    </div>
  );
};

export default InfoButton;
