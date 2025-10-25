import { StatCard } from "./StatCard";

const TotalStats2 = () => {
    return (
        <div className="flex flex-col gap-4 h-full w-full">
            <StatCard title="Pending Withdrawals" value={45586} icon="👥" />
            <StatCard title="Total Revenue" value={5454} icon="📈" />
            <StatCard title="New Investor's" value={545} icon="📈" />
        </div>
    );
};

export default TotalStats2;