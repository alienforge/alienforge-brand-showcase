import { Zap, Hammer } from "lucide-react";

const AlienLogo = () => {
  return (
    <div className="flex items-center gap-3 animate-float">
      <div className="relative">
        {/* Alien head with glow effect */}
        <div className="w-12 h-16 bg-surface-elevated border border-tech-border rounded-full relative overflow-hidden">
          <div className="absolute inset-2 bg-gradient-to-b from-alien-glow/20 to-transparent rounded-full" />
          {/* Eyes */}
          <div className="absolute top-4 left-2 w-2 h-3 bg-alien-glow rounded-full animate-alien-pulse" />
          <div className="absolute top-4 right-2 w-2 h-3 bg-alien-glow rounded-full animate-alien-pulse" />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-alien-glow/10 rounded-full blur-sm" />
        </div>
        
        {/* Forge hammer overlay */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface-glass border border-alien-glow/30 rounded-lg flex items-center justify-center">
          <Hammer className="w-4 h-4 text-alien-glow" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-alien-glow bg-clip-text text-transparent">
          AlienForge
        </h1>
        <div className="text-xs text-alien-glow font-mono">.io</div>
      </div>
    </div>
  );
};

export default AlienLogo;