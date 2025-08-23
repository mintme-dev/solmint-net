import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Revoke Authorities
      </span>
    </h2>

    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
      Soon you will be able to <strong className="text-white">revoke mint and freeze authorities </strong> 
       directly from our platform.  
      This feature will be <span className="text-accent font-semibold">completely free</span> for everyone. Using mintme-sdk 
      
    </p>

    <div className="flex justify-center mb-12">
          <a 
            href="https://github.com/mintme-dev/mintme-sdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-white hover:bg-primary transition-colors bg-secondary p-2 rounded-sm"
          >
            <Github className="w-6 h-6" />
            <span className="text-sm font-medium">View mintme-dev/mintme-sdk</span>
          </a>
        </div>

    <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
      <span className="text-sm text-muted-foreground">Coming Soon</span>
      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
    </div>
  </div>
</main>
      <Footer />
    </div>
  );
};

export default Index;
