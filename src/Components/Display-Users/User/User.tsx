import React, { useState } from "react";

import styles from "./User.module.css";

function User(props: any): JSX.Element {
  const { user } = props;
  const [showDetails, setShowDetails] = useState(false);
  const toggleUserDetails = () => {
    setShowDetails((prevStatus) => !prevStatus);
  };
  return (
    <li key={user.id}>
      <div>
        <p className={styles.name} onClick={toggleUserDetails}>
          {user.name} <span className="aqua">@{user.username}</span>
        </p>
        {showDetails && (
          <div className={styles.userDetails}>
            <p>
              <span className="aqua">Email:</span> {user.email}
            </p>
            <p>
              <span className="aqua">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="aqua">Website:</span> {user.website}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default User;
