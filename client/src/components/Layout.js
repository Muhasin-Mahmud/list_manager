import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Navbar from './Navbar'
import Greeting from "./Greeting";
import CreateListDialog from "./CreateListDialog";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      padding: theme.spacing(3),
      alignItems: "center",
      textAlign: "center",
    },
    root: {
      // display: "flex",
    },
    welcome: {
      padding: theme.spacing(2),
    },
    appbar: {
        width:`calc (100% - ${drawerWidth}px)`
    }
  };
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app bar */}
      <Navbar className= {classes.appbar}/>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h6">
            {/* after sing in ==> */}
            Welcome to Marshal!
          </Typography>

          <Greeting />
          <CreateListDialog />
        </div>
      </Drawer>
      {/* <div>{children}</div> */}
    </div>
  );
}
