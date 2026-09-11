export interface DownloadInfo {
  version: string;
  platform: string;
  size: string;
  filename: string;
  checksum: string;
  url: string;
}

export const litecoinCoreDownloads: DownloadInfo[] = [
  {
    version: "0.21.5.8",
    platform: "Windows 64-bit",
    size: "19.1 MB",
    filename: "litecoin-0.21.5.8-win64-setup.exe",
    checksum:
      "788671ceef824b8939cd4f7913def63098c6caacf93e5e8d03c215780c905f0f",
    url: "https://download.litecoin.org/litecoin-0.21.5.8/win/litecoin-0.21.5.8-win64-setup.exe",
  },
  {
    version: "0.21.5.8",
    platform: "macOS",
    size: "14.6 MB",
    filename: "litecoin-0.21.5.8-osx.dmg",
    checksum:
      "6ea3b94379be34239a521b410260dc92b1fed0e436c2ffb1b72a5065ed5db5c1",
    url: "https://download.litecoin.org/litecoin-0.21.5.8/osx/litecoin-0.21.5.8-osx.dmg",
  },
  {
    version: "0.21.5.8",
    platform: "Linux 64-bit",
    size: "37 MB",
    filename: "litecoin-0.21.5.8-x86_64-linux-gnu.tar.gz",
    checksum:
      "43200c9f9d65ebc126ea5833ca9429e144c4b3273da6bb9f4e89fd7450ab1be9",
    url: "https://download.litecoin.org/litecoin-0.21.5.8/linux/litecoin-0.21.5.8-x86_64-linux-gnu.tar.gz",
  },
  {
    version: "0.21.5.8",
    platform: "Linux ARM64",
    size: "35.7 MB",
    filename: "litecoin-0.21.5.8-aarch64-linux-gnu.tar.gz",
    checksum:
      "129f55defb9045d5635566382c7b9f6fd227d4106a6fc07847a38b25ff9b29a1",
    url: "https://download.litecoin.org/litecoin-0.21.5.8/linux/litecoin-0.21.5.8-aarch64-linux-gnu.tar.gz",
  },
];

export const electrumLTCDownloads: DownloadInfo[] = [
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
