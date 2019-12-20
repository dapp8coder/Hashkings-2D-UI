import React, {useContext, useState, useEffect} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import {HashkingsAPI} from "../service/HashkingsAPI";
import {StateContext} from "../App";
import Delegate from "./Delegate";
import BuyGarden from "./BuyGarden";
import { Redirect } from 'react-router';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { GerminateIcon } from './Icons';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#000000",
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#294A0B",
  },
  paperBlue: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#154A4A",
  },
  paperExtended: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    backgroundColor: "#000000",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  card: {
    maxWidth: 345,
    backgroundColor: "#000000",
  },
  font: {
    fontFamily: '"Jua", sans-serif',
  },
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#000000",
    color: '#DFB17B',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#00211B' }, // custom color in hex 
  },
});

export const MarketPlots = () => {
  const hashkingsApi = new HashkingsAPI();
  const classes = useStyles();
  const {username} = useContext(StateContext);
  const [delegation, setDelegation] = useState({used: 0, available: 0});
  const [landSupply, setLandSupply] = useState();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (username) {
      Promise.all([
        hashkingsApi.getUserDelegation(username),
        hashkingsApi.getStats()
      ])
        .then(([delegation, stats]) => {
          if (delegation && delegation.delegator) {
            setDelegation({
              used: delegation.used,
              available: delegation.availible
            });
          }
          setLandSupply(stats.supply.land);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [username]);

  const updateDelegation = newDelegation => {
    setDelegation(newDelegation);
  };

  if (!username) {
    return (
    <Redirect to='/login'/>
    );
  }
  return (
    <Paper className={classes.paperExtended}> 
      <Paper className={classes.paperBlue}> 
      <ThemeProvider theme={theme}>
      <center>
      <Typography gutterBottom variant="h4" component="h1">
        <b><font color="#DFB17B" className={classes.font}><u>Leasing</u></font></b>
      </Typography>
      </center>
    </ThemeProvider>
    </Paper>
    <Paper className={classes.paperBlue}> 
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="error"><u>Delegate for a plot</u></Typography>
                      <em><a href="/market/seedbank">{"Get your farm plots here"}</a></em> <b>{"Each Plot requires a 20 STEEM Power delegation"}</b>
                    </React.Fragment>
                  }
                  placement="right"
                  TransitionComponent={Zoom}
                  >
    <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="delegation" className={classes.avatar}>
          <img src="https://media.giphy.com/media/26gsnOb6H9AiTNIli/giphy.gif" />
        </Avatar>
      }
    />
    <CardMedia
      className={classes.media}
      image="https://i.imgur.com/ZohrL4N.png"
      title="Mexico"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        <font color="DFB17B" className={classes.font}>
        Plot Delegation
        </font>
      </Typography>
    </CardContent>
    <hr/>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon 
        color="error"
        />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Delegate
              username={username}
              delegation={delegation}
              updateDelegation={updateDelegation}
            />
      <Divider variant="middle" />
      </CardContent>
    </Collapse>
  </Card>
  </HtmlTooltip>
  </Grid>

  <Grid item xs={4}>
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image="https://i.imgur.com/TLlmPMi.png"
      title="Hashkings"
    />
  </Card>
  </Grid>

  <Grid item xs={4}>
  <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="error" className={classes.font}><u>Leasing</u></Typography>
                      <em><a href="/market/seedbank">{"Claim your leased plots for 0.5 STEEM each."}</a></em><b>{" In order to claim your plots we require a small fee. Pay with STEEM below"}</b>
                    </React.Fragment>
                  }
                  placement="left"
                  TransitionComponent={Zoom}
                  >
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="leasing" className={classes.avatar}>
          <GerminateIcon />
        </Avatar>
      }
    />
    <CardMedia
      className={classes.media}
      image="https://i.imgur.com/aDDEpiF.png"
      title="Afghanistan"
    />
    <CardContent>
    <Typography variant="body2" color="textSecondary" component="p"><font color="DFB17B" className={classes.font}>
        Leasing</font>
      </Typography>
    </CardContent>
    <hr/>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon 
        color="error"
        />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
            {delegation.available > 0 && (
              <BuyGarden
                username={username}
                delegation={delegation}
                updateDelegation={updateDelegation}
                landSupply={landSupply}
              />
            )}
            {delegation.available === 0 && (
              <p>
                <font color="DFB17B" className={classes.font}>
                  <b>
                    All Fees Paid. Please delegate more Steem Power to lease a plot.
                  </b>
                </font>
              </p>
            )}
      <Divider variant="middle" />
      </CardContent>
    </Collapse>
  </Card>
  </HtmlTooltip>
  </Grid>
  </Grid>
  </Paper>
  </Paper>
  );
};
