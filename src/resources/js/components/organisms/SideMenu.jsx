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
  Link,
} from "@material-ui/core";

export function SideMenu() {
  return (
    <Paper variant="outlined" className="side-menu-paper pt-4">
      <Container>
        <Grid container>
          <Link href="/">
            <h3>Collection Room</h3>
          </Link>
        </Grid>
        <Grid container justify="center">
          <List component="nav" aria-label="contacts">
            <Link href="/about">
              <ListItem button alignItems="center">
                <ListItemText inset primary="company" />
              </ListItem>
            </Link>
            <Link href="/product">
              <ListItem button>
                <ListItemText inset primary="product" />
              </ListItem>
            </Link>
            <Link href="/contact">
              <ListItem button>
                <ListItemText inset primary="contact" />
              </ListItem>
            </Link>
          </List>
        </Grid>
      </Container>
    </Paper>
  );
}

if (document.getElementById("side-menu")) {
  ReactDOM.render(<SideMenu />, document.getElementById("side-menu"));
}
