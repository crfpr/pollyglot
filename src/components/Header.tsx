import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isTranslatePage = location.pathname === '/';
  const activeText = isTranslatePage ? 'Translate' : 'Chat';
  const inactiveText = isTranslatePage ? 'Chat' : 'Translate';
  const inactivePath = isTranslatePage ? '/chat' : '/';

  return (
    <header className={`bg-white-600 text-slate-900 p-4 h-16 ${className} sticky top-0 flex justify-between items-center`}>
      <h1 className="text-xl font-bold">PollyGlot</h1>
      
      {/* Only show dropdown on larger screens */}
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              {activeText}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate(inactivePath)}>
              {inactiveText}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;