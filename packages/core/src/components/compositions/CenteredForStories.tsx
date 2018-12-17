import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const CenteredForStories = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Paper style={{ padding: 16 }}>{children}</Paper>
    </Grid>
  );
};

export default CenteredForStories;
