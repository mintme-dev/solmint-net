import { MintmeWidget } from 'mintme-widget'
import { Buffer } from "buffer";
import { Github } from "lucide-react";

if (typeof window !== "undefined") window.Buffer = Buffer;
const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center justify-center py-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main heading with gradient */}
        <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Create Your Token In Seconds.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Launch your token on Solana in seconds. No coding required. No hidden fees. <strong className='text-white'>Project Open source</strong>.
        </p>

        <div className="flex justify-center mb-12">
          <a 
            href="https://github.com/mintme-dev/solmint-net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-white hover:bg-secondary transition-colors bg-primary p-2 rounded-sm"
          >
            <Github className="w-6 h-6" />
            <span className="text-sm font-medium">View on GitHub</span>
          </a>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium">Solana Network</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium">Instant Deployment</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium">Professional Tools</span>
          </div>
        </div>

        {/* Status indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Secure & Trusted</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-sm text-white">🌍</span>
              </div>
              <span className="text-sm text-muted-foreground">Project Open Source</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">LIVE on Mainnet</span>
          </div>
        </div>

        {/* Placeholder content */}
        <div className="">
          <MintmeWidget
            endpoint={import.meta.env.VITE_MINTME_RPC_URL as string}
            cluster="mainnet-beta"
            pinataConfig={{
              apiKey: import.meta.env.VITE_MINTME_PINATA_API_KEY as string,
              gateway: import.meta.env.VITE_MINTME_PINATA_GATEWAY as string,
            }}
            partnerWallet={import.meta.env.VITE_MINTME_PARTNER_WALLET as string}
            partnerAmount={Number(import.meta.env.VITE_MINTME_PARTNER_AMOUNT)}
            defaultTheme="dark"
            options={{
              showCredit: false
            }}
            className="solmint-net-styles"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;