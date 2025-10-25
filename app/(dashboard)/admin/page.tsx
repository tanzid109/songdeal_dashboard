import PerformanceChart from "@/dashboard/main/PerformanceCart";
import RecentActivity from "@/dashboard/main/RecentActivity";
import TotalStats from "@/dashboard/main/TotalStats";
import TotalStats2 from "@/dashboard/main/TotalStats2";


const Dashboard = () => {
    return (
        <main className="p-2">
            <div>
                <TotalStats />
            </div>
            <div className='flex justify-between items-center w-full mt-6 gap-4'>
                <div className="w-8/12">
                    <PerformanceChart />
                </div>
                <div className="w-4/12">
                    <TotalStats2 />
                </div>
            </div>
            <div>
                <RecentActivity />
            </div>
        </main>
    );
};

export default Dashboard;