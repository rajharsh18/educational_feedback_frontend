import React, { useState, useRef } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import SelectBox from '../components/SelectBox';

export default function SignupTeacherForm() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // API Call for Student Signup
    fetch('http://127.0.0.1:5000/signup_student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Student registered successfully') {
          formRef.current.reset();
          window.location.href = '/signup_student';
        } else {
          alert(data.message);
        }
      })
      .catch(() => {
        alert('An error occurred');
      });
  };

  return (
    <div className="flex-grow p-8">
      <h2 className="text-2xl mb-4">Sign Up Student</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputBox type="text" id="name" name="name" required={true} label="Name" />

        <InputBox type="email" id="email" name="email" required={true} label="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

        <InputBox type="password" id="password" name="password" required={true} label="Password" />

        <InputBox type="text" id="grade" name="grade" required={true} label="Grade" />

        <InputBox type="text" id="section" name="section" required={true} label="Section/Stream" />

        <InputBox type="text" id="school_name" name="school_name" required={true} label="School Name" />

        <SelectBox id="gender" name="gender" required={true} label="Gender"
          options={[
            { value: '', label: 'Select Gender' },
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]} />

        <Button type="submit" className="bg-blue-500">Sign Up</Button>
      </form>
    </div>
  );
}
