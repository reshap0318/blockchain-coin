# Project - Voting Blockchain

## Aplikasi yang Dibutuhkan
- NodeJS : 20.14.0
- Hardhat : 2.22
  ```sh
    npm install -g hardhat
  ```
- Solidity : 0.8.28
  ```sh
    npm install -g solc
  ```

## Pemasangan
- Masuk ke Folder smart-contract
  ```sh
    cd smart-contract
  ```
- Install Module
  ```sh
    npm install
  ```
- Running Node (Server)
  ```sh
    npx hardhat node
  ```
- Build Smart Contract
  ```sh
    npx hardhat compile
  ```
- Deploy Smart Contract
  ```sh
    npx hardhat ignition deploy ./ignition/modules/WhiteCat.ts --network localhost
  ```
- Keluar dari Folder smart-contract dan Masuk Ke Folder fe
  ```sh
    cd ../fe
  ```
- Install Module
  ```sh
    npm install
  ```
- Jalankan Frontend
  ```sh
    npm run dev
  ```
