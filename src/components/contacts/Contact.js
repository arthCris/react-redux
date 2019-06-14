import React, { Component } from 'react'

import {makeStyles} from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Home from '@material-ui/icons/Home';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        width: '50%',
        maxWidth: 360,
        backgroundColor: "gray",
    }
  });

  const Class = () => {
        return useStyles();
    }

export class Contact extends Component {
    render() {
        const { name, email, phone } = this.props.contact;
        
        return (

            <List style={Class.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Home/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {email}
                        </Typography>
                        {phone}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                
            </List>
        )
    }
}

export default Contact
