// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WhiteCat is ERC20 {
    constructor(uint256 initialSupply) ERC20("WhiteCat", "WCAT") {
        _mint(msg.sender, initialSupply);
    }
}