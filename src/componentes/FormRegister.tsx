import { TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DropdownRegister from './DropdownRegister';
import { Controller } from "react-hook-form";
import { IUser } from '../interfaces/user.Interface';
import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';


const schema = yup
    .object({
        name: yup.string().required("O nome é obrigatorio"),
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        cpf: yup.string().min(11, "o CPF deverá ter 11 carácter").required("o cpf é obrigatório"),
        telefone: yup.string().required("O telefone é obrigatório"),
        status: yup.string().required("O status é obrigatório"),
    }).required()

const FormRegister = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IUser>({ resolver: yupResolver(schema), })

    const { setUser } = useUser();

    const onSubmit = (user: IUser) => {
        setUser(user);
        if (user) {
            toast.success("Usuario Cadastrado")

        }

    };

    console.log(errors)



    return (
        <>

            <ToastContainer />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-64'>
                <div >
                    <span className='text-red-500  absolute flex mt-14'>{errors.name?.message}</span>
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


                </div>
                <div>
                    <span className='text-red-500  absolute flex mt-14'>{errors.email?.message}</span>
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        placeholder="E-mail"
                        {...register("email")}
                    />
                </div>
                <div>
                    <span className='text-red-500  absolute flex mt-14'>{errors.cpf?.message}</span>
                    <TextField
                        id="cpf"
                        label="CPF"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        placeholder="CPF"
                        {...register("cpf")}
                    />
                </div>
                <div>
                    <span className='text-red-500  absolute flex mt-14'>{errors.telefone?.message}</span>
                    <TextField
                        id="telefone"
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        placeholder="Telefone"
                        {...register("telefone")}
                    />
                </div>
                <div className='mt-6'>
                    <span className='text-red-500  absolute flex mt-10'>{errors.status?.message}</span>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DropdownRegister
                                selectedStatus={value}
                                setSelectedStatus={(value: string) => onChange(value)}
                            />
                        )}
                    />
                </div>

                <div className='flex mt-10 gap-2'>
                    <Button variant="contained" type='submit' style={{ backgroundColor: '#FF6F00', color: 'white', width: '100%' }}>
                        Criar
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: '#FFFFFF', color: '#d07e0d', width: '100%', border: '1px solid #FFA500' }}>
                        <Link to="/">Voltar</Link>
                    </Button>


                </div>
            </form>
        </>
    );

};

export default FormRegister;
