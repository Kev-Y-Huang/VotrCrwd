import React from "react";
import {Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {FirebaseContext} from "../Firebase"

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
    var rEarth = Math.sin(6371); 
    var temp = Math.sin((lat2-lat1)*(Math.PI/180)/2)*Math.sin((lat2-lat1)*(Math.PI/180)/2) + 
    Math.cos(lat1*(Math.PI/180))*Math.cos(lat2*(Math.PI/180)) * 
    Math.sin((lon2-lon1)*(Math.PI/180)/2)*Math.sin((lon2-lon1)*(Math.PI/180)/2); 
    return rEarth*(Math.atan2(Math.sqrt(temp), Math.sqrt(1-temp))); 
  };  
  const personCounter = (lat, lon) => { 
    let counter = 0; 
    for (var key in props.firebase.locations()){ 
      if(haversine(key.latitude, key.longitude, lat, lon) < 2){ 
        counter ++; 
      } 
    } 
    return counter/50*100; 
  }

  return (
    <Card>
      <CardHeader
        title={props.location.type}
        subheader={props.location.startDate.concat(" to ", props.location.endDate)}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary">
          {props.location.address.line1}
          <br/>
          {props.location.address.city.concat(", ", props.location.address.state, " ", props.location.address.zip)}
          <br/>
          Capacity: {personCounter(props.location.latitude, props.location.longitude)}%
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ><ExpandMoreIcon/>

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        Polling Location Times:
        <br/><br/>
        {pollingHoursList}
        <br/>
      </Collapse>
    </Card>
  );
}