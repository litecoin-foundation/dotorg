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
    version: "0.21.5.6",
    platform: "Windows 64-bit",
    size: "19.1 MB",
    filename: "litecoin-0.21.5.6-win64-setup.exe",
    checksum:
      "b89401cf3696ab3f262ce20c476d59a9cf093292564ff3f7d70c0ab9fdaef010",
    url: "https://download.litecoin.org/litecoin-0.21.5.6/win/litecoin-0.21.5.6-win64-setup.exe",
  },
  {
    version: "0.21.5.6",
    platform: "macOS",
    size: "14.5 MB",
    filename: "litecoin-0.21.5.6-osx.dmg",
    checksum:
      "8eae361597a1698d61bac73e89d6aed8a32578db24be5e42958a583d7abf7276",
    url: "https://download.litecoin.org/litecoin-0.21.5.6/osx/litecoin-0.21.5.6-osx.dmg",
  },
  {
    version: "0.21.5.6",
    platform: "Linux 64-bit",
    size: "36.8 MB",
    filename: "litecoin-0.21.5.6-x86_64-linux-gnu.tar.gz",
    checksum:
      "3c0a217651a431ef446641669a0b74ce7dbcd9b9ed1a118fc830b8f6779ee83f",
    url: "https://download.litecoin.org/litecoin-0.21.5.6/linux/litecoin-0.21.5.6-x86_64-linux-gnu.tar.gz",
  },
  {
    version: "0.21.5.6",
    platform: "Linux ARM64",
    size: "35.5 MB",
    filename: "litecoin-0.21.5.6-aarch64-linux-gnu.tar.gz",
    checksum:
      "81c3ca2a7fcbccaabaf0a0ea2022f1990787f0cc1937aaad4dcc61d2856799a8",
    url: "https://download.litecoin.org/litecoin-0.21.5.6/linux/litecoin-0.21.5.6-aarch64-linux-gnu.tar.gz",
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
