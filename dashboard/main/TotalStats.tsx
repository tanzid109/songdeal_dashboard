import { StatCard } from "./StatCard";

const TotalStats = () => {
    return (
        <div className="grid  grid-cols-4 gap-4">
            <StatCard title="Total Artists" value={45586} icon="👥" />
            <StatCard title="Total Investors" value={5454} icon="📈" />
            <StatCard title="Total Catalogs Uploaded" value={26845} icon="📂" />
            <StatCard title="Total Investments Made" value={36845} icon="🏆" />
        </div>
    );
};

export default TotalStats;