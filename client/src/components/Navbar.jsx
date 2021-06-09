import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/av.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  AppBar,
  Toolbar,
  Avatar,
  makeStyles,
  Typography,
  Badge,
  IconButton,
  Container,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "../styles/NavabarStyle";
import CreateListDialog from "./CreateListDialog";
import CreateItemDialog from "./CreateItemDialog";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [listDialogOpen, setListDialogOpen] = useState(false);
  const [itemDialogOpen, setItemDialogOpen] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth-user")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "CLEAR_ITEMS" });
    dispatch({ type: "CLEAR_LISTS" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("auth-user")));
  }, [location]);

  return (
    <>
      <AppBar elevation={0} className={classes.appBar} position="static">
        <div className={classes.brandContainer}>
          <img className={classes.image} src={logo} alt="logo" height="50" />
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h5"
          >
            Marshal
        </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div
              className="classes.profile"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box m={2}>
                <Button onClick={() => setListDialogOpen(true)} style={{ color: "white" }}>
                  Add list
              </Button>
                <Button onClick={() => setItemDialogOpen(true)} style={{ color: "white" }}>
                  Add Item
              </Button>
              </Box>

              <Avatar
                className="classes.purple"
                alt={user.result?.name}
                src={user.result?.imageUrl}
              >
                {user.result?.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result?.name}
              </Typography>
              <IconButton
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                <ExitToAppIcon fontSize="large" />
              </IconButton>
            </div>
          ) : (
            " "
          )}
        </Toolbar>
      </AppBar>
      <Grid item style={{ position: "sticky", marginBottom: " 10" }}>
        <CreateListDialog open={listDialogOpen} setOpen={setListDialogOpen} />
      </Grid>
      <Grid item>
        <CreateItemDialog open={itemDialogOpen} setOpen={setItemDialogOpen} />
      </Grid>
    </>
  );
};

export default Navbar;
