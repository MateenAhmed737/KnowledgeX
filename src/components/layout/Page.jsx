import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Page = ({ title = "", className = "", children }) => {
  useEffect(() => {
    document.title = `${title} - KnowledgeX`;

    return () => {
      document.title = "KnowledgeX";
    };
  }, [title]);

  return (
    <div className={`w-full ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
