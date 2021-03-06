import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const handleBug = () => {
  window.open('https://github.com/borismus/ontonight/issues/new', '_blank');
}

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <IconButton color="secondary" className="report-bug" onClick={handleBug}>
        <Icon>bug_report</Icon>
      </IconButton>
      {props.children}
    </div>
  );
}
