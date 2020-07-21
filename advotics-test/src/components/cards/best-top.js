import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import CardItem from './card-item'
import { dummyBestTop } from '../../constants/dummyData';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  moreIcon: {
    padding: '0 0 0 16px',
  },
  listItem: {
    padding: '0px',
  },
  
  cardHeading: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',

    '&>p': {
      fontSize: '1.25rem',
      margin: 0
    }

  },
  cardHeading2: {
    display: 'flex',
  },
}));

export default function BestTopCard(props) {
  const classes = useStyles();

  const category = '1';

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeading}>
        <p>{props.title}</p>
        <div className={classes.cardHeading2}>
          <IconButton aria-label="settings" className={classes.moreIcon}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <CardContent>
        <List>
          {dummyBestTop.sort((a, b) => b.price * b.sold - a.price * a.sold).map((data, index) =>
            (
              data.category === category ?
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