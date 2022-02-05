import React,{Component} from "react";

import CodeAdam from './../components/CodeAdam';

import HomeHeader from './HomeHeader';
import Introduction from './Introduction';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeHeader></HomeHeader>
        
        <Introduction></Introduction>

        <CodeAdam></CodeAdam>

      </div>
    );
  }
}

export default Home;
