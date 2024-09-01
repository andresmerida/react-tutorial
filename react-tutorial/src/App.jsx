import { UserProfile } from "./components/UserProfile";

export default function App() {
  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile 
      username="Bob" 
      age={20}
      isLoggedIn={true}
      favoriteFoods={[
        {
          id: "sushi",
          name: "Sushi",
        },
        {
          id: "pizza",
          name: "Pizza"
        }
      ]}/>
    </div>
  );
}