import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "300",
	completed: "1,178",
	totalRevenue: "$98,765",
};

const OrdersPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Visitor"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Student' icon={PiStudent} value={orderStats.totalOrders} color='#6366F1' />
					<StatCard name='Teacher' icon={GiTeacher} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCard
						name='Completed'
						icon={CheckCircle}
						value={orderStats.completed}
						color='#10B981'
					/>
					<StatCard name='Total visitor' icon={GrUserAdmin} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
};
export default OrdersPage;
