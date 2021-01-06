import React, {Component} from 'react';
import './centertpwd.css';

class Index extends Component {
  render() {
    return (
        <div className="wxCenterTpwd">
          <div id="tpwd">
              {this.props.tpwd}
          </div>
        </div>
    );
  }
}

export default Index;