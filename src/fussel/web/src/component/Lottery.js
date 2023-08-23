import React, { Component } from 'react';
import "./Lottery.css";

import withRouter from './withRouter.js';

import txwj from '../images/txwj-QR.png';


class Lottery extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
      <div className="container">
        <section className="hero is-small">
          <div className="hero-body">
            扫一扫领取刮刮乐
            <img src={txwj} />
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Lottery)