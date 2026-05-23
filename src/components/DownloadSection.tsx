import { useState, useEffect } from "react";
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
import { useToast } from "@/hooks/use-toast";

interface DownloadInfo {
  version: string;
  platform: string;
  size: string;
  filename: string;
  checksum: string;
  url: string;
}

type NodeType = "full-node" | "light-client";

interface DownloadSectionProps {
  nodeType: NodeType;
}

const DownloadSection = ({ nodeType }: DownloadSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const litecoinCoreDownloads: DownloadInfo[] = [
    {
      version: "0.21.5.5",
      platform: "Windows 64-bit",
      size: "19.1 MB",
      filename: "litecoin-0.21.5.5-win64-setup.exe",
      checksum:
        "9d222bf96eed1c209e4f57b278f11d9a5266fb2c6caedc23c4a8f4b421288c70",
      url: "https://download.litecoin.org/litecoin-0.21.5.5/win/litecoin-0.21.5.5-win64-setup.exe",
    },
    {
      version: "0.21.5.5",
      platform: "macOS",
      size: "14.5 MB",
      filename: "litecoin-0.21.5.5-osx.dmg",
      checksum:
        "f522e6f93a48a884a0a536e1f1785b5daaed21abcd5b8c46cd9c9046d7e727d9",
      url: "https://download.litecoin.org/litecoin-0.21.5.5/osx/litecoin-0.21.5.5-osx.dmg",
    },
    {
      version: "0.21.5.5",
      platform: "Linux 64-bit",
      size: "36.8 MB",
      filename: "litecoin-0.21.5.5-x86_64-linux-gnu.tar.gz",
      checksum:
        "623410d4f2695a68aa71332ae0672fee19276f41c1c63a531f97e24a50edde14",
      url: "https://download.litecoin.org/litecoin-0.21.5.5/linux/litecoin-0.21.5.5-x86_64-linux-gnu.tar.gz",
    },
    {
      version: "0.21.5.5",
      platform: "Linux ARM64",
      size: "35.5 MB",
      filename: "litecoin-0.21.5.5-aarch64-linux-gnu.tar.gz",
      checksum:
        "3561a1f0ff8db311e4f18553020f625d5547f5bfe9eade8671b9c63aa5f7462a",
      url: "https://download.litecoin.org/litecoin-0.21.5.5/linux/litecoin-0.21.5.5-aarch64-linux-gnu.tar.gz",
    },
  ];

  const electrumLTCDownloads: DownloadInfo[] = [
    {
      version: "4.2.2.1",
      platform: "Windows 64-bit",
      size: "28.5 MB",
      filename: "electrum-ltc-4.2.2.1-setup.exe",
      checksum:
        "e1f2a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1b2c3d4e5f6a7b8c9d0",
      url: "https://electrum-ltc.org/download/electrum-ltc-4.2.2.1-setup.exe",
    },
    {
      version: "4.2.2.1",
      platform: "macOS",
      size: "26.7 MB",
      filename: "electrum-ltc-4.2.2.1.dmg",
      checksum:
        "f2a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1b2c3d4e5f6a7b8c9d0e1",
      url: "https://electrum-ltc.org/download/electrum-ltc-4.2.2.1.dmg",
    },
    {
      version: "4.2.2.1",
      platform: "Linux 64-bit",
      size: "27.2 MB",
      filename: "electrum-ltc-4.2.2.1-x86_64.AppImage",
      checksum:
        "a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      url: "https://electrum-ltc.org/download/electrum-ltc-4.2.2.1-x86_64.AppImage",
    },
  ];

  const allDownloads =
    nodeType === "full-node" ? litecoinCoreDownloads : electrumLTCDownloads;

  // Detect user's OS
  const detectOS = (): string => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();

    if (platform.includes("mac")) {
      return "macOS";
    } else if (platform.includes("linux")) {
      // Check if ARM
      if (userAgent.includes("arm") || userAgent.includes("aarch64")) {
        return "Linux ARM64";
      }
      return "Linux 64-bit";
    } else if (platform.includes("win")) {
      return "Windows 64-bit";
    }

    // Default to Windows
    return "Windows 64-bit";
  };

  const [primaryDownload, setPrimaryDownload] = useState<DownloadInfo>(
    allDownloads[0],
  );
  const [otherDownloads, setOtherDownloads] = useState<DownloadInfo[]>([]);

  useEffect(() => {
    const detectedOS = detectOS();
    const detected =
      allDownloads.find((d) => d.platform === detectedOS) || allDownloads[0];
    const others = allDownloads.filter((d) => d.platform !== detectedOS);

    setPrimaryDownload(detected);
    setOtherDownloads(others);
  }, [nodeType, allDownloads]);

  const copyChecksum = (checksum: string) => {
    navigator.clipboard.writeText(checksum);
    toast({
      title: t("checksum.copied"),
      description: t("checksum.copiedDesc"),
    });
  };

  const downloadButtonText =
    nodeType === "full-node"
      ? t("download.core", { version: primaryDownload.version })
      : t("download.electrum", { version: primaryDownload.version });

  return (
    <div className="space-y-6">
      {/* Primary Download */}
      <div className="text-center space-y-4">
        <a href={primaryDownload.url} download className="inline-block">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
          >
            <Download className="me-2 h-5 w-5" />
            {downloadButtonText}
          </Button>
        </a>

        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>
            {primaryDownload.platform} • {primaryDownload.size}
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 p-0 text-light-grey/70 hover:text-light-grey hover:bg-navy/50"
              >
                <Info className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-card/95 border-navy">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{t("checksum.title")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs break-all bg-navy/50 p-2 rounded flex-1">
                    {primaryDownload.checksum}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyChecksum(primaryDownload.checksum)}
                    className="shrink-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Other Downloads */}
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

        <CollapsibleContent className="space-y-4 mt-4">
          {otherDownloads.map((download) => (
            <Card
              key={download.platform}
              className="bg-card/50 border-navy/50 download-card"
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-medium text-light-grey">
                        {download.platform}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm text-muted-foreground truncate">
                        {download.filename}
                      </p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        • {download.size}
                      </span>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0 text-light-grey/70 hover:text-light-grey hover:bg-navy/50"
                          >
                            <Info className="h-3 w-3" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 bg-card/95 border-navy">
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

export default DownloadSection;
