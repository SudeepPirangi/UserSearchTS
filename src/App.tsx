import { createContext, useEffect, useState } from "react";

import "./App.css";
import DisplayUsers from "./Components/Display-Users/DisplayUsers";
import UserSearch from "./Components/User-Search/UserSearch";
import IUser from "./Interfaces/IUser";

export interface IUserContext {
  users: IUser[];
  searchKey: string;
  setSearch: (key: string) => void;
}

export const UsersContext = createContext<IUserContext | null>(null);

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      let usersJSON: IUser[] = await users.json();
      // console.log("users", usersJSON);
      setUsers(usersJSON);
    }
    fetchUsers();
  }, []);

  const setSearch = (key: string): void => {
    console.log("search key", key);
    setSearchKey(key);
  };

  return (
    <UsersContext.Provider value={{ users, searchKey, setSearch }}>
      <div className="App-header">
        <h1 className="App-title">Users List</h1>
        <UserSearch />
        <DisplayUsers />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
