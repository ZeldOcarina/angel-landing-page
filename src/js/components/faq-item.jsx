import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  heading: {
    fontFamily: "Quatro Slab, sans-serif",
    fontSize: theme.typography.pxToRem(35.2),
    fontWeight: theme.typography.fontWeightLight,
    color: "#525252",
    "@media (min-width: 1800px)": {
       fontSize: theme.typography.pxToRem(46)
    },
    "@media (max-width: 1200px)": {
      fontSize: theme.typography.pxToRem(30)
   },
  },
  text: {
    fontSize: theme.typography.pxToRem(28.8),
    color: "#525252",
    maxWidth: "95%",
    fontFamily: "Proxima Nova, serif",
    "@media (min-width: 1800px)": {
      fontSize: theme.typography.pxToRem(42),
   },
   "@media (max-width: 1200px)": {
      fontSize: theme.typography.pxToRem(26)
   },

    "& h5": {
      fontFamily: "Proxima Nova, serif",
      textAlign: "left",
      fontSize: theme.typography.pxToRem(25)
    },
  },
  icon: {
    fontSize: "30px",
  },
  closeIcon: {
    fontSize: "30px",
    position: "absolute",
    top: "50%",
    right: 16,
    "&:hover": {
      cursor: "pointer",
    }
  },
  accordionDetails: {
    "@media (max-width: 1366px)": {
      maxWidth: "90%",
    },
    "@media (max-width: 1194px)": {
      maxWidth: "80%",
    },
    "@media (max-width: 768px)": {
      maxWidth: "85%",
    },
    "@media (max-width: 428px)": {
      maxWidth: "80%",
    },
  },
}));

const Accordion = withStyles({
  root: {
    borderBottom: "1px solid #707070",
   //  borderTop: "1px solid #707070",
    padding: "2rem 0",
    backgroundColor: "transparent",
    boxShadow: "none",

    "&:not(:last-child)": {
      marginBottom: "0",
    },
    "&:first-child": {
      borderTop: "1px solid #707070",
    }
  },
})(MuiAccordion);

const faqItem = ({ question, answer, i }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  function handleAccordionChange(e, expanded) {
    setIsAccordionOpen(expanded);
    console.log(expanded);
  }
  function handleCloseIconClick() {
    setIsAccordionOpen(false);
  }

  const classes = useStyles();
  return (
    <Accordion
      key={i}
      onChange={handleAccordionChange}
      expanded={isAccordionOpen}
      TransitionProps={{
        addEndListener: (node, done) => {
          node.addEventListener("transitionend", () => {
            done();
          });
        },
      }}>
      <AccordionSummary
        expandIcon={
          isAccordionOpen ? (
            ""
          ) : (
            <AddIcon
              className={classes.icon}
              fontSize="inherit"
              htmlColor="#14A6CB"
            />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography
          className={classes.heading}
          dangerouslySetInnerHTML={{ __html: question }}></Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <Typography
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: answer }}></Typography>
        {isAccordionOpen && (
          <RemoveIcon
            htmlColor="#14A6CB"
            onClick={handleCloseIconClick}
            className={classes.closeIcon}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default faqItem;