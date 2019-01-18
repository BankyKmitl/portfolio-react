import React, { Component } from 'react';
import './Footer.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Footer as BulmaFooter} from 'react-bulma-components';

class Footer extends Component {
    render() {
      return  <div className="Footer">
        <div></div>
        <BulmaFooter>
            <p>
            This is footer
            </p>
        </BulmaFooter>
        <div></div>
      </div>
  
    }
  }
  
  export default Footer