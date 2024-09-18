import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddCate = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active"); // Default status
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { name, description, status };

    // Simulate saving the new category (could be replaced with actual API call)
    console.log("New Category Added:", newCategory);

    // Navigate back to the categories page after submission
    navigate("/coursecategories");
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">
        Add Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="name">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
<Link to="/course-categories">
    
<button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none"
        >
          Add Category
        </button>
</Link>
      </form>
    </div>
  );
};

export default AddCate;
