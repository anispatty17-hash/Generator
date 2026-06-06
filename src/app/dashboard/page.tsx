"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";

interface Stats {
  totalSms: number;
  smsToday: number;
  activeNumbers: number;
  onlineDevices: number;
}

interface SMS {
  id: number;
  sender: string;
  message: string;
  device_id: string;
  created_at: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalSms: 0,
    smsToday: 0,
    activeNumbers: 0,
    onlineDevices: 0,
  });

  const [recent, setRecent] = useState<SMS[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      const [statsRes, smsRes] = await Promise.all([
        fetch("/api/stats"),
        fetch("/api/sms?page=1"),
      ]);

      const statsData = await statsRes.json();
      const smsData = await smsRes.json();

      setStats(statsData);
      setRecent(smsData.data?.slice(0, 5) || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();

    const interval = setInterval(() => {
      loadDashboard();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="p-6">

          <h1 className="text-2xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid gap-6 md:grid-cols-4">

            <StatsCard
              title="Total SMS"
              value={stats.totalSms}
            />

            <StatsCard
              title="SMS Today"
              value={stats.smsToday}
            />

            <StatsCard
              title="Active Numbers"
              value={stats.activeNumbers}
            />

            <StatsCard
              title="Online Devices"
              value={stats.onlineDevices}
            />

          </div>

          <div className="bg-[#111827] rounded-3xl p-6 mt-8 shadow-xl">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-lg font-semibold">
                Recent Messages
              </h2>

              <span className="text-xs text-gray-400">
                Auto Refresh 10s
              </span>

            </div>

            {loading ? (
              <div className="text-gray-400">
                Loading...
              </div>
            ) : recent.length === 0 ? (
              <div className="text-gray-500">
                No SMS Available
              </div>
            ) : (
              <div className="space-y-4">

                {recent.map((sms) => (
                  <div
                    key={sms.id}
                    className="border-b border-slate-700 pb-4"
                  >
                    <div className="flex justify-between">

                      <div className="font-semibold text-cyan-400">
                        {sms.sender}
                      </div>

                      <div className="text-xs text-gray-500">
                        {new Date(
                          sms.created_at
                        ).toLocaleString()}
                      </div>

                    </div>

                    <div className="mt-2 text-gray-300">
                      {sms.message}
                    </div>

                    <div className="mt-1 text-xs text-gray-500">
                      Device: {sms.device_id}
                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  );
}