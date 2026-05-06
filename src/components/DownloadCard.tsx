import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Download, Shield, Copy, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { DownloadInfo } from "@/data/wallets";

interface DownloadCardProps {
  download: DownloadInfo;
}

const DownloadCard = ({ download }: DownloadCardProps) => {
  const { toast } = useToast();

  const copyChecksum = () => {
    navigator.clipboard.writeText(download.checksum);
    toast({
      title: "Checksum copied",
      description: "SHA256 checksum copied to clipboard",
    });
  };

  return (
    <Card className="bg-card/50 border-navy/50 download-card">
      <CardContent className="p-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="font-medium text-light-grey">
                {download.platform}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0">
              <p className="text-sm text-muted-foreground truncate min-w-0 sm:flex-1">
                {download.filename}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  • {download.size}
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
                          onClick={copyChecksum}
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
          </div>
          <a href={download.url} download className="shrink-0">
            <Button
              size="sm"
              variant="outline"
              className="border-light-grey/30 text-light-grey hover:bg-light-grey/10"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
