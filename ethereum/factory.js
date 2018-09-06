import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x81AD8ACcC89Ffea1e3493f9596E1c6c48E3eDB5c"
);

export default instance;
