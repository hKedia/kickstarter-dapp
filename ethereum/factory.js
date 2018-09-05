import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1dFe10ca56a68415FB729249fd8c0012E484b0B8"
);

export default instance;
