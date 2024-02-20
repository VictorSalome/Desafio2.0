import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface DropdownRegisterProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const DropdownRegister: React.FC<DropdownRegisterProps> = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = React.useState(selectedStatus);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (status: string) => {
    setSelectedValue(status);
    setSelectedStatus(status);
    handleClose();
  };

  return (
    <div>
      <TextField
        id="demo-customized-button"
        type="text"
        value={selectedValue}
        onClick={handleClick}
        placeholder="Status"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardArrowDownIcon />
            </InputAdornment>
          ),
          style: { borderRadius: "6px" },
        }}
        style={{ marginBottom: "8px" }}
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("Ativo")} disableRipple>
          Ativo
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Inativo")} disableRipple>
          Inativo
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Aguardando Ativação")}
          disableRipple
        >
          Aguardando Ativação
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Desativado")}
          disableRipple
        >
          Desativado
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default DropdownRegister;
