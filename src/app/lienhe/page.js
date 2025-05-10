'use client'
import { useEffect, useState } from "react";
import styles from "./lienhe.module.css";

export default function LienHe() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const result = await response.json();
        if (response.ok) {
          console.log("Users:", result.data);
          setUsers(result.data);
        } else {
          console.error("Error fetching users:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }


    fetchUsers();

  },[]);
  return (
    <div className={styles.lienhe}>
      <h1>Liên hệ</h1>
      {users.map((user) => (
        
        <div key={user._id}>
          <p>
            <strong>Tên:</strong> {user.name}
          </p>
          <br></br>
          <p>
            <strong>Địa chi:</strong> {user.address}
          </p>
        </div>
      ))}     
    </div>
  );
}
