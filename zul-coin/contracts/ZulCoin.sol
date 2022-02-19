// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/ERC20/ERC20.sol';

contract ZulCoin is ERC20 {

  constructor() ERC20("ZulCoin", "ZUL"){
    _mint(msg.sender, 1000000000 * 10**18);
  }

}
