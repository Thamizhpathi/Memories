import React from 'react';
import {Container,AppBar,Typography,Grow, Grid} from '@material-ui/core'
import Form from './components/Form/Form.jsx'
import Posts from './components/Posts/Posts.jsx'
import memories from './images/memories.png'

import useStyles from './style.js'
const App = ()=>{
    const classes = useStyles()
    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar}  position='static' color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Container>
                <Grid container justifyContent='space-between' alignItems='strech' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default App;