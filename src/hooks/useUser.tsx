import { useState } from "react";
import { IUser } from "../interfaces/user.Interface";
import { v4 as uuidv4 } from 'uuid';


interface Props {
    setUser: (user: IUser) => void,
    getAllUsers: () => IUser[],
}

const useUser = (): Props => {
    const [users, setUsers] = useState<IUser[]>(() => {
        const storedDataString = localStorage.getItem('userData');
        return storedDataString ? JSON.parse(storedDataString) : [];
    });

    
    const setUser = (data: IUser) => {
        const newUser: IUser = {
            ...data,
            id: uuidv4()
        };

        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
    }

    const getAllUsers = () => {
        return users;
    }

    /**
     * 
     *  -- codigo antigo
    const editUser = (userId: string, field: string, value: string) => {
        const updatedUsers = users.map(user => {
            if(user.id === userId) {
                return {
                    ...user,
                    [field]: value
                }
            }

            return user
        })

        setUsers(updatedUsers);
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
    }
     */


    
    return {
     setUser,
     getAllUsers
     
    }
}


export default useUser;