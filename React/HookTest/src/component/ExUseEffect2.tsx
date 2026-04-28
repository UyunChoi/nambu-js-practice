import { useEffect, useState } from "react";
import type { User } from "../types/User";

const url = 'https://jsonplaceholder.typicode.com/users';

const ExUseEffect2 = () => {
  const [user, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string|null>(null);
  useEffect(()=>{
    const load = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok){
          throw new Error('요청실패') 
        }
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error){
          setError(error.message);
        }
      }
    }
    load();
  },[]);

  if (error) {
    return <p>{error}</p>
  }

  return(
    <ul>
      {user.map((user)=>(
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
};

export default ExUseEffect2;