import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IUser } from "../interfaces/user.Interface";

interface BasicMenuProps {
  id: IUser["id"];
  status: string;
}

export default function BasicMenu({ status, id }: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [atualStatus, setAtualStatus] = React.useState<string>(status);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  interface StatusColors {
    [key: string]: string;
  }

  //função para setar status no localStorage
  const setStatus = (newStatus: string) => {
    /**
         * -- codigo antigo
         *  if(!id) return;
            editUser(id, 'status', newStatus);
         */

    /**
     * Nessa logica, a gente pega todos os items do 'userData' no localStorage,
     * altera o status do usuário pelo seu id e salva novamente com os dados atualizados.
     */

    const dadosLocalString = localStorage.getItem("userData");
    const usersLocal: IUser[] = JSON.parse(
      dadosLocalString as unknown as string
    );

    usersLocal.map((user) => {
      if (user.id === id) user.status = newStatus;
    });

    const newUser = JSON.stringify(usersLocal);
    localStorage.setItem("userData", newUser);

    /**
     * Aqui ele seta no useState o novo usuário, assim fazendo que a gente chame a função 'statusColors',
     * que usa o useMemo para cada vez que altera esse estado ele atualizar
     */

    setAtualStatus(newStatus);
  };

  //Função que atualiza e altera a cor cada vez que você seta um novo "AtualStatus/Status"
  const statusColors = React.useMemo(() => {
    const colors: StatusColors = {
      Ativo: "green",
      Inativo: "red",
      "Aguardando ativação": "yellow",
      Desativado: "gray",
    };

    return colors[atualStatus];
  }, [atualStatus]);

  return (
    <div>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <span
          style={{
            marginRight: "10px",
            height: "10px",
            width: "10px",
            backgroundColor: statusColors,
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>
        {atualStatus}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setStatus("Ativo");
          }}
        >
          Ativo
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setStatus("Inativo");
          }}
        >
          Inativo
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setStatus("Aguardando ativação");
          }}
        >
          Aguardando Ativação
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setStatus("Desativado");
          }}
        >
          Desativado
        </MenuItem>
      </Menu>
    </div>
  );
}
