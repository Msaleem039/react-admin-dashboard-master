import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
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


function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* Background */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />}>
					{/* Nested route for adding a new instructor */}
					<Route path='adduser' element={<AddInstructor />} />
				</Route>
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/faqs' element={<Faqtable />} />
				<Route path='/courses' element={<Courses />}>
					<Route path='adduser' element={<AddCourse />} />
				</Route>
				<Route path='/course-categories' element={<CourseCateg />}>
					<Route path='addcategory' element={<AddCate />} />
				</Route>
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog-categories' element={<BlogCategories />} />
				
				<Route path='/blog-post' element={<BlogPost />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
