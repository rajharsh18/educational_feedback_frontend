import React, { useState, useEffect } from 'react';

export default function DashboardTeacherBody({ teacherDetails }) {

  return (
    <div className="flex-grow p-8">
      <div>
        <h2 className="text-2xl mb-4">Welcome, {teacherDetails.name}!</h2>
        <ul>
          <li>Name: {teacherDetails.name}</li>
          <li>Email: {teacherDetails.email}</li>
        </ul>
      </div>
    </div>
  );
}
