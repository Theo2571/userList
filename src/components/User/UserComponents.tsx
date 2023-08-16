import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/UserSlice";
import { RootState } from "../../redux/store";
import { UserItem } from "../../types/interface";
import { UserList } from "./UserList";
import "./UserComponents.module.css";

export const UserComponents = () => {
  const dispatch = useDispatch();
  const users = useSelector((store: RootState) => store.userReducer.users);
  const [userList, setUserList] = useState<UserItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  useEffect(() => {
    if (fetching) {
      fetchUsers();
    }
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [userList]);

  useEffect(() => {
    if (users && users.results) {
      setUserList((prevUserList) => [...prevUserList, ...users.results]);
    }
  }, [users]);

  const fetchUsers = async () => {
    try {
      await dispatch(getUsers(currentPage));
      setCurrentPage((prevState) => prevState + 1);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setFetching(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      userList.length < users.count
    ) {
      setFetching(true);
    }
  };

  return (
    <UserList
      users={userList}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
    />
  );
};
