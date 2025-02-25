// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract KuverseFT is ERC721, ERC721URIStorage {
    uint256 currTokenId;
    constructor(address initialOwner)
        ERC721("KuverseFT", "KFT")
        Ownable(initialOwner)
    {}

    function mint(address to, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, currTokenId);
        _setTokenURI(currTokenId, uri);

        currTokenId++;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}