import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Initial blog posts data
const initialBlogPosts = [
  { id: 1, title: 'Understanding React Hooks', content: 'This post explains the basics of React Hooks...', category: 'React', status: 'Published' },
  { id: 2, title: 'CSS Grid vs Flexbox', content: 'A comparison between CSS Grid and Flexbox layout...', category: 'CSS', status: 'Draft' },
  { id: 3, title: 'JavaScript ES6 Features', content: 'Explore the new features introduced in ES6...', category: 'JavaScript', status: 'Published' },
  { id: 4, title: 'Node.js and Express Basics', content: 'Learn how to build a simple server with Node.js...', category: 'Node.js', status: 'Published' },
];
const BlogPost = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(initialBlogPosts);

  // Handle search logic
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = initialBlogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  return (
    <motion.div
      className='w-full bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mx-auto'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-semibold text-gray-100'>Blog Posts</h2>

        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search posts...'
              className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            className='bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className='text-xl font-bold text-white mb-2'>{post.title}</h3>
            <p className='text-gray-300 mb-4'>{post.content.slice(0, 100)}...</p>
            <span
              className={`inline-block text-sm px-2 py-1 rounded-full ${
                post.status === 'Published'
                  ? 'bg-green-800 text-green-100'
                  : 'bg-yellow-800 text-yellow-100'
              }`}
            >
              {post.status}
            </span>
            <span className='block text-xs text-gray-400 mt-2'>
              Category: {post.category}
            </span>
            <button className='mt-4 text-indigo-400 hover:text-indigo-300'>
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPost;

