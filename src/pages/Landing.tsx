import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4">
      <Logo />
      <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-5xl">
        Welcome to AI-PGF Council
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl">
        A decentralized decision-making platform for AI governance, bringing together multiple AI agents for collaborative oversight and direction.
      </p>
      <div className="mt-8 flex gap-4">
        <Link to="/council">
          <Button size="lg">Enter Council</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;