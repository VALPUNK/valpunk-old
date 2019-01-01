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
      <Grid container justify="center" style={{ paddingBottom: 60 }}>
        <Grid item xs={12} container justify="center">
          <Typography
            variant="h3"
            style={{ textAlign: "center", margin: "60px 0px" }}
          >
            Capture Useful Data and Make Judgements
          </Typography>
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              marginBottom: "30px",
              width: "80%"
            }}
          >
            We believe in the scientific method. As your users use your product,
            we'll capture data about their usage and see how they stack up
            against the assumptions we made. We can then double down on features
            they love or pivot in a direction that makes more sense!
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
          <Grid item xs={12} xl={8} container justify="center">
            <ReferralConversion />
            <Grid item xs={6} container justify="center">
              <AppUsage />
            </Grid>
            <Grid item xs={6} container justify="center">
              <OfferPageClicks />
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
