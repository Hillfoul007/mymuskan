import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <div className={`min-h-screen animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default PageTransition;
