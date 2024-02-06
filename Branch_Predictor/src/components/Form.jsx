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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ((formData.isMedical && !formData.isNonMedical) || (!formData.isMedical && formData.isNonMedical)) {
      
    } else {
      alert('Please select one option: Medical or Non-Medical');
    }
  };
 
  return (
  
  //   <div className="max-w-md mx-auto">
  //   <h2 className="text-2xl font-bold mb-4">Enter details to predict the branches</h2>
  //   <form onSubmit={handleSubmit} className="space-y-4">
  //     <div>
  //       <label className="block mb-1">Name:</label>
  //       <input
  //         type="text"
  //         name="name"
  //         value={formData.name}
  //         onChange={handleChange}
  //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
  //         required
  //      />
  //     </div>
  //     <div>
  //       <label className="block mb-1">Email:</label>
  //       <input
  //         type="email"
  //         name="email"
  //         value={formData.email}
  //         onChange={handleChange}
  //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
  //         required
  //       />
  //     </div>
  //     <div>
  //       <label className="block mb-1">Phone Number:</label>
  //       <input
  //         type="tel"
  //         name="phoneNumber"
  //         value={formData.phoneNumber}
  //         onChange={handleChange}
  //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
  //         required
  //       />
  //     </div>
  //     <div className="flex items-center">
  //       <input
  //         type="checkbox"
  //         name="isNonMedical"
  //         checked={formData.isNonMedical}
  //         onChange={handleChange}
  //         className="mr-2"
  //       />
  //       <label className="mb-1">Non-Medical  &nbsp;  (CSE/IT/ECE/CIVIL)</label>
  //     </div>
  //     <div className="flex items-center">
  //       <input
  //         type="checkbox"
  //         name="isMedical"
  //         checked={formData.isMedical}
  //         onChange={handleChange}
  //         className="mr-2"
  //       />
  //       <label className="mb-1">Medical  &nbsp;  (BI/BT)</label>
        
  //     </div>
      
  //   </form>
  //   {formData.isMedical && <MarksForm2 />}
  //   {formData.isNonMedical && <MarksForm1 />}
  // </div>
  <div className="max-w-md mx-auto">
  <h2 className="text-2xl font-bold mb-4">Enter details to predict the branches</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-lg" // Adjusted text-lg
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-lg" // Adjusted text-lg
          required
        />
      </div>
    </div>
    <div>
      <label className="block mb-1">Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-lg" // Adjusted text-lg
        required
      />
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="isNonMedical"
        checked={formData.isNonMedical}
        onChange={handleChange}
        className="mr-2"
      />
      <label className="mb-1">Non-Medical  &nbsp;  (CSE/IT/ECE/CIVIL)</label>
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="isMedical"
        checked={formData.isMedical}
        onChange={handleChange}
        className="mr-2"
      />
      <label className="mb-1">Medical  &nbsp;  (BI/BT)</label>
    </div>
  </form>
  {formData.isMedical && <MarksForm2 />}
  {formData.isNonMedical && <MarksForm1 />}
</div>
  );
}

export default Form;
