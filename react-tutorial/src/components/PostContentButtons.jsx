import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContentButtons() {
  const {id, setUserData} = useContext(UserContext);

  return (
    <div>
      {id}
      <br/>
      <button onClick={() => {
        setUserData((currentUser) => ({ ...currentUser, displayName: 'Display Name Update from component child'}))
      }}>Click Me</button>
    </div>
  );
}