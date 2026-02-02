import { useState } from "react";
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

const DownloadSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const primaryDownload = {
    version: "27.1",
    platform: "Windows 64-bit",
    size: "32.4 MB",
    filename: "litecoin-27.1-win64-setup.exe",
    checksum:
      "d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
  };

  const otherDownloads = [
    {
      platform: "macOS",
      filename: "litecoin-27.1-osx64.dmg",
      size: "28.1 MB",
      checksum:
        "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0",
    },
    {
      platform: "Linux 64-bit",
      filename: "litecoin-27.1-x86_64-linux-gnu.tar.gz",
      size: "31.7 MB",
      checksum:
        "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1",
    },
    {
      platform: "Linux ARM64",
      filename: "litecoin-27.1-aarch64-linux-gnu.tar.gz",
      size: "29.3 MB",
      checksum:
        "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8d89a5b5a1d5c8e4f2a3b8c7d6e9f0a1b2",
    },
  ];

  const copyChecksum = (checksum: string) => {
    navigator.clipboard.writeText(checksum);
    toast({
      title: "Checksum copied",
      description: "SHA256 checksum copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      {/* Primary Download */}
      <div className="text-center space-y-4">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Litecoin Core {primaryDownload.version}
        </Button>

        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>
            {primaryDownload.platform} • {primaryDownload.size}
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 p-0 text-accent hover:text-accent/80"
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
            className="w-full text-light-grey hover:text-primary"
          >
            <ChevronDown
              className={`mr-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
            Other platforms and checksums
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4 mt-4">
          {otherDownloads.map((download) => (
            <Card key={download.platform} className="bg-card/50 border-navy/50">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-light-grey">
                      {download.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {download.filename}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {download.size}
                      </span>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0 text-accent hover:text-accent/80"
                          >
                            <Info className="h-3 w-3" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 bg-card/95 border-navy">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-accent" />
                              <span className="text-sm font-medium">
                                SHA256 Checksum
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-light-grey/30 text-light-grey hover:bg-light-grey/10"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
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
