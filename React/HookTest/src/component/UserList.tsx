import { useEffect, useState } from "react";
import type { User } from "../types/User";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=> res.json())
      .then((data:User[])=>setUsers(data))
  },[]);
  return(
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
};
export default UserList;