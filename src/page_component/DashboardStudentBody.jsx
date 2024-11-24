import React, { useState, useEffect } from 'react';

export default function DashboardStudentBody({ studentDetails }) {

  return (
    <div className="flex-grow p-8">
      <div>
        <h2 className="text-2xl mb-4">Welcome, {studentDetails.name}!</h2>
        <ul>
          <li>Name: {studentDetails.name}</li>
          <li>Email: {studentDetails.email}</li>
        </ul>
      </div>
    </div>
  );
}
