import { useState } from "react";
import { IUser } from "../interfaces/user.Interface";
import { v4 as uuidv4 } from "uuid";

const useUser = () => {
  const [users, setUsers] = useState<IUser[]>(() => {
    const storedDataString = localStorage.getItem("userData");
    return storedDataString ? JSON.parse(storedDataString) : [];
  });

  const setUser = (data: IUser) => {
    const newUser: IUser = {
      ...data,
      id: uuidv4(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  };

  const editUser = (data: IUser) => {
    const userList = users.filter((user) => user.id !== data.id);
    const updatedUsers = [...userList, data];
    setUsers(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  };

  const deleteUser = (data: IUser) => {
    const userList = users.filter((user) => user.id !== data.id);
    const removeUsers = userList;
    setUsers(removeUsers);
    localStorage.setItem("userData", JSON.stringify(removeUsers));
  };

  const getAllUsers = () => {
    return users;
  };

  return {
    users,
    setUser,
    getAllUsers,
    editUser,
    deleteUser,
  };
};

export default useUser;
