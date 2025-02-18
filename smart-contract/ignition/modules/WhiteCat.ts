// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WhiteCatModule = buildModule("WhiteCatModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", 10_000_000n); // 1 juta WCAT
  const whiteCat = m.contract("WhiteCat", [initialSupply]);
  return { whiteCat };
});

export default WhiteCatModule;