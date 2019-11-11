import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';

import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import Whats_qld from '../../assets/img_cardapio/whats_.png';


import '../cardapio/TheDogFather.css'

import inicio from '../../assets/img_cardapio/inicio.png'
import menu from '../../assets/img_cardapio/menu.png'
import about from '../../assets/img_cardapio/about.png'
import logotransp from '../../assets/img_cardapio/onmenutransp.png'


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
    backgroundColor: '#373435',
  },
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);


const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('  ');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="cardapio">
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={4} className="header" display="flex" alignItems="center" justifyContent="space-around" >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={inicio} alt="General Mex logo" height="70px"/>
            </Link>
          </Grid>
          <Grid  item xs={4} className="header">
            <img src={logotransp} alt="OnMenu Logo" height="80px" />
          </Grid>
          <Grid  item xs={4} className="header">         
            <Link to="/cardapio" style={{ textDecoration: 'none' }}>
              <img src={menu} alt="General Mex logo" height="70px"/>
            </Link>          
          </Grid>
        </Grid>
        
        
        
        
        {/* <div>
          <div className="cabecalho">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={inicio}  className="back-icon" alt="General Mex logo"/>
          </Link>      
          </div> 
          <div className="cabecalho">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={menu}  className="img-header" alt="General Mex logo"/>
          </Link>         
          </div>
        </div> */}
      </Paper>
     
      <div className="content">      
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>       
          <ExpansionPanelDetails className="details">
            <Grid container direction="row" justify="center" alignItems="center">
              <Typography>
                <Paper className={classes.root}>                
                  <img src={about} alt="sobre" className="img-parque"/>               
                </Paper>              
              </Typography>
            </Grid>
          </ExpansionPanelDetails>            
        </ExpansionPanel>        
      </div>
      <Grid container justify={"center"} className="footer">
        <a href="https://api.whatsapp.com/send?phone=5565998023257&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" >
          <img className="wpp" src={Whats_qld} alt="link para chat WhatsApp" />
        </a> 
      </Grid>
    
    </div>
  );
}