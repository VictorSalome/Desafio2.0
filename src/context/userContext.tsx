// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext } from "react";
// import useUser from "../hooks/useUser";
// import { IUser } from "../interfaces/user.Interface";

// const UserContext = createContext<IUser[] | undefined>(undefined);

// function UserProvider({ children }: { children: React.ReactNode }) {
//     const { getAllUsers } = useUser();
//     const users = getAllUsers();

//     return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
// }

// function useUsersContext() {
//     const context = useContext(UserContext);
//     return context;
// }


// export { UserProvider, useUsersContext }