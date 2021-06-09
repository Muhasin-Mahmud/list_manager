import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    height: "100%",
  },
  buttons: {
    position: "absolute",
    top: "20px",
    left: "400px",
    borderRadius: '50%'
  },
  lists: {
    position: "relative",
    display: "flex",
    paddingTop: "20px",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "550px",
    height: "100%",
    overflow: "scroll",
    overflowX: "hidden"
  },
  items: {
    position: "relative",
    display: "flex",
    paddingTop: "20px",
    flexDirection: "column",
    backgroundColor: "#f6f6f6",
    height: "100%",
    maxWidth: "550px",
    overflow: "scroll",
    overflowX: "hidden"
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

}));
