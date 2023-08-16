import React from "react";
import { UserItem } from "../../types/interface";
import Avatar from "@mui/material/Avatar";
import cl from "./UserComponents.module.css";

type UserListItemProps = {
  user: UserItem;
  index: number;
  isSelected: boolean;
  onClick: () => void;
};

export const UserListItem: React.FC<UserListItemProps> = ({
  user,
  index,
  isSelected,
  onClick,
}) => {
  const time = index + 150;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={cl.wrapper} onClick={onClick}>
      <div className={cl.block}>
        <span className={`${isSelected ? `${cl.selectedText}` : ""}`}>
          {index + 1}
        </span>
        <div className={`${isSelected ? `${cl.selected}` : ""}`}>
          <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
        </div>
        <div className={cl.main}>
          <span className={cl.ellipsis}>{user.name}</span>
          <div>
            <span className={cl.timer}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}.000
              <span className={cl.km}>| {user.speed} км/ч</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
