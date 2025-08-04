import AlienLogo from "@/components/AlienLogo";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Code, Gamepad2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-alien-glow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-alien-glow/3 rounded-full blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 max-w-4xl mx-auto">
        
        {/* Logo */}
        <div className="mb-12">
          <AlienLogo />
        </div>

        {/* Hero section */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Forge Your</span>{" "}
            <span className="bg-gradient-to-r from-alien-glow to-alien-glow-soft bg-clip-text text-transparent">
              Aliens
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Perfect for Gaming, NFTs, and Web3 Projects
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-alien-glow">
              <Gamepad2 className="w-4 h-4" />
              Gaming
            </div>
            <div className="flex items-center gap-2 text-sm text-alien-glow">
              <Sparkles className="w-4 h-4" />
              NFTs
            </div>
            <div className="flex items-center gap-2 text-sm text-alien-glow">
              <Code className="w-4 h-4" />
              Web3
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="premium" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto font-semibold group"
            onClick={() => window.open('https://dan.com/buy-domain/alienforge.io', '_blank')}
          >
            <span>Buy This Domain</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Premium domain available on Dan.com
          </p>
        </div>

        {/* Domain info */}
        <div className="mt-16 p-6 bg-surface-glass border border-tech-border rounded-xl backdrop-blur-sm max-w-md mx-auto">
          <div className="text-center space-y-2">
            <div className="text-2xl font-mono font-bold text-alien-glow">
              AlienForge.io
            </div>
            <div className="text-sm text-muted-foreground">
              Brandable • Memorable • .io TLD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;