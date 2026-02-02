import { createFileRoute } from "@tanstack/react-router";

import SocialLinks from "@/components/SocialLinks";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8 litecoin-bg rounded-2xl p-8 border border-light-grey/20">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-light-grey">Litecoin Core</h1>
          <p className="text-xl text-light-grey/90 max-w-md mx-auto leading-relaxed">
            The official Litecoin node software for secure transactions and
            network participation
          </p>
        </div>

        {/* What is Litecoin Section */}
        <div className="space-y-4 border-t border-navy/30 pt-6">
          <p className="text-light-grey/80 max-w-lg mx-auto leading-relaxed">
            Litecoin is a peer-to-peer cryptocurrency enabling instant,
            near-zero cost payments worldwide.
            <a
              href="https://litecoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 ml-1 transition-colors duration-300 hover:underline"
            >
              Learn more about Litecoin →
            </a>
          </p>
        </div>

        {/* Download Section */}
        <DownloadSection />

        {/* Social Links */}
        <div className="pt-4">
          <SocialLinks />
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-navy">
          <p className="text-sm text-muted-foreground">
            <a
              href="https://litecoin.com/buy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Buy Litecoin
            </a>
            {" • "}
            Open source software
            {" • "}
            <a
              href="https://litecoin.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Donate to Development
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
