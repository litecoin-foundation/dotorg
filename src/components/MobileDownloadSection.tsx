import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { IconBrandApple, IconBrandAndroid } from "@tabler/icons-react";
import DownloadCard from "@/components/DownloadCard";
import { litecoinCoreDownloads } from "@/data/wallets";

const NEXUS_IOS_URL =
  "https://apps.apple.com/us/app/nexus-wallet-for-litecoin/id6738978436";
const NEXUS_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.litecoin.nexus";

const MobileDownloadSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-6">
      {/* Nexus Wallet Primary CTAs */}
      <div className="flex flex-col items-center gap-3">
        <a
          href={NEXUS_IOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
          >
            <IconBrandApple className="mr-2 h-5 w-5" />
            Download for iOS
          </Button>
        </a>
        <a
          href={NEXUS_ANDROID_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
          >
            <IconBrandAndroid className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
        </a>
      </div>

      {/* Litecoin Core for desktop platforms */}
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full text-light-grey hover:bg-navy/50"
          >
            <ChevronDown
              className={`mr-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
            Other platforms and systems
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4 mt-4">
          {litecoinCoreDownloads.map((download) => (
            <DownloadCard key={download.platform} download={download} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MobileDownloadSection;
