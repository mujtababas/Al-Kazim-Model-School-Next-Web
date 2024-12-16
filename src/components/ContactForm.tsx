"use client"
import React, { useState } from 'react';  

const ContactForm: React.FC = () => {  
  const [formData, setFormData] = useState({  
    parentName: '',  
    email: '',  
    phoneNumber: '',  
    studentName: '',  
    studentAge: '',  
    program: '',  
    message: '',  
  });  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  

    // Send form data to your email or server  
    const response = await fetch('/api/contact', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      body: JSON.stringify(formData),  
    });  

    if (response.ok) {  
      alert('Form submitted successfully!');  
      setFormData({  
        parentName: '',  
        email: '',  
        phoneNumber: '',  
        studentName: '',  
        studentAge: '',  
        program: '',  
        message: '',  
      });  
    } else {  
      alert('There was an error submitting the form.');  
    }  
  };  

  return (  
    <div className="bg-white p-6 rounded-lg shadow-lg">  
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>  
      <p className="text-gray-600 mb-6">  
        If you have specific questions or wish to request more information about Little Learners Academy,  
        please complete the contact form below. Kindly provide the following details to help us better  
        understand your needs.  
      </p>  
      <form onSubmit={handleSubmit} className="space-y-4">  
        <input  
          type="text"  
          name="parentName"  
          value={formData.parentName}  
          onChange={handleChange}  
          placeholder="Enter Parent Name"  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        />  
        <input  
          type="email"  
          name="email"  
          value={formData.email}  
          onChange={handleChange}  
          placeholder="Enter Email Address"  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        />  
        <input  
          type="tel"  
          name="phoneNumber"  
          value={formData.phoneNumber}  
          onChange={handleChange}  
          placeholder="Enter Phone Number"  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        />  
        <input  
          type="text"  
          name="studentName"  
          value={formData.studentName}  
          onChange={handleChange}  
          placeholder="Enter Student Name"  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        />  
        <input  
          type="text"  
          name="studentAge"  
          value={formData.studentAge}  
          onChange={handleChange}  
          placeholder="Enter Student Age"  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        />  
        <select  
          name="program"  
          value={formData.program}  
          onChange={handleChange}  
          className="w-full border border-gray-300 p-2 rounded"  
          required  
        >  
          <option value="" disabled>Select Program</option>  
          <option value="program1">Program 1</option>  
          <option value="program2">Program 2</option>  
          <option value="program3">Program 3</option>  
        </select>  
        <textarea  
          name="message"  
          value={formData.message}  
          onChange={handleChange}  
          placeholder="Enter your Message"  
          className="w-full border border-gray-300 p-2 rounded"  
          rows={4}  
          required  
        />  
        <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">  
          Submit  
        </button>  
      </form>  
    </div>  
  );  
};  

export default ContactForm;