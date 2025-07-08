// src/App.tsx
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

type User = {
  name: string;
  age: number;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleSave = async () => {
    await addDoc(collection(db, "users"), { name: "Alice", age: 25 });
  };

  const handleLoad = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const fetchedUsers: User[] = [];
    querySnapshot.forEach((doc) => {
      fetchedUsers.push(doc.data() as User);
    });
    setUsers(fetchedUsers);
  };

  return (
    <div>
      <button onClick={handleSave}>Save Data</button>
      <button onClick={handleLoad}>Load Data</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
