import { useEffect, useState } from "react";
import ProtectedLayout from "../components/ProtectedLayout";
import StatCard from "../components/StatCard";
import { fetchDashboardStats } from "../api/dashboard.api";

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetchDashboardStats().then(setStats);
  }, []);

  if (!stats) return <div>Loading dashboard...</div>;

  return (
    <ProtectedLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Referrals Given" value={stats.totalReferrals} />
        <StatCard title="Referrals Received" value={stats.referralsReceived} />
        <StatCard title="Jobs Posted" value={stats.totalJobs} />
        <StatCard title="Ads Posted" value={stats.totalAds} />
        <StatCard title="Properties Listed" value={stats.totalProperties} />
      </div>
    </ProtectedLayout>
  );
}
