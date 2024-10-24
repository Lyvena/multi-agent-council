import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CouncilDashboard from '@/components/CouncilDashboard';
import ProposalForm from '@/components/ProposalForm';
import VotingInterface from '@/components/VotingInterface';
import Logo from '@/components/Logo';
import AuthDialog from '@/components/AuthDialog';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Logo />
          <AuthDialog />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">AI-PGF Multi-Agent Council</h1>
        <p className="text-xl text-gray-600 mt-2">Decentralized decision-making for AI governance</p>
      </header>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="propose">Propose</TabsTrigger>
          <TabsTrigger value="vote">Vote</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Council Dashboard</CardTitle>
              <CardDescription>Overview of current proposals and council activities</CardDescription>
            </CardHeader>
            <CardContent>
              <CouncilDashboard />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="propose">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Proposal</CardTitle>
              <CardDescription>Create a new proposal for the council to consider</CardDescription>
            </CardHeader>
            <CardContent>
              <ProposalForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vote">
          <Card>
            <CardHeader>
              <CardTitle>Active Votes</CardTitle>
              <CardDescription>Cast your vote on current proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <VotingInterface />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;