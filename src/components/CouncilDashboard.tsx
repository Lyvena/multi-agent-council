import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, FileText } from 'lucide-react';

const fetchDashboardData = async () => {
  // Simulated API call
  return {
    activeProposals: 5,
    councilMembers: 7,
    recentActivity: [
      { id: 1, action: 'Proposal submitted', timestamp: '2023-04-01T10:00:00Z' },
      { id: 2, action: 'Vote cast', timestamp: '2023-04-01T11:30:00Z' },
      { id: 3, action: 'Proposal approved', timestamp: '2023-04-02T09:15:00Z' },
    ]
  };
};

const CouncilDashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching dashboard data</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.activeProposals}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Council Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.councilMembers}</div>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.recentActivity.map((activity) => (
              <li key={activity.id} className="flex justify-between items-center">
                <span>{activity.action}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(activity.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouncilDashboard;