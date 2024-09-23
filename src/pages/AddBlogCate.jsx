
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBlogCate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Category Data Submitted:", data);
    // Handle form submission logic here
    navigate("/categories"); // Redirect after successful form submission
  };

  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-3xl font-semibold text-gray-100 mb-6 text-center'>
        Add Category
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Category Name */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Category Name</label>
          <input
            type='text'
            {...register("categoryName", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter category name"
          />
          {errors.categoryName && <span className="text-red-500">Category Name is required</span>}
        </div>

        {/* URL Slug */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>URL Slug</label>
          <input
            type='text'
            {...register("urlSlug", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter URL slug"
          />
          {errors.urlSlug && <span className="text-red-500">URL Slug is required</span>}
        </div>

        {/* Short Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Short Description</label>
          <textarea
            {...register("shortDescription", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter short description"
          />
          {errors.shortDescription && <span className="text-red-500">Short Description is required</span>}
        </div>

        {/* Meta Title */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Title</label>
          <input
            type='text'
            {...register("metaTitle")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Description</label>
          <textarea
            {...register("metaDescription")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta description"
          />
        </div>

        {/* In Sitemap */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>In Sitemap</label>
          <select
            {...register("inSitemap", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.inSitemap && <span className="text-red-500">This field is required</span>}
        </div>

        {/* Page Index */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Page Index</label>
          <select
            {...register("pageIndex", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.pageIndex && <span className="text-red-500">This field is required</span>}
        </div>

        {/* Custom Canonical URL */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Custom Canonical URL</label>
          <input
            type='url'
            {...register("canonicalUrl")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter custom canonical URL"
          />
        </div>

        {/* Category Icons */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Category Icons</label>
          <input
            type='file'
            {...register("categoryIcons", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            accept="image/*"
          />
          {errors.categoryIcons && <span className="text-red-500">Category Icon is required</span>}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none'
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddBlogCate;