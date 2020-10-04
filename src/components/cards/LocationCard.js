import React from "react";
import {Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function LocationCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const pollingHoursString = props.location.pollingHours.replace(/(\r\n|\n|\r)/gm, "newRegexSeparator");
  const pollingHoursArray = pollingHoursString.split("newRegexSeparator");
  const pollingHoursList = pollingHoursArray.map((time, index) =>
    <li key={index}>{time}</li>
  );

  const haversine = (lat1, lon1, lat2, lon2) => {
    var R = 6371;
    var dLat = getRadians(lat2-lat1);
    var dLon = getRadians(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(getRadians(lat1)) * Math.cos(getRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var dist = R * c;
    return dist;
  }

  function getRadians(deg) {
    return deg * (Math.PI/180)
  }

  const personCounter = (lat, lon) => {
    let counter = 0;
    props.firebase.locations().once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log(haversine(childData.latitude, childData.longitude, lat, lon))
        if (haversine(childData.latitude, childData.longitude, lat, lon) < 2) {
          counter++;
        }
      });
    });
    return counter / 50 * 100;
  };

  return (
    <Box m={3}>
      <Card>
        <CardHeader
          title={props.location.address.line1.concat(", ", props.location.address.city, ", ", props.location.address.state)}
          subheader={props.location.startDate.concat(" to ", props.location.endDate)}
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary">
            Capacity: {personCounter(props.location.latitude, props.location.longitude)}%
            <br/>
            {props.location.notes && "Notes: " + props.location.notes}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          Polling Location Times:
          <br/><br/>
          {pollingHoursList}
          <br/>
        </Collapse>
      </Card>
    </Box>
  );
}