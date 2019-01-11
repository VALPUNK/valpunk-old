import { ChangeListing, FeaturedChange } from "./components/ChangeLog"
import { string } from "prop-types"

interface SectionListing {
  title: string
  listings: ChangeListing[]
}

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
  log: "Bug Fix: Replaced glitchy carousel with a newer, more stable version. Lorem ipsum dolor sit."
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
      log: "This is a subset of the last thing I talked about"
    }
  ]
}

const bugListings: SectionListing = {
  title: "Bug Fixes",
  listings: [
    changeLogListItem,
    changeLogListItem,
    changeLogListItem,
    changeLogListItem,
    changeLogListItem,
    changeLogListItem,
    changeLogListItem,
    changeLogListItem
  ]
}

const enhancementListings: SectionListing = {
  title: "Enhancements",
  listings: [
    enhancement,
    enhancement,
    enhancement,
    enhancement,
  ]
}

const newFeatureListing: SectionListing = {
  title: "New Features",
  listings: [
    newFeature,
    newFeature,
    newFeature,
  ]
}

const adjustmentListings: SectionListing = {
  title: "Adjustments",
  listings: [
    adjustment,
    adjustment,
    adjustment,
    adjustment,
    adjustment,
    adjustment,
  ]
}

const miscListings: SectionListing = {
  title: "Miscellaneous",
  listings: [
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
  ]
}

const randomDefaultListings: SectionListing = {
  title: "Nested Listings Example",
  listings: [
    randomDefault,
    randomDefault,
    randomDefault,
    randomDefault,
    randomDefault,
    randomDefault
  ]
}



const changeLogList: SectionListing[] = [
  bugListings,
  enhancementListings,
  newFeatureListing,
  adjustmentListings,
  miscListings,
  randomDefaultListings
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
  randomDefault
]

const sampleChangeLog = {
  changeLogData,
  changeLogList,
  roadMapList
}

export default sampleChangeLog
