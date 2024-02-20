import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUser } from "../interfaces/user.Interface";
import { toast } from "react-toastify";

interface ModalEditProps {
  users: {
    setUser: (data: IUser) => void;
    getAllUsers: () => IUser[];
    editUser: (data: IUser) => void;
    deleteUser: (data: IUser) => void;
  };
  cliente: IUser;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px", // Agora definido como uma string
  maxWidth: "90%",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 12,
  p: 4,
};

const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobileDevice) {
  style.width = "90%";
  style.maxWidth = "none";
}

export default function ModalEdit({ users, cliente }: ModalEditProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm<Omit<IUser, "id">>({
    defaultValues: {
      name: cliente.name,
      email: cliente.email,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      status: cliente.status,
    },
  });

  const onSubmit = (data: Omit<IUser, "id">) => {
    users.editUser({ ...data, id: cliente.id });

    toast.success("Usuário Alterado com Sucesso");
  };

  const handleDelete = () => {
    users.deleteUser(cliente);
    toast.success("Usuário Excluído com Sucesso");
  };
  return (
    <div>
      <div className="flex items-end ml-36 gap-3">
        <button
          onClick={handleOpen}
          className="border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans flex items-center justify-center p-2 rounded w-20 h-10 md:w-24 text-sm md:text-base"
        >
          <FaEdit />
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="border border-red-600 hover:bg-red-400 text-red-500 hover:text-gray-200 font-sans flex items-center justify-center p-2 rounded w-20 md:w-24 text-sm md:text-base"
        >
          <FaTrash />
          Excluir
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="flex items-center gap-14">Menu de edição</span>
          </Typography>

          <form
            id="modal-modal-description"
            className="mt-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              id="nome"
              label="Nome"
              variant="standard"
              fullWidth
              margin="normal"
              size="small"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            <TextField
              id="email"
              label="E-mail"
              variant="standard"
              fullWidth
              margin="normal"
              size="small"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
            <TextField
              id="cpf"
              label="CPF"
              variant="standard"
              fullWidth
              margin="normal"
              size="small"
              placeholder="CPF"
              {...register("cpf", { required: true })}
            />
            <TextField
              id="telefone"
              label="Telefone"
              variant="standard"
              fullWidth
              margin="normal"
              size="small"
              placeholder="Telefone"
              {...register("telefone", { required: true })}
            />
            <div className="flex justify-end gap-4 h-9">
              <button
                onClick={handleClose}
                className="border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans items-center rounded w-24 "
              >
                Voltar
              </button>
              <button
                type="submit"
                className="border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans items-center rounded w-24"
              >
                Salvar
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
