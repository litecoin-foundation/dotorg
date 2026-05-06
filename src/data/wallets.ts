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
    version: "0.21.5.4",
    platform: "Windows 64-bit",
    size: "18.6 MB",
    filename: "litecoin-0.21.5.4-win64-setup.exe",
    checksum:
      "023b0ff0cdec7d440fb62d95aae4bf7b7c892242372d33de10e2f889c94c15ad",
    url: "https://download.litecoin.org/litecoin-0.21.5.4/litecoin-0.21.5.4-win64-setup.exe",
  },
  {
    version: "0.21.5.4",
    platform: "macOS",
    size: "14.2 MB",
    filename: "litecoin-0.21.5.4-osx.dmg",
    checksum:
      "c6d21013c41d255e0dd2b2bd2f69395ef7d1ba3e1cfcad41cbf39a4f97078526",
    url: "https://download.litecoin.org/litecoin-0.21.5.4/litecoin-0.21.5.4-osx.dmg",
  },
  {
    version: "0.21.5.4",
    platform: "Linux 64-bit",
    size: "35.9 MB",
    filename: "litecoin-0.21.5.4-x86_64-linux-gnu.tar.gz",
    checksum:
      "91621306bafcadeebc266c264c95576536b5b2658e0ba03b05262ed4b9ab611f",
    url: "https://download.litecoin.org/litecoin-0.21.5.4/litecoin-0.21.5.4-x86_64-linux-gnu.tar.gz",
  },
  {
    version: "0.21.5.4",
    platform: "Linux ARM64",
    size: "34.6 MB",
    filename: "litecoin-0.21.5.4-aarch64-linux-gnu.tar.gz",
    checksum:
      "f0213853817d0ba7854aa718dc43bf991aba80a7db8b47969ae979dc083acce2",
    url: "https://download.litecoin.org/litecoin-0.21.5.4/litecoin-0.21.5.4-aarch64-linux-gnu.tar.gz",
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
