import React, {Component} from 'react';
//styles
import { Wrapper } from './Navbar.styles';
//image
import NAVBAR from '../../images/navbar.png';

const Navbar = (props) => (
    <Wrapper>
        <img 
            onClick={props.click}
            className={["nav-img img-fluid d-none d-md-block"].join(" ")}
            src={NAVBAR}
            alt="Navbar"
        />
    </Wrapper>

);

export default Navbar;