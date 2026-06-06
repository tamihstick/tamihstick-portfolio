import { useCallback, useState } from "react";
import GreatSageAnimation from "../components/GreatSageAnimation";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const handleIntroComplete = useCallback(() => {
    setIsNavbarVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar isVisible={isNavbarVisible} />
      <GreatSageAnimation onIntroComplete={handleIntroComplete} />
    </main>
  );
}
