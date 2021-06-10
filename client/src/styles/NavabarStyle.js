import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 130px",
    backgroundColor: "#355174",
   
  },
  heading: {
    color: "white",
    textDecoration: "none",
    fontFamily: "McLaren",
    fontWeight: "medium",
    paddingLeft: "7px",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    padding: "8px"
  },
  logout: {
    paddingRight: "20px",
  },
}));
