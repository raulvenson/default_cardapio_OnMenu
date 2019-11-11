import React from "react";
import {Link} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import Grid from '@material-ui/core/Grid';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
// import CardBody from "../Card/CardBody.js";
// import CardFooter from "../Card/CardFooter.js";

import styles from "./teamStyle.js";

import team1 from "../../assets/img_cardapio/sobre_button.png";
import team2 from "../../assets/img_cardapio/menu_button.png";
import capaMobile from "../../assets/capa_mobile.png";
import capaDesktop from "../../assets/capa_desktop.png";
// import Whats_qld from '../../assets/img_cardapio/whats_.png';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  return (
    <div className="home">
       <GridContainer justify="space-around" className="cardapio">
         <a href="https://home-onmenu.firebaseapp.com/"> 
          <picture>
            <source media= '(max-width: 480px)' srcSet={capaMobile} />
            <img src={capaDesktop} alt="capa" className="img-parque"/>
          </picture>
        </a>
      </GridContainer>
    <div className={classes.section}>
     
      <div>
        <GridContainer justify="space-around">
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>            
              <GridItem xs={12} sm={6} md={6} className={classes.itemGrid}>
                <Link to="/sobre" style={{ textDecoration: 'none' }}>
                  <img src={team1} alt="..." className={imageClasses}/>
                </Link>
              </GridItem>            
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={6} md={6} className={classes.itemGrid}>
                <Link to="/cardapio" style={{ textDecoration: 'none' }}>
                  <img src={team2} alt="..." className={imageClasses}  />
                </Link>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
        {/* <Grid container justify={"center"} className="footer">
        <a href="https://api.whatsapp.com/send?phone=5565998023257&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" >
          <img className="wpp" src={Whats_qld} alt="link para chat WhatsApp" />
        </a> 
      </Grid> */}
      </div>
    </div>
    </div>
  );
}
