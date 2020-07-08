import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

export function SideMenu() {
  return (
    <Paper variant="outlined" className="side-menu-paper pt-4">
      <Container>
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h3>Collection Room</h3>
        </Grid>
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
        >
          <List component="nav" aria-label="contacts">
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Chelsea Otakan" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="Eric Hoffman" />
            </ListItem>
          </List>
        </Grid>
      </Container>
    </Paper>
  );
}

if (document.getElementById("side-menu")) {
  ReactDOM.render(<SideMenu />, document.getElementById("side-menu"));
}
