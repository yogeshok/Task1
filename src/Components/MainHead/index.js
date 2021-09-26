import React from 'react';
//images
import ARROW from '../../images/arrow_back.png';

// import styles from './MainHead.css';
import { Wrapper } from '../MainHead/MainHead.styles';

const MainHead = (props) => (

    <Wrapper>
        {/* <img className='background' src={COMP} alt='Main Image' /> */}
        <div>
        <a href="#" className='arrow'>
          <img src={ARROW} alt="arrow" />
        </a>
        <div href="" className='joinBtn'>
          <p className='joinBtnDesc' onClick={props.click}>
            Join Group
          </p>
        </div>
      </div>
      <p className='title'>Computer Engineering</p>
      <p className='description'>142,765 Computer Engineers follow this</p>
    </Wrapper>

    // <Wrapper>
    //   <div className='head'>
    //     <a href="#" className='main-img'>
    //       <img src={COMPIMG} alt="arrow" />
    //     </a>
    //     <div href="" className='join-btn'>
    //       <p className='btn-join' onClick={props.click}>
    //         Join Group
    //       </p>
    //     </div>
    //   </div>
    //   <p className='heading'>Computer Engineering</p>
    //   <p className='sub-heading'>142,765 Computer Engineers follow this</p>
    // </div>

);

export default MainHead;