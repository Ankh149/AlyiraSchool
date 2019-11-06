pragma solidity ^0.5.11;

contract ERC20 {
        string public name = "ERC20 Token";
        string public symbol = "TOK";
        uint decimals = 18;
        uint private _totalSupply = 100000 * 10**decimals;
        mapping (address => uint) private _balances;
        mapping (address => mapping (address => uint256)) private _allowances;
        event Transfer(address indexed from, address indexed to, uint indexed amount);
    //le constructeur s'execute quand on deploie notre contrat
        constructor() public {
            _balances[msg.sender] = _totalSupply;

        }

        function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
        function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }
        function transfer(address recipient, uint256 amount) public returns(uint256) {
        require(msg.sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _balances[msg.sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
    }
        //la fonction approve donne la procuration au spender de faire des transactions depuis mon totalSupply
        function approve(address spender, uint256 amount) public returns (bool) {
        _allowances[msg.sender][spender] += amount;
            return true;
    }
        function transferFrom(address spender,address owner,uint256 amount) public returns(bool) {
            require(_allowances[owner][spender] <= amount, "vous avez depassé le montant autorisé");
            require(_balances[owner] >= amount,"vous pouvez effectuer la transaction");
            _balances[owner] -= amount;
            _balances[spender] += amount;
            _allowances[owner][spender] -= amount;
            emit Transfer(owner, spender, amount);
            return true;
            }
        function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }
}