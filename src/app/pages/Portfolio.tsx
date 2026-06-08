// import PortfolioNavigation from "../components/PortfolioNavigation";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioProjects from "../components/PortfolioProjects";
import PortfolioAwards from "../components/PortfolioAwards";
import PortfolioContact from "../components/PortfolioContact";
import PortfolioFooter from "../components/PortfolioFooter";
import { useCallback, useState } from "react";
import GreatSageAnimation from "../components/GreatSageAnimation";
import Navbar from "../components/Navbar";


export default function PortfolioPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  
  const handleIntroComplete = useCallback(() => {
    setIsNavbarVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      {!isNavbarVisible && (
        <GreatSageAnimation onIntroComplete={handleIntroComplete} />
      )}
      {isNavbarVisible && (
        <>
          <Navbar isVisible={isNavbarVisible} />
          {/* <PortfolioNavigation /> */}
          
          <PortfolioHero />
          <PortfolioProjects />
          <PortfolioAwards />
          <PortfolioContact />
          <PortfolioFooter />
        </>
      )}
    </main>
  );
}
