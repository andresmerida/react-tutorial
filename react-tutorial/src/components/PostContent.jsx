import { useContext } from "react";
import { PostContentButtons } from "./PostContentButtons";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContent({ data }) {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <PostContentButtons data={data}/>
      <div>{userContextData.id}</div>
      <div>{userContextData.name}</div>
      <div>{userContextData.email}</div>
      <div>{userContextData.username}</div>
    </div>
  )
}