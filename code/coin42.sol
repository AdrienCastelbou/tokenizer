// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 < 0.9.0;

contract coin42 {
    // events dclaration
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

    // public token attributes
    string public constant name = "42 coin";
    string public constant symbol = "42C";
    uint8 public constant decimals = 18;
    uint256 public constant totalSupply = 1000000000000000000000000;

    // private token attributes
    // the balance of each addresses
    mapping(address => uint256) balances;
    // the amount of token allowed to be transfered to a recipient
    mapping(address => mapping(address => uint256)) allowed;

    // token constructor
    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint tokensAmount) public returns (bool) {
        require (tokensAmount <= balances[msg.sender]);
        balances[msg.sender] -= tokensAmount;
        balances[receiver] += tokensAmount;
        emit Transfer(msg.sender, receiver, tokensAmount);
        return true;
    }

    function approve(address delegate, uint tokensAmount) public returns (bool) {
        allowed[msg.sender][delegate] = tokensAmount;
        emit Approval(msg.sender, delegate, tokensAmount);
        return true;
    }

    function allowance(address owner, address delegate) public view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint tokensAmount) public returns (bool) {
        require(tokensAmount <= balances[owner]);
        require(tokensAmount <= allowed[owner][msg.sender]);
        balances[owner] -= tokensAmount;
        allowed[owner][msg.sender] -= tokensAmount;
        balances[buyer] += tokensAmount;
        emit Transfer(owner, buyer, tokensAmount);
        return true;
    }
}