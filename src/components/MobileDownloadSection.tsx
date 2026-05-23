import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Download, ChevronDown, Shield, Copy, Info } from "lucide-react";
import { IconBrandApple, IconBrandAndroid } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast";
import { litecoinCoreDownloads } from "@/data/wallets";

const NEXUS_IOS_URL =
  "https://apps.apple.com/us/app/nexus-wallet-for-litecoin/id6738978436";
const NEXUS_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.litecoin.nexus";

const MobileDownloadSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const copyChecksum = (checksum: string) => {
    navigator.clipboard.writeText(checksum);
    toast({
      title: t("checksum.copied"),
      description: t("checksum.copiedDesc"),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-stretch gap-3 max-w-xs mx-auto">
        <a
          href={NEXUS_IOS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-base font-semibold glow-effect transition-all duration-300"
          >
            <IconBrandApple className="me-2 h-5 w-5 shrink-0" />
            {t("download.nexus.ios")}
          </Button>
        </a>
        <a
          href={NEXUS_ANDROID_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-base font-semibold glow-effect transition-all duration-300"
          >
            <IconBrandAndroid className="me-2 h-5 w-5 shrink-0" />
            {t("download.nexus.android")}
          </Button>
        </a>
      </div>

      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full text-light-grey hover:bg-navy/50"
          >
            <ChevronDown
              className={`me-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
            {t("download.otherPlatforms")}
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-3 mt-4">
          {litecoinCoreDownloads.map((download) => (
            <Card
              key={download.platform}
              className="bg-card/50 border-navy/50 download-card"
            >
              <CardContent className="p-3">
                <div className="flex items-center justify-between gap-3 text-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-light-grey text-sm">
                      {download.platform}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {download.filename}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {download.size}
                      </span>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0 text-light-grey/70 hover:text-light-grey hover:bg-navy/50 shrink-0"
                          >
                            <Info className="h-3 w-3" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[calc(100vw-3rem)] max-w-sm bg-card/95 border-navy">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-accent" />
                              <span className="text-sm font-medium">
                                {t("checksum.title")}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <code className="text-xs break-all bg-navy/50 p-2 rounded flex-1">
                                {download.checksum}
                              </code>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => copyChecksum(download.checksum)}
                                className="shrink-0 h-8 w-8"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <a href={download.url} download className="shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-light-grey/30 text-light-grey hover:bg-light-grey/10"
                    >
                      <Download className="h-4 w-4 me-1" />
                      {t("download.button")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MobileDownloadSection;
