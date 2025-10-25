import PerformanceChart from "@/dashboard/main/PerformanceCart";
import TotalStats from "@/dashboard/main/TotalStats";
import TotalStats2 from "@/dashboard/main/TotalStats2";


const Dashboard = () => {
    return (
        <main className="p-2">
            <div>
                <TotalStats />
            </div>
            <div className='grid grid-cols-6 gap-4 mt-4'>
                <div className="col-span-4">
                    <PerformanceChart />
                </div>
                <div className="col-span-2 row-span-0">
                    <TotalStats2 />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;