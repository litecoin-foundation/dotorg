import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
import DownloadCard from "@/components/DownloadCard";
import {
  litecoinCoreDownloads,
  electrumLTCDownloads,
  type DownloadInfo,
} from "@/data/wallets";

type NodeType = "full-node" | "light-client";

interface DownloadSectionProps {
  nodeType: NodeType;
}

const DownloadSection = ({ nodeType }: DownloadSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

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
      title: "Checksum copied",
      description: "SHA256 checksum copied to clipboard",
    });
  };

  const downloadButtonText =
    nodeType === "full-node"
      ? `Download Litecoin Core ${primaryDownload.version}`
      : `Download Electrum-LTC ${primaryDownload.version}`;

  return (
    <div className="space-y-6">
      {/* Primary Download */}
      <div className="text-center space-y-4">
        <a href={primaryDownload.url} download className="inline-block">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
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
                  <span className="text-sm font-medium">SHA256 Checksum</span>
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
              className={`mr-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
            Other platforms and systems
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4 mt-4">
          {otherDownloads.map((download) => (
            <DownloadCard key={download.platform} download={download} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DownloadSection;
