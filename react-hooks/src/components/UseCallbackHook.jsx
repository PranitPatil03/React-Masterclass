import { useCallback, useState } from "react";

const allUsers = ["john", "alex", "george", "simon", "james"];

const UseCallbackHook = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(() => {
    console.log(users[0]);

    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, [users]);

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <input
          type="text"
          placeholder="Search users..."
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackHook;
