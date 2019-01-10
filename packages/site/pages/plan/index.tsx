import Head from "next/head"
import * as React from "react"
import Estimates from "./components/Estimates"
import PaymentAgreement from "./components/PaymentAgreement"
import PaymentOptions from "./components/PaymentOptions"
import ProjectTitleArea from "./components/ProjectTitleArea"
import Signature from "./components/Signature"
import Spacer from "./components/Spacer"
import TermsAndConditions from "./components/TermsAndConditions"
import Week from "./components/Week"
import { joinme as data, WeekProps } from "./mock"
import PlanComponent from "./components/PlanComponent";

export default class Plan extends React.Component {
  public render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
              href="https://fonts.googleapis.com/css?family=Kanit"
              rel="stylesheet"
            />
          </Head>
          <style jsx global>
            {`
              body {
                margin: 0;
                font-family: "Kanit", sans-serif;
              }
            `}
          </style>
        </div>
        <PlanComponent planData={data} />
      </div>
    )
  }
}

// const USPaper = (props: { children: React.ReactNode }) => (
//   <div style={{ width: 2550, height: 3300 }}>{props.children}</div>
// )
