import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Instructor Added:", { name, email });
    navigate("/users"); // Redirect to instructors page after successful form submission
  };

  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold text-gray-100 mb-4'>Add Instructor</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none'
        >
          Add Instructor
        </button>
      </form>
    </div>
  );
};

export default AddInstructor;

