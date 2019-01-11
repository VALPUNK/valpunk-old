export default interface ChangeLogProps {
  featuredChanges: FeaturedChange[],
  changeLogList: ChangeListing[]
  roadMapList: ChangeListing[]
}

export interface FeaturedChange {
  title: string
  description: string
  images: string[]
}

export interface ChangeListing {
  type?: "bug" | "enhancement" | "newFeature" | "adjustment" | "misc" | ""
  log: string
  nestedLog?: ChangeListing[]
}
