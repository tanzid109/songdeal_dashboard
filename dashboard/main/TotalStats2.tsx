import { StatCard } from "./StatcCard";

const TotalStats2 = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 ">
            <StatCard title="Pending Withdrawals" value={45586} icon="👥" />
            <StatCard title="Total Revenue" value={5454} icon="📈" />
        </div>
    );
};

export default TotalStats2;