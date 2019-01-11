import * as React from "react"
import Center from "./Center"

interface Props {}

export default class TermsAndConditions extends React.Component<Props> {
  public render() {
    return (
      <>
        <div style={{ marginTop: 80 }}>
          <Center size={8}>
            <div style={{ fontSize: 26, fontWeight: "bold" }}>
              Terms and Conditions
            </div>
          </Center>
        </div>
        <div style={{ marginTop: 20 }}>
          <Center size={8}>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              VAL PUNK, LLC reserves the right to develop apps and services on
              our own system. While you will own the code and data for any app
              or site you pay for, you will not own any code that belongs to a
              VAL PUNK, LLC service. This includes but is not limited to email,
              texting, and notification services, as well as our own proprietary
              content management service, and our payment management system.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              You may continue to use any VALPUNK, LLC service that the app or
              service was developed using and will only be required to pay your
              fair share of the use of these services that require fees by third
              party sources.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For monthly plans, you will own any code that was developed up
              until the most recent paid invoice. If work has been done in
              coordination with an upaid invoice, that work will not be owned by
              you until that invoice is paid and received by VAL PUNK, LLC.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For week plans, you will own any code that was developed for the
              week that had been paid for.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              For lump sum plans, you will own code when VAL PUNK, LLC receives
              payment for both the intial and final lump sum payments.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              We reserve the right to share any work we do on this project
              (unless otherwise specified in an Non Disclosure Agreement) as a
              part of our portfolio.
            </div>
            <div style={{ fontSize: 22, marginTop: 16 }}>
              Work that we are requested to do that is not specified in this
              quote may be assessed at a rate of $80/hr.
            </div>
          </Center>
        </div>
      </>
    )
  }
}
