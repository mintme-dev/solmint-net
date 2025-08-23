import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Lock, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and branding */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="text-xl font-bold text-foreground">SolMint.net</span>
            </div>
            {/* <div className="hidden md:flex items-center gap-2 text-muted-foreground text-white text-xs">
              <span>Powered by</span>
              <div className="flex items-center gap-1">
                <div className="rounded-full"><img src="/raydium.svg" alt="" /></div>
                <span className="font-medium text-white">Raydium</span>
              </div>
            </div> */}
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Home className="w-6 h-6" /> Home
                </Button>
              </Link>
              <Link to="/revoke">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Lock className="w-6 h-6" /> Revoke Authorities (Soon)
                </Button>
              </Link>
              <a href="https://github.com/mintme-dev/" target="_blank">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary">
                <Github className="w-6 h-6" /> GitHub
                </Button>
              </a>
            </nav>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  <a href="https://github.com/mintme-dev/" target="_blank">
                    <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground">
                      <Github className="w-6 h-6" /> GitHub
                    </Button>
                  </a>
                  <a href="https://github.com/mintme-dev/" target="_blank">
                    <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground">
                      <Github className="w-6 h-6" /> Revoke Authorities (Soon)
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium px-6"
            >
              Connect
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;