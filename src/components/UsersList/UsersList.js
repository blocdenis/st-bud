import React from "react";
import UserListItem from "components/UserListItem/UsersListItem";
import { users } from "data/users";
import UsersListItem from "components/UserListItem/UsersListItem";


const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UserListItem userData={userData}/>
      ))}
    </ul>
  </div>
);
export default UsersList;
