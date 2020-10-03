import React from "react";
import {Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton} from "@material-ui/core";
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

  return (
    <Box m={4}>
      <Card>
        <CardHeader
          title={props.location.type}
          subheader={props.location.startDate.concat(" to ", props.location.endDate)}
        />
        <CardContent>
          {props.location.address.line1}
          <br/>
          {props.location.address.city.concat(", ", props.location.address.state, " ", props.location.address.zip)}
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
          Polling Locations:
          <br/><br/>
          {pollingHoursList}
          <br/>
        </Collapse>

      </Card>
    </Box>
  );
}