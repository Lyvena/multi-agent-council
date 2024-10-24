import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import AuthDialog from './AuthDialog';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className="px-4 py-2 hover:text-primary">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/council" className="px-4 py-2 hover:text-primary">Council</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="px-4 py-2 hover:text-primary">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <AuthDialog />
    </div>
  );
};

export default Navigation;