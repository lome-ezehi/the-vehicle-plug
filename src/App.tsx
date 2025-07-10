// src/App.tsx
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Home from "./pages/index"
import { Route, Routes } from "react-router-dom";
import React from "react";

// type User = {
//   name: string;
//   age: number;
// };

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
  // const [users, setUsers] = useState<User[]>([]);

  // const handleSave = async () => {
  //   await addDoc(collection(db, "users"), { name: "Alice", age: 25 });
  // };

  // const handleLoad = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   const fetchedUsers: User[] = [];
  //   querySnapshot.forEach((doc) => {
  //     fetchedUsers.push(doc.data() as User);
  //   });
  //   setUsers(fetchedUsers);
  // };

  // return (
  //   <div>
  //     <button onClick={handleSave}>Save Data</button>
  //     <button onClick={handleLoad}>Load Data</button>
  //     <ul>
  //       {users.map((u, i) => (
  //         <li key={i}>{i} {u.name} - {u.age}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
