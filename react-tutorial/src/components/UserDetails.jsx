import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button 
          onClick={() => {
          setUsers((currentUsersState) => currentUsersState.filter(
            (currentUser) => currentUser.id !== user.id
          ));
        }}>Delete</button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) =>
                currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                )
              );
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            name="username"
            id={user.id}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
      <br />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
