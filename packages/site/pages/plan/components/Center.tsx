import { Grid } from "@material-ui/core"

const Center = ({
  size,
  children
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  children: React.ReactNode
}) => (
  <Grid container>
    <Grid item xs />
    <Grid item xs={size}>
      {children}
    </Grid>
    <Grid item xs />
  </Grid>
)

export default Center
