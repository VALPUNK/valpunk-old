import * as React from "react";
import Grid from "@material-ui/core/Grid";

const CenteredForStories = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container justify="center" alignItems="center">
      {children}
    </Grid>
  );
};

export default CenteredForStories;
