import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import SocialLinks from "@/components/SocialLinks";
import DownloadSection from "@/components/DownloadSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import coinImage from "@/assets/coin.png";

type NodeType = "full-node" | "light-client";

const Index = () => {
  const [nodeType, setNodeType] = useState<NodeType>("full-node");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8 litecoin-bg rounded-2xl p-8 border border-light-grey/20">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img src={coinImage} alt="Litecoin Logo" className="w-16 h-16" />
            <h1 className="text-5xl font-bold text-light-grey">Litecoin</h1>
          </div>
          <p className="text-xl text-light-grey/90 max-w-md mx-auto leading-relaxed">
            Litecoin is a digital money enabling instant, near-zero cost
            payments worldwide.
          </p>
          <a
            href="https://litecoin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 ml-1 transition-colors duration-300 hover:underline"
          >
            Learn more about Litecoin →
          </a>
        </div>

        {/* Node Section */}
        <div className="space-y-4 border-t border-navy/30 pt-6 max-w-lg mx-auto">
          <Tabs
            value={nodeType}
            onValueChange={(value) => setNodeType(value as NodeType)}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-navy/50">
              <TabsTrigger
                value="full-node"
                className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
              >
                Litecoin Core
                <span className="ml-2 text-xs opacity-70">(Advanced)</span>
              </TabsTrigger>
              <TabsTrigger
                value="light-client"
                className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
              >
                Electrum-LTC
                <span className="ml-2 text-xs opacity-70">(Simple)</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="full-node" className="mt-4 min-h-14 w-full">
              <p className="text-light-grey/80 leading-relaxed w-full">
                Full node wallet that downloads the entire blockchain for maximum security and network support.
              </p>
            </TabsContent>

            <TabsContent value="light-client" className="mt-4 min-h-14 w-full">
              <p className="text-light-grey/80 leading-relaxed w-full">
                Lightweight wallet that syncs quickly by trusting external servers instead of the full blockchain.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Download Section */}
        <DownloadSection nodeType={nodeType} />

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
