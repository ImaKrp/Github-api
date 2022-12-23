import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export function useGithub() {
  const context = useContext(GithubContext);
  return context;
}
