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
