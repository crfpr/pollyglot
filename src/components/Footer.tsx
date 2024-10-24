import { Link, useLocation } from "react-router-dom";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const location = useLocation();
  const isTranslatePage = location.pathname === '/';

  return (
    <footer className={`${className} md:hidden fixed bottom-0 left-0 right-0 bg-white border-t`}>
      <div className="container flex h-16 items-center justify-around">
        <Link 
          to="/" 
          className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
            isTranslatePage 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          Translate
        </Link>
        <Link 
          to="/chat" 
          className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
            !isTranslatePage 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          Chat
        </Link>
      </div>
    </footer>
  );
}