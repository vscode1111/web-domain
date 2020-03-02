import { AppBar, Toolbar, Grid, Typography, IconButton } from "@material-ui/core";
import { Link } from "./Link";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from "./Menu";
import React from "react";

const linkStyle = {
  marginRight: 15
}

const logo = require('../images/logo.svg');

const styles = ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    // borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',

  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex',
    // [theme.breakpoints.down('sm')]: {
    //   display: 'flex',
    //   justifyContent: 'space-evenly',
    //   alignItems: 'center'
    // }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  productLogo: {
    display: 'inline-block',
    // borderLeft: `1px solid ${theme.palette.grey['A100']}`,
    marginLeft: 32,
    paddingLeft: 24,
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '1.5em'
    // }
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '0.8em'
    // }
  },
  iconContainer: {
    display: 'none',
    // [theme.breakpoints.down('sm')]: {
    //   display: 'block'
    // }
  },
  iconButton: {
    float: 'right'
  },
  tabContainer: {
    marginLeft: 32,
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none'
    // }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  }
})

interface IProps {
  currentPath?: string;
  location?: Location;
};

interface IState {
  value: string;
};

export class Header extends React.Component<IProps, IState> {
  public readonly state: IState = {
    value: 'test'
  };

  current = () => {
    if (this.props.currentPath === '/home') {
      return 0
    }
    if (this.props.currentPath === '/dashboard') {
      return 1
    }
    if (this.props.currentPath === '/signup') {
      return 2
    }
    if (this.props.currentPath === '/wizard') {
      return 3
    }
    if (this.props.currentPath === '/cards') {
      return 4
    }
  }

  render() {
    return (
      <AppBar position="absolute" color="default" >
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} style={styles.flex}>
              <div style={styles.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link href='/'>
                    <img width={20} src={logo} alt="" />
                    <span style={styles.tagline}>Material Sense</span>
                  </Link>
                </Typography>
              </div>
              <div style={styles.productLogo}>
                <Typography>
                  A material UI Template
                </Typography>
              </div>
              <div style={styles.iconContainer}>
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </div>
              <div style={styles.tabContainer}>
                {/* <SwipeableDrawer anchor="right" onOpen={() => { }} onClose={() => { }} open={true}>
                  <AppBar title="Menu" />
                  <List>
                    {Menu.map((item) => (
                      <ListItem button key={item.label}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </SwipeableDrawer> */}
                <Tabs
                  value={this.current() || this.state.value}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  {Menu.map((item, index) => (
                    <Tab key={index} component={Link} href={item.pathname} style={styles.tabItem } label={item.label} />
                  ))}
                </Tabs>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

