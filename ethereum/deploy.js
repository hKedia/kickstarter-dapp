const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

// setting up provider with account mnemonic and infura node url
const provider = new HDWalletProvider(
  "either amused raven divert claim ivory shallow flag fever flight mail much",
  "https://rinkeby.infura.io/v3/ac476ff47cc44292b940f1162474cd8b"
);

const web3 = new Web3(provider);

// creating below function to use async/await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();
