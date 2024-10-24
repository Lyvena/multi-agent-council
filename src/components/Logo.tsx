import React from 'react';
import { Users, Shield } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Shield className="h-8 w-8 text-primary" />
        <Users className="h-4 w-4 text-primary absolute bottom-0 right-0" />
      </div>
      <span className="font-bold text-xl">AI-PGF Council</span>
    </div>
  );
};

export default Logo;