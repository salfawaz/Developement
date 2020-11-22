import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import "assets/css/style.css";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    
  const classes = useStyles();
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");

  const handleFixedClick = () => {
      console.log(fixedClasses);
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };

  return (
    <div>
    <div className={fixedClasses}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                253
                <br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Icon>person</Icon>
                <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>245<br></br><p className={classes.cardCategory}>Agra To Khajuraho Flights. 3334 , 28 Nov 2020</p></h3>
              
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>175<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>641<br></br><p className={classes.cardCategory}>Vadodara To Aurangabad Flights. 4349 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                351<br></br><p className={classes.cardCategory}>Delhi To Bengaluru Flights. 4396 , 30 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>361<br></br><p className={classes.cardCategory}>Lucknow To Aurangabad Flights. 4346 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>275<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                 <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>145<br></br><p className={classes.cardCategory}>Chennai To Aurangabad Flights. 3150 , 11 Dec 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                372<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>243<br></br><p className={classes.cardCategory}>Coimbatore To Aurangabad Flights. 4288 , 01 Dec 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>173<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>423<br></br><p className={classes.cardCategory}>Delhi To Mumbai FlightsLowest Fare Rs. 3746 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
    </div>

    <div className={fixedClasses === "dropdown" ? "dropdown show" : "dropdown"}>
        <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                372<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>243<br></br><p className={classes.cardCategory}>Coimbatore To Aurangabad Flights. 4288 , 01 Dec 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>173<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>423<br></br><p className={classes.cardCategory}>Delhi To Mumbai FlightsLowest Fare Rs. 3746 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    </div>
  );
}
