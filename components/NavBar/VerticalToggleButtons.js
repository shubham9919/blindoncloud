import * as React from 'react';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Style from  '../../styles/VerticalToggleButtons.module.css'

function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="quilt" aria-label="quilt" className={Style.POC}>
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default VerticalToggleButtons
