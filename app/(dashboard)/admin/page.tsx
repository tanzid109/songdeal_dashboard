import CatalogCard from "@/dashboard/main/CatalogCard";
import CustomerCard from "@/dashboard/main/CustomerCard";
import PerformanceChart from "@/dashboard/main/PerformanceCart";
import PerformanceCartCard from "@/dashboard/main/PerformanceCartCard";
import PerformanceOrderCard from "@/dashboard/main/PerformanceOrderCard";
import SalesCard from "@/dashboard/main/SalesCard";
import WelcomeCard from "@/dashboard/main/WelcomeCard";


const Dashboard = () => {
    return (
        <main className="p-3 ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Left Side - takes 2 columns */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <WelcomeCard />

                    {/* Bottom section inside left side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomerCard />
                        <CatalogCard />
                    </div>
                </div>
                {/* Right Side - takes 3 columns */}
                <div className="lg:col-span-3">
                    <PerformanceChart />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4'>
                <PerformanceOrderCard />
                <PerformanceCartCard />
                <SalesCard />
            </div>
        </main>
    );
};

export default Dashboard;