A truffle project to simplify using and testing of the ENS registrar described here: https://github.com/ethereum/EIPs/issues/162

For this purpose, you'll likely want to change the Registrar contract's auctionLength and revealPeriod variables to something shorter (ie. 10 and 5 minutes). 


To deploy and interact with the Registrar as a web3js object:
```
$ truffle migrate
 
$ truffle console

truffle(default)> Registrar.deployed().abi // we have a Registrar
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

truffle(default)> Registrar.deployed().startAuction(.... // 

```

__Suggestion:__ Try playing opening an auction for your own name, and playing
through the timeline in the "Auctioning names" section of the [ERC](https://github.com/ethereum/EIPs/issues/162).


Join the discussion and ask questions here: https://gitter.im/ethereum/go-ethereum/name-registry