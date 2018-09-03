const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Delete the build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read from Contract and compile the Contract
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

// Create the build folder
fs.ensureDirSync(buildPath);

// Loop over output and write to build folder
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
