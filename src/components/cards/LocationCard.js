import React from "react";
import {Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function LocationCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          Polling Locations: {props.location.pollingHours}
        </Collapse>
      </Card>
    </Box>
  );
}