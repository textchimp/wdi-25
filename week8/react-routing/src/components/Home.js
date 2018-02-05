import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


  render() {

    const someStateID = 50;

    return (
      <div>
        <h2>This is the home page</h2>
        <ul>
          <li>Check out the <Link to="/faq">FAQ</Link> </li>
          <li>You are already <Link to="/">home</Link> </li>
          <li>What is this website for? This is answered in <Link to="/faq/23">FAQ #23</Link></li>

        <li>A link from state: <Link to={`/faq/${someStateID}`}>here</Link></li>

        </ul>
      </div>
    );
  }
}

export default Home;
