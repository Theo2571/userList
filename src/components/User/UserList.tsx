import React from "react";
import { UserItem } from "../../types/interface";
import { UserListItem } from "./UserListItem";

type UserListProps = {
  users: UserItem[];
  selectedUser: number | null;
  setSelectedUser: (userId: number | null) => void;
};

export const UserList: React.FC<UserListProps> = ({
  users,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem
          key={index}
          user={user}
          index={index}
          isSelected={selectedUser === index}
          onClick={() => setSelectedUser(index)}
        />
      ))}
    </div>
  );
};
