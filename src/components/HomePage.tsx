import { useState } from "react";
import { useTranslation } from "react-i18next";

import SocialLinks from "@/components/SocialLinks";
import DownloadSection from "@/components/DownloadSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import coinImage from "@/assets/coin.png";

type NodeType = "full-node" | "light-client";

const HomePage = () => {
  const [nodeType, setNodeType] = useState<NodeType>("full-node");
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8 litecoin-bg rounded-2xl p-8 border border-light-grey/20">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img src={coinImage} alt="Litecoin Logo" className="w-16 h-16" />
            <h1 className="text-5xl font-bold text-light-grey">Litecoin</h1>
          </div>
          <p className="text-xl text-light-grey/90 max-w-md mx-auto leading-relaxed">
            {t("hero.tagline")}
          </p>
          <a
            href="https://litecoin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 ms-1 transition-colors duration-300 hover:underline"
          >
            {t("hero.learnMore")}
          </a>
        </div>

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
                {t("tabs.core")}
                <span className="ms-2 text-xs opacity-70">
                  ({t("tabs.core.label")})
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="light-client"
                className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
              >
                {t("tabs.electrum")}
                <span className="ms-2 text-xs opacity-70">
                  ({t("tabs.electrum.label")})
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="full-node" className="mt-4 min-h-14 w-full">
              <p className="text-light-grey/80 leading-relaxed w-full">
                {t("tabs.core.description")}
              </p>
            </TabsContent>

            <TabsContent value="light-client" className="mt-4 min-h-14 w-full">
              <p className="text-light-grey/80 leading-relaxed w-full">
                {t("tabs.electrum.description")}
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <DownloadSection nodeType={nodeType} />

        <div className="pt-4">
          <SocialLinks />
        </div>

        <div className="pt-4 border-t border-navy">
          <p className="text-sm text-muted-foreground">
            <a
              href="https://litecoin.com/buy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t("footer.buy")}
            </a>
            {" • "}
            {t("footer.openSource")}
            {" • "}
            <a
              href="https://litecoin.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t("footer.donate")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
