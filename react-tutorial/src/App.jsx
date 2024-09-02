import { UserDetails } from "./components/UserDetails";

export default function App() {
const mockUsers = [
  {
    id: 1,
    username: "anderson",
    email: "anson@ansonthedev.com"
  },
  {
    id: 2,
    username: "michael",
    email: "michael@ansondev.com"
  },
  {
    id: 3,
    username: "armandocarpas",
    email: "carpas@ansondev.com"
  }
];

  return (
    <div>
      { mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />
      })}
    </div>
  );
}