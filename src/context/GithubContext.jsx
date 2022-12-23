import React, { useState, createContext } from "react";
import api from "../api/api";

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const searchUser = async (user) => {
    setUser({});

    const res = await api.get(`users/${user}`).catch((err) => console.log(err));

    if (res?.data) {
      setUser(res?.data);

      const { login } = res.data;

      const repos = await api
        .get(`/users/${login}/repos`)
        .catch((err) => console.log(err));
      setRepos(repos?.data);
    } else return "/error";
  };

  return (
    <GithubContext.Provider value={{ user, repos, searchUser }}>
      {children}
    </GithubContext.Provider>
  );
}
