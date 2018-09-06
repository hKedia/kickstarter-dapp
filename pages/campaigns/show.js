import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      contributorsCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      contributorsCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Campaign Manager",
        description:
          "Creator of the Campaign and can create request to withdraw money",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: "You must contribute this much wei to become an approver"
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the Campaign. Needs to be approved by the manager"
      },
      {
        header: contributorsCount,
        meta: "Number of Contributors",
        description: "Number of people who have contributed to this campaign"
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: "Amount of money this Campaign has left to spend"
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

          <Grid.Column width={6}>
            <ContributeForm />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;