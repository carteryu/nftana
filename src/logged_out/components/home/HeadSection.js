import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import StickyHeadTable from "./Table"
import NavTabs from "./Tabs"
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  //whole wrapper
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.lightGray.main,
    paddingBottom: theme.spacing(2),
    //backgroundColor: theme.palette.test.main,
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    backgroundColor: theme.palette.gray.main,
    boxShadow: theme.shadows[4],
    borderRadius: 5,
    // borderRadius: 15,
    // // paddingTop: 100,
    //  paddingBottom: 500,
    // marginTop: theme.spacing(6),
    //marginBottom: 500,
    // [theme.breakpoints.down("lg")]: {
    //   marginBottom: theme.spacing(9),
    // },
    // [theme.breakpoints.down("md")]: {
    //   marginBottom: theme.spacing(6),
    // },
    // [theme.breakpoints.down("md")]: {
    //   marginBottom: theme.spacing(3),
    // },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
    backgroundColor: theme.palette.test.main,
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    // <Fragment>
    //   {/* <div id="rectangle" width="1000px" height= "1000px" backgroundColor="#18191A"> </div> */}
    //    {/* <div className={classNames("lg-p-top", classes.wrapper)}>
    //    <div className={classNames("container-fluid", classes.container)}>
    //   </div>
    //   </div> */}
    // </Fragment>
    <Fragment>
      
      <div className={classNames("lg-p-top", classes.wrapper)}>
      
        <div className={classNames("container-fluid", classes.container)}>
        <Box display="flex" justifyContent="center" className="row" style={{padding:1}}>
          <NavTabs/>
        <StickyHeadTable></StickyHeadTable>
        </Box>
        </div>
      
      </div>

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
