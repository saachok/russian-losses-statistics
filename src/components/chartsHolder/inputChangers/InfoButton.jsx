import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

const InfoButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <InfoIcon
        aria-label="info"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
        color="secondary"
        sx={{
          position: 'relative',
          margin: 0,
          padding: 0,
        }}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClosePopover}
        disableRestoreFocus
      >
        <Typography variant="body2" sx={{ p: 1 }}>
          The interval must be less than 50 and bigger than 0. (1 ≤ range ≤ 50)
        </Typography>
      </Popover>
    </>
  );
};

export default InfoButton;
