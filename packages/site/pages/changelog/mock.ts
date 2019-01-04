import {ChangeListing, FeaturedChange} from "./components/ChangeLog"



const changeLogSample: FeaturedChange = {
  title: "Epic Changes are ahead",
  description:
    "We changed the total theme of everything. We made it look more like Material Ui and everything is now an amazing blue rather than gray. Everything is awesome.",
  images: [
    "https://loremflickr.com/600/300/clouds",
    "https://loremflickr.com/600/300/fire,flame/all",
    "https://loremflickr.com/300/600/ocean",
    "https://loremflickr.com/600/300/mountain"
  ]
}

const changeLogData: FeaturedChange[] = [
  changeLogSample,
  changeLogSample,
  changeLogSample,
  changeLogSample
]

const changeLogListItem: ChangeListing = {
  type: "bug",
  log: "Bug Fix: Replaced glitchy carousel with a newer, more stable version."
}

const enhancement: ChangeListing = {
  type: "enhancement",
  log: "Enhancement: Shined up an old component and made it look new."
}

const newFeature: ChangeListing = {
  type: "newFeature",
  log: "New Feature: Created an all new interactive Rich Text Editor."
}

const adjustment: ChangeListing = {
  type: "adjustment",
  log: "Adjustment: Refactored the whole system to use React Hooks."
}

const misc: ChangeListing = {
  type: "misc",
  log: "Misc: Changed some text in the FAQs."
}

const randomDefault: ChangeListing = {
  log: "This is everything we need to do.",
  nestedLog: [
    {
    type: "bug",
    log: "This is a subset of the last thing I talked about",
  }
]
}

const changeLogList: ChangeListing[] = [
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  enhancement,
  enhancement,
  enhancement,
  enhancement,
  newFeature,
  newFeature,
  newFeature,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  adjustment,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  misc,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
]

const roadMapList: ChangeListing[] = [
  changeLogListItem,
  changeLogListItem,
  changeLogListItem,
  enhancement,
  enhancement,
  enhancement,
  enhancement,
  newFeature,
  adjustment,
  adjustment,
  adjustment,
  misc,
  misc,
  misc,
  misc,
  misc,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
  randomDefault,
]


const sampleChangeLog = {
  changeLogData,
  changeLogList,
  roadMapList,
}

export default sampleChangeLog