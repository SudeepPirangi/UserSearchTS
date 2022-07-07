import React, { useContext, useState } from "react";

import { IUserContext, UsersContext } from "../../App";
import styles from "./UserSearch.module.css";

function UserSearch(): JSX.Element {
  const UsersCtx = useContext<IUserContext | null>(UsersContext);

  const [searchKey, setSearchKey] = useState("");
  const onSearch = (ev: any) => {
    let key = ev.target.value.trim();
    setSearchKey(key);
    UsersCtx?.setSearch(key);
  };

  return (
    <div className={styles.inputContainer}>
      <input type="text" className={styles.input} placeholder="Search by Name or Email" value={searchKey} onChange={onSearch} />
    </div>
  );
}

export default UserSearch;
