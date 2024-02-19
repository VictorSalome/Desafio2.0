
import BasicMenu from './DropdownHome';
import { useEffect, useState } from 'react';
import { IUser } from '../interfaces/user.Interface';
import ModalEdit from './ModalEdit';



const CardsClients = () => {
    const [clientes, setClientes] = useState<IUser[]>([]);


    useEffect(() => {
        // Recuperando os usuários do Local Storage
        const storedDataString = localStorage.getItem('userData');
        const users = storedDataString ? JSON.parse(storedDataString) : [];

        setClientes(users);
    }, []);

    return (
        <article className='flex flex-col gap-5 text-lg font-sans text-gray-500'>
            {clientes.map((cliente: IUser, index: number) => (
                <div key={index} className='border border-gray-200 flex justify-between h-24 items-center px-2'>
                    <div className='w-full'>
                        <h2>{cliente.name}</h2>
                        <p>{cliente.email}</p>
                    </div>

                    <div className='flex flex-col items-center w-full'>
                        <p>{cliente.cpf}</p>
                        <p>{cliente.telefone}</p>
                    </div>

                    <div className="flex items-center w-full ">
                        <BasicMenu status={cliente.status} id={cliente.id} />
                    </div>
                    <div>
                        <ModalEdit cliente={cliente} />
                    </div>
                </div>
            ))}
        </article>
    )
}

export default CardsClients;
