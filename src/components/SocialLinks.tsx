import { Globe } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandDiscord,
  IconMessages
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: IconBrandGithub,
      href: "https://github.com/litecoin-project/litecoin",
      label: "GitHub"
    },
    {
      icon: IconBrandX,
      href: "https://twitter.com/litecoin",
      label: "Twitter"
    },
    {
      icon: IconBrandDiscord,
      href: "https://discord.gg/litecoin",
      label: "Discord"
    },
    {
      icon: IconMessages,
      href: "https://litecointalk.io",
      label: "Forum"
    },
    {
      icon: Globe,
      href: "https://litecoin.com",
      label: "Website"
    }
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="icon"
          asChild
          className="text-light-grey hover:text-primary hover:bg-navy/50 transition-all duration-300"
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <link.icon className="h-6 w-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;