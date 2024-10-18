import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const fetchActiveProposals = async () => {
  // Simulated API call
  return [
    { id: 1, title: 'Implement new AI safety measures', description: 'Proposal to enhance AI safety protocols...', votes: { for: 3, against: 1 } },
    { id: 2, title: 'Expand research funding', description: 'Increase budget allocation for AI research...', votes: { for: 2, against: 2 } },
  ];
};

const VotingInterface = () => {
  const { data: proposals, isLoading, error } = useQuery({
    queryKey: ['activeProposals'],
    queryFn: fetchActiveProposals,
  });

  const { toast } = useToast();

  const handleVote = (proposalId: number, vote: 'for' | 'against') => {
    // Here you would typically send the vote to your backend
    console.log(`Voted ${vote} on proposal ${proposalId}`);
    toast({
      title: "Vote Recorded",
      description: `Your vote has been successfully recorded.`,
    });
  };

  if (isLoading) return <div>Loading active proposals...</div>;
  if (error) return <div>Error fetching active proposals</div>;

  return (
    <div className="space-y-4">
      {proposals.map((proposal) => (
        <Card key={proposal.id}>
          <CardHeader>
            <CardTitle>{proposal.title}</CardTitle>
            <CardDescription>Current Votes: For {proposal.votes.for}, Against {proposal.votes.against}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{proposal.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => handleVote(proposal.id, 'for')} variant="outline">Vote For</Button>
            <Button onClick={() => handleVote(proposal.id, 'against')} variant="outline">Vote Against</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default VotingInterface;