import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`${className} md:hidden fixed bottom-0 left-0 right-0 bg-white border-t`}>
      <div className="container flex h-16 items-center justify-around">
        <Link to="/" className="text-sm font-medium">
          Translate
        </Link>
        <Link to="/chat" className="text-sm font-medium">
          Chat
        </Link>
      </div>
    </footer>
  );
}