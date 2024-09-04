import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 2,
    username: 'ansondev',
    email: 'anson@gmail.com',
    displayName: 'Anson The Developer'
  });

  return (
    <UserContext.Provider 
      value={{...userData, setUserData}}>
      <div>
        <PostContainer/>
    </div>
    </UserContext.Provider>
  );
}
