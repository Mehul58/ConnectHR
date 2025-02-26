import React, { Component } from "react";
import "../css/EmployeesListComponent.css";

function EmployeesListComponent() {
  return (
    <>
      <h2>List of Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default EmployeesListComponent;
