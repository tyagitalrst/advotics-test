import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import CardItem from './card-item'
import { dummyBestTop } from '../../../../constants/dummy-data';
import Typography from '@material-ui/core/Typography';
import { THISMONTH } from '../../../../constants/index';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  moreIcon: {
    margin: -12
  },
  listItem: {
    padding: '0px',
  },

  cardHeading: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',

    '&>h3': {
      margin: 0,
      fontWeight: theme.typography.fontWeightRegular
    }

  },
  cardHeading2: {
    display: 'flex',
  },
}));

export default function BestTopCard(props) {
  const classes = useStyles();

  const category = () => {
    if(props.days ===  1) {
      return 1;
    } else if (props.days === 7){
      return 2;
    } else if (props.days === THISMONTH){
      return 3;
    } else if (props.days < THISMONTH) {
      return 4;
    } else if (props.days > THISMONTH) {
      return 5;
    }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeading}>
        <Typography variant="h3">{props.title}</Typography>
        <div className={classes.cardHeading2}>
          <IconButton aria-label="settings" className={classes.moreIcon} href="/">
            <MoreVertIcon style={{ color: '#757575' }}/>
          </IconButton>
        </div>
      </div>
      <CardContent>
        <List>
          {dummyBestTop.sort((a, b) => b.price * b.sold - a.price * a.sold).map((data, index) =>
            (
              data.category === category() ?
                <CardItem
                  key={index}
                  image={data.img}
                  title={data.item}
                  price={data.price}
                  sold={data.sold}
                  index={index} />
                : null
            )
          )}
        </List>
      </CardContent>
    </Card>
  );
}