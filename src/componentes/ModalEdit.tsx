import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from 'react-icons/fa'
import { TextField } from '@mui/material';

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

export default function ModalEdit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);






    return (
        <div>
            <button onClick={handleOpen} className="border border-orange-600 hover:bg-orange-400 text-orange-500 hover:text-gray-200 font-sans flex items-center justify-center p-2 rounded w-32">
                <FaEdit />
                Editar
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        <div className='flex items-center gap-14'> <FaEdit /> MENU DE EDIÇÃO </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Nome"

                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="E-mail"

                        />
                        <TextField
                            id="cpf"
                            label="CPF"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="CPF"

                        />
                        <TextField
                            id="telefone"
                            label="Telefone"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="small"
                            placeholder="Telefone"

                        />


                    </Typography>
                </Box>
            </Modal>
        </div>



    );
}