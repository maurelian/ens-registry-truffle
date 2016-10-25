A truffle project to simplify using and testing of the ENS registrar described here: https://github.com/ethereum/EIPs/issues/162

For this purpose, you'll likely want to change the Registrar contract's auctionLength and revealPeriod variables to something shorter (ie. 10 and 5 minutes). 


To deploy and interact with the Registrar as a web3js object:
```
$ truffle migrate
 
$ truffle console

truffle(default)> Registrar.deployed().abi 
[ { constant: false,
    inputs: [ [Object] ],
    name: 'releaseDeed',
    outputs: [],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'invalidateName',
....

```




Join the discussion and ask questions here: https://gitter.im/ethereum/go-ethereum/name-registry