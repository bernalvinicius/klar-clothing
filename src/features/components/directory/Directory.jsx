import React, { Component } from 'react';

import './styles.scss';
import sections from '../../../api/sections';
import MenuItem from '../menuItem';

export class Directory extends Component {
  state = {
    sections,
  };

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, ...auxSection }) => (
          <MenuItem key={id} {...auxSection} />
        ))}
      </div>
    );
  }
}

export default Directory;
