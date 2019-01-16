import * as React from "react"
// import { joinme as data, WeekProps, Project } from "../mock"
import { Project, WeekProps } from "../mock"
import Estimates from "./Estimates"
import PaymentAgreement from "./PaymentAgreement"
import PaymentOptions from "./PaymentOptions"
import ProjectTitleArea from "./ProjectTitleArea"
import Signature from "./Signature"
import Spacer from "./Spacer"
import TermsAndConditions from "./TermsAndConditions"
import Week from "./Week"

interface Props {
  planData: Project
}

export default class PlanComponent extends React.Component<Props> {
  public render() {
    const data = this.props.planData
    const rawTotal = data.weeks.length * data.costPerPeriod
    return (
      <div>
        <div style={{ padding: "80px" }}>
          <div style={{ height: 50 }} />
          <ProjectTitleArea data={data} />
          <Spacer />
          {data.weeks.map((wk: WeekProps, index: number) => (
            <Week
              key={index}
              week={wk}
              index={index}
              devPeriod={data.devPeriod}
            />
          ))}
          <Spacer />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px"
            }}
          >
            <div style={{ width: "80%", borderBottom: "1px solid black" }} />
          </div>
          <Estimates
            devPeriod={data.devPeriod}
            numberPeriods={data.weeks.length}
            costPerPeriod={data.costPerPeriod}
          />
          <PaymentOptions data={data} rawTotal={rawTotal} />
        </div>

        <PaymentAgreement data={data} />
        <Signature expiration={data.expirationOfQuote} />
        <TermsAndConditions />
        <div style={{ height: 400 }} />
      </div>
    )
  }
}

// const USPaper = (props: { children: React.ReactNode }) => (
//   <div style={{ width: 2550, height: 3300 }}>{props.children}</div>
// )
