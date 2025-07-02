import Hero from "@/components/Hero";
import TariffConstructor from "@/components/TariffConstructor";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TariffConstructor />
      <FAQ />
    </div>
  );
};

export default Index;
