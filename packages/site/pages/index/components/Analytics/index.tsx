import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import MoneyIcon from "@material-ui/icons/AttachMoney"
import AcceptIcon from "@material-ui/icons/HowToReg"
import PeopleIcon from "@material-ui/icons/People"
import ReferrIcon from "@material-ui/icons/RecordVoiceOver"
import * as React from "react"
import { StatsCard } from "~/components/collections"
import AppUsage from "./components/AppUsage/AppUsage"
import OfferPageClicks from "./components/OfferPageClicks/OfferPageClicks"
import RecentActivity from "./components/RecentActivity/RecentActivity"
import ReferralConversion from "./components/ReferralConversion/ReferralConversion"

const purpleColor = "#7B60E6"

export default class Analytics extends React.Component {
  public render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", margin: "60px 0px" }}
          >
            Capture Useful Data and Make Judgements
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: "center", margin: "30px 0px" }}
          >
            We believe in the scientific method. We get data based off of the
            assumptions made and pivot or double down on a great feature.
          </Typography>
        </Grid>
        <Grid container justify="space-between">
          <StatsCard
            number={1000}
            label="Referrals by Clients in 2018"
            color={purpleColor}
            icon={<ReferrIcon />}
          />
          <StatsCard
            number={1450}
            label="Referrals Accepted in 2018"
            color="#2979FF"
            icon={<AcceptIcon />}
          />
          <StatsCard
            number={1250}
            label="Referral Consultations in 2018"
            color="#00E5FF"
            icon={<PeopleIcon />}
          />
          <StatsCard
            number={1164}
            label="Referrals Started in 2018"
            color="#1DE9B6"
            icon={<MoneyIcon />}
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} xl={8}>
            <ReferralConversion />
            <Grid container>
              <Grid item xs container>
                <AppUsage />
              </Grid>
              <Grid item xs container>
                <OfferPageClicks />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4}>
            <RecentActivity />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
