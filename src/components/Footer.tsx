import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 SolMint - Create Solana Tokens Instantly</span>
          </div>

          {/* Center - Contact */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground"><Mail className="w-6 h-6" /></span>
            <span className="text-muted-foreground">r@tkns.dev</span>
          </div>

          {/* Right side - Social links and powered by */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Follow us</span>
            <div className="flex items-center gap-2">
              <a href="https://x.com/mintme_dev" target="_blank">
                <span className="text-accent hover:text-primary cursor-pointer">𝕏</span>
              </a>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Powered by Solana & <a href="https://mintme.dev/?utm_source=solmint&utm_medium=link&utm_campaign=footer" target="_blank">Mintme.dev</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;