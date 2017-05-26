import React from 'react';
import { Link } from 'react-router-dom';

export default class Rooms extends React.Component {
  render() {
    return (
      <div>
        <h2>Rooms</h2>
        <ul>
          <li>
            <Link to="/Rooms/1">Room 1</Link>
          </li>
          <li>
            <Link to="/Rooms/2">Room 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}
