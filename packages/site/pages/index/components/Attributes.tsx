// import { GridSpacing } from "@material-ui/core/Grid"
// import * as React from "react"
// import { Keyframes } from "react-spring"
// import styled from "styled-components"
// import { Content } from "~/components/templates"
// import delay from "delay"

// interface Props {
//   test?: string
// }

// interface State {
//   spacing?: number
// }

// const attributesData = [
//   {
//     name: "modern"
//   },
//   {
//     name: "Business Technology"
//   },
//   {
//     name: "Liberating"
//   },
//   {
//     name: "Progressive"
//   },
//   {
//     name: "Optomistic"
//   },
//   {
//     name: "Confident"
//   }
// ]

// export default class Attributes extends React.PureComponent<Props, State> {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       spacing: 0
//     }
//   }

//   public onClickHandler = () => {
//     this.setState({
//       spacing: this.state.spacing === 0 ? 32 : 0
//     })
//   }

//   public render() {
//     return (
//       <>
//         <Container state="onLoad">
//           {(ban: { spacing: number }) => (
//             <Content style={{ display: "flex", flexDirection: "column" }}>
//               <StyledDiv spacing={ban.spacing}>
//                 {attributesData.map(att => (
//                   <Attribute key={att.name} {...att} />
//                 ))}
//               </StyledDiv>
//             </Content>
//           )}
//         </Container>

//         <div>
//           <button onClick={this.onClickHandler}>Animate!</button>
//         </div>
//       </>
//     )
//   }
// }

// interface AttributeProps {
//   name?: string
// }

// class Attribute extends React.Component<AttributeProps> {
//   public render() {
//     return (
//       <div
//         style={{
//           height: 200,
//           margin: "auto"
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "white",
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           {this.props.name}
//         </div>
//       </div>
//     )
//   }
// }
// const lightPurple = "#573750"

// const StyledDiv = styled.div<{ spacing: number }>`
//   display: flex;
//   flex-wrap: wrap;
//   > * {
//     flex: 1 0 33%; /* explanation below */
//     // &:not(:nth-child(1)):not(:nth-child(4)) {
//     //   padding: ${props => props.spacing}px;
//     // }
//     &:nth-child(1) {
//       padding-right: ${props => props.spacing / 2}px;
//       padding-bottom: ${props => props.spacing / 2}px;
//     }

//     &:nth-child(2) {
//       padding-bottom: ${props => props.spacing / 2}px;
//       padding-left: ${props => props.spacing / 2}px;
//       padding-right: ${props => props.spacing / 2}px;
//     }

//     &:nth-child(3) {
//       padding-bottom: ${props => props.spacing / 2}px;
//       padding-left: ${props => props.spacing / 2}px;
//     }
//     &:nth-child(4) {
//       padding-top: ${props => props.spacing / 2}px;
//       padding-right: ${props => props.spacing / 2}px;
//     }

//     &:nth-child(5) {
//       padding-top: ${props => props.spacing / 2}px;
//       padding-left: ${props => props.spacing / 2}px;
//       padding-right: ${props => props.spacing / 2}px;
//     }

//     &:nth-child(6) {
//       padding-top:   ${props => props.spacing / 2}px;
//       padding-left:   ${props => props.spacing / 2}px;
//     }
//   }
// `

// const Container = Keyframes.Spring({
//   // Single props
//   initial: { spacing: 0 },
//   // Chained animations (arrays)
//   showAndHide: [{ opacity: 1 }, { opacity: 0 }],
//   onLoad: async (next: any, _cancel: any, _ownProps: any) => {
//     await next({ spacing: 0 })
//     await delay(1000)
//     await next({ spacing: 40 })
//     // await next({ spacing: 1 })
//   }
// })
