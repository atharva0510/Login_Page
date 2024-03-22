import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import dbData from "../Server/db.json";

const DataTable = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      setUsers(dbData.user);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  if (!user) {
    return <p>You need to be logged in to view data.</p>;
  }

  return (
    <div className="table-container">
      <h1 className="mb-3">User Information</h1>
      <Table striped bordered hover responsive className="table">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email ID</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Atharva Harmale</td>
            <td>02-15-2001</td>
            <td>atharva@gmail.com </td>
            <td>8885559995</td>
          </tr>
          <tr>
            <td>Tushar Khandagale</td>
            <td>22-2-2001</td>
            <td>tushar@gmail.com </td>
            <td>5555522222</td>
          </tr>
           */}
          {users.map((userData, index) => (
            <tr key={index}>
              <td>{userData.name}</td>
              <td>{userData.dob}</td>
              <td>{userData.email}</td>
              <td>{userData.mobile}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
