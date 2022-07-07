import IUser from "../../Interfaces/IUser";
import useSearchUsers from "../../Custom-hooks/useSearchUsers";
import User from "./User/User";

function DisplayUsers(): JSX.Element {
  const users = useSearchUsers() || [];
  console.log("userscontext", users);
  return (
    <ol className="usersList">
      {users.map(
        (user: IUser): JSX.Element => (
          <User user={user} />
        )
      )}
    </ol>
  );
}

export default DisplayUsers;
