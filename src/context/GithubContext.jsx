import React, { useState, createContext } from "react";
import api from "../api/api";

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [repo, setRepo] = useState({});

  const searchUser = async (user) => {
    setUser({});
    try {
      const res = await api
        .get(`users/${user}`)
        .catch((err) => console.log(err));

      setUser(res?.data);

      const { login } = res.data;

      const repos = await api
        .get(`/users/${login}/repos`)
        .catch((err) => console.log(err));
      setRepos(repos?.data);
    } catch (e) {
      return true;
    }
  };

  return (
    <GithubContext.Provider value={{ user, repos, searchUser }}>
      {children}
    </GithubContext.Provider>
  );
}
