import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit, FaTrash } from 'react-icons/fa'
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IUser } from '../interfaces/user.Interface';
import useUser from '../hooks/useUser';


const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalEdit({ cliente }: { cliente: IUser }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const useres = useUser()


    console.log(cliente)


    const { register,
        handleSubmit,
    } = useForm<Omit<IUser, 'id'>>({

        defaultValues: {
            name: cliente.name,
            email: cliente.email,
            cpf: cliente.cpf,
            telefone: cliente.telefone,
            status: cliente.status,

        }
    })

    const onSubmit = (data: Omit<IUser, 'id'>) => {
        console.log("dataaas", data)
        useres.editUser({ ...data, id: cliente.id })
        window.location.reload()

    }

    const handleDelete = () => {
        useres.deleteUser(cliente)
        window.location.reload()

    }

    const refreshPage = () => {
        window.location.reload()
    }



    return (
        <div>
            <div className='flex gap-5'>
                <button onClick={handleOpen} className="border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans flex items-center justify-center p-2 rounded w-24">
                    <FaEdit />
                    Editar
                </button>
                <button onClick={handleDelete} className="border border-red-600 hover:bg-red-400 text-red-500 hover:text-gray-200 font-sans flex items-center justify-center p-2 rounded w-24">
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
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        <span className='flex items-center gap-14'> <FaEdit /> MENU DE EDIÇÃO </span>
                    </Typography>

                    <form id="modal-modal-description" className='mt-2'
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Nome"
                            {...register("name", { required: true })}


                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="E-mail"
                            {...register("email", { required: true })}

                        />
                        <TextField
                            id="cpf"
                            label="CPF"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="CPF"
                            {...register("cpf", { required: true })}


                        />
                        <TextField
                            id="telefone"
                            label="Telefone"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Telefone"
                            {...register("telefone", { required: true })}

                        />
                        <div className='flex justify-between'>
                            <button type='submit' className='border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans items-center rounded w-24'>Enviar</button>
                            <button onClick={refreshPage} className='border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans items-center rounded w-24'>Voltar</button>
                        </div>

                    </form>

                </Box>
            </Modal>
        </div>



    );
}