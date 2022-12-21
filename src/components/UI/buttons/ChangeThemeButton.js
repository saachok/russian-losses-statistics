import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

const ChangeThemeButton = ({ mode, setMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const switchTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <IconButton
        aria-label="themeSwitcher"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onClick={switchTheme}
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
        color="secondary"
        sx={{
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Popover
        id={"mouse-over-popover"}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handleClosePopover}
        disableRestoreFocus
      >
        <Typography variant="body2" sx={{ p: 1 }}>
          Switch to {mode === "light" ? "dark" : "light"} mode
        </Typography>
      </Popover>
    </>
  );
};

export default ChangeThemeButton;
