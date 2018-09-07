import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x79e4d470235b604A7e313a5de68FE46e49750e90"
);

export default instance;
