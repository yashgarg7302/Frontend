import React, { useState } from 'react';

function MarksForm1() {
  const [marks, setMarks] = useState({
    physics: '',
    maths: '',
    chemistry: '',
    english: '',
    IT: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Marks:', marks);
   
  };

  return (
    <div className="max-w-md mx-auto mt-8">
       <h2 className="text-2xl font-bold mb-4">Enter the marks of 12th std</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="physics" className="block font-medium">
            Physics
          </label>
          <input
            type="number"
            id="physics"
            name="physics"
            value={marks.physics}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="maths" className="block font-medium">
            Maths
          </label>
          <input
            type="number"
            id="maths"
            name="maths"
            value={marks.maths}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="chemistry" className="block font-medium">
            Chemistry
          </label>
          <input
            type="number"
            id="chemistry"
            name="chemistry"
            value={marks.chemistry}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="english" className="block font-medium">
            English
          </label>
          <input
            type="number"
            id="english"
            name="english"
            value={marks.english}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        
          />
        </div>
        <div>
          <label htmlFor="IT" className="block font-medium">
            IT
          </label>
          <input
            type="number"
            id="IT"
            name="IT"
            value={marks.IT}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MarksForm1;