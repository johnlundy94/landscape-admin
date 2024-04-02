import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RowActionsMenu = ({ onEmail, onDelete, onAccept }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="row-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            onAccept();
            handleClose();
          }}
        >
          Accept Quote
        </MenuItem>
        <MenuItem
          onClick={() => {
            onEmail();
            handleClose();
          }}
        >
          Email Customer
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDelete();
            handleClose();
          }}
        >
          Delete Quote
        </MenuItem>
      </Menu>
    </>
  );
};

export default RowActionsMenu;
