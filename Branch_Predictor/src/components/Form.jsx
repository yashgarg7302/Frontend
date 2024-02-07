import React, { useState } from 'react';
import { useEffect } from 'react';
import MarksForm1 from './MarksForm1'
import MarksForm2 from './MarksForm2'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    isMedical: false,
    isNonMedical: false
  });

  
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
  
    if (e.target.type === 'checkbox') {
      if (name === 'isMedical') {
        setFormData({
          ...formData,
          isMedical: checked,
          isNonMedical: !checked ? formData.isNonMedical : false
        });
      } else if (name === 'isNonMedical') {
        setFormData({
          ...formData,
          isNonMedical: checked,
          isMedical: !checked ? formData.isMedical : false
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleVerify = () => {
    if (formData.phoneNumber.length !== 10) {
      alert('Phone number must be exactly 10 digits');
      return;
    }
    // Proceed with verification logic
    console.log('Verification logic goes here');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ((formData.isMedical && !formData.isNonMedical) || (!formData.isMedical && formData.isNonMedical)) {
      
    } else {
      alert('Please select one option: Medical or Non-Medical');
    }
  };
 
  return (
  
  
<div className="mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold mb-6">Enter details to predict the branches</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 text-lg font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-lg"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-lg font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-lg"
          required
        />
      </div>
    </div>
    <div className="relative flex items-center">
      <label className="block mb-2 text-lg font-medium">Phone Number:</label> {/* Adjusted margin-bottom */}
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        pattern="[0-9]{10}"
        title="Phone number must be exactly 10 digits"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-lg"
        required
      />
      <button type="button" className="ml-3 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" onClick={handleVerify} >Verify</button>
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="isNonMedical"
        checked={formData.isNonMedical}
        onChange={handleChange}
        className="mr-2 h-6 w-6 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
      />
      <label className="mb-1 text-lg font-medium">Non-Medical (CSE/IT/ECE/CIVIL)</label>
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="isMedical"
        checked={formData.isMedical}
        onChange={handleChange}
        className="mr-2 h-6 w-6 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
      />
      <label className="mb-1 text-lg font-medium">Medical (BI/BT)</label>
    </div>
    
  </form>
  
  {formData.isMedical && <MarksForm2 />}
  {formData.isNonMedical && <MarksForm1 />}
</div>
  );
}

export default Form;
