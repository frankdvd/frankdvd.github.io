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
            <p>微信中长按二维码, 前往小程序, 完成问卷后在迎宾区领取中奖卡。</p>
            <br></br>
            <p>记得和我们分享幸运呀！</p>
            <br></br>
            <p>最好一家一半 ^_^!</p>
            <br></br>
            <img src={txwj} />
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Lottery)