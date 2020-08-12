import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { selectDirectorySections } from '../../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menuItem';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...auxSection }) => (
        <MenuItem key={id} {...auxSection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
