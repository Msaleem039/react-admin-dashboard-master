import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Convert the string values to boolean
    const transformedData = {
      ...data,
      in_Sitemap: data.in_Sitemap === "Yes",
      Index_Page_Option: data.Index_Page_Option === "Yes",
    };

    axios.post('http://localhost:8000/api/categories/create', transformedData)
      .then(response => {
        console.log(response);
        alert("Category added successfully!");
        navigate("/course-categories");
      })
      .catch(error => {
        console.error(error);
        alert("Error adding category!");
      });
  };

  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-3xl font-semibold sm:hidden text-gray-100 mb-6 text-center'>
        Add Category
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Category Name */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Category Name</label>
          <input
            type='text'
            {...register("Category_Name", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter category name"
          />
          {errors.Category_Name && <span className="text-red-500">Category Name is required</span>}
        </div>

        {/* URL Slug */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>URL Slug</label>
          <input
            type='text'
            {...register("url_Slug", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter URL slug"
          />
          {errors.url_Slug && <span className="text-red-500">URL Slug is required</span>}
        </div>

        {/* Short Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Short Description</label>
          <textarea
            {...register("short_Description")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter short description"
          />
          {errors.short_Description && <span className="text-red-500">Short Description is required</span>}
        </div>

        {/* Meta Title */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Title</label>
          <input
            type='text'
            {...register("meta_Title")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Description</label>
          <textarea
            {...register("meta_Description")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta description"
          />
        </div>

        {/* In Sitemap */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>In Sitemap</label>
          <select
            {...register("in_Sitemap", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.in_Sitemap && <span className="text-red-500">This field is required</span>}
        </div>

        {/* Page Index */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Page Index</label>
          <select
            {...register("Index_Page_Option", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.Index_Page_Option && <span className="text-red-500">This field is required</span>}
        </div>

        {/* Custom Canonical URL */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Custom Canonical URL</label>
          <input
            type='url'
            {...register("Custom_Canonical_Url")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter custom canonical URL"
          />
        </div>

        {/* Category Icons */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Category Icons</label>
          <input
            type='text'
            {...register("Category_Icons")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            accept="image/*"
          />
          {errors.Category_Icons && <span className="text-red-500">Category Icon is required</span>}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none transition duration-200 ease-in-out'
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
