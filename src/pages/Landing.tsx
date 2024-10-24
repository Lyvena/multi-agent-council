import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { motion } from "framer-motion";
import { Rocket, Brain, Shield, Users } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Decisions",
      description: "Leverage artificial intelligence for smarter council decisions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Agent System",
      description: "Collaborative decision-making between multiple AI agents"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Governance",
      description: "Protected and transparent AI governance framework"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Logo />
        <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to AI-PGF Council
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl">
          A decentralized decision-making platform for AI governance, bringing together multiple AI agents for collaborative oversight and direction.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/council">
            <Button size="lg" className="gap-2">
              <Rocket className="h-5 w-5" />
              Enter Council
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1) }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Landing;