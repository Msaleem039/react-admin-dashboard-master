import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";

import UsersPage from "./pages/UsersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import AddInstructor from "./pages/AddInstructor";
import Courses from "./pages/Courses";
import Faqtable from "./components/Faqcategories/Faqtable";
import AddCourse from "./pages/AddCourse";
import CourseCateg from "./pages/CourseCateg";
import AddCate from "./pages/AddCate";
import Blog from "./components/Blog/Blog";
import BlogCategories from "./components/Blog/BlogCategories";
import BlogPost from "./components/Blog/Blogpost";
import AddBlog from "./pages/AddBlog";
import AddBlogCate from "./pages/AddBlogCate";
import AddBlogPost from "./pages/AddBlogPost";
import Eflayer from "./components/Eflyer/Eflayer";
import AddFlyers from "./pages/AddFlyers";
import SPCategories from "./components/SP-C Categories/SPCategories";
import AddSpcategories from "./components/SP-C Categories/AddSpcategories";
import AddCategory from "./pages/AddCate";


function App() {
	
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* Background */}
			{/* <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div> */}

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
					<Route path='/users' element={<UsersPage />}>
					{/* Nested route for adding a new instructor */}
					<Route path='adduser' element={<AddInstructor />} />
				</Route>
			
				<Route path='/faqs' element={<Faqtable />} />
				<Route path='/courses' element={<Courses />}>
					<Route path='adduser' element={<AddCourse />} />
				</Route>
				<Route path='/course-categories' element={<CourseCateg />}>
					<Route path='addcategory' element={<AddCategory/>} />
				</Route>

				<Route path='/blog' element={<Blog/>}>
					<Route path='addblog' element={<AddBlog/>} />
				</Route>
		
				<Route path='/blog-categories' element={<BlogCategories/>}>
				</Route>
				<Route path='/addblogcate' element={<AddBlogCate/>} />
                        
				<Route path='/blog-post' element={<BlogPost/>}>
					<Route path='addblogpost' element={<AddBlogPost/>} />
				</Route>
				<Route path='/eflayer' element={<Eflayer/>}>
					<Route path='addeflayer' element={<AddFlyers/>} />
				</Route>
               
				<Route path='/sp-c-categories' element={<SPCategories/>}>
				
				</Route>
				<Route path='/addspc' element={<AddSpcategories/>} />
			
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
