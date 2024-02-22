import React, { useState } from 'react'
import '../styles/Upnext.css'
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemText } from '@mui/material';

function generate(element) {
  return [0, 1, 2,3,4,5,6,7,8,9].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Upnext = () => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);


  const Demo = styled('div')(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div className='upnext_main'>
<h3 className='upnext_title'>UP NEXT</h3>
<Demo className='list'>
  <div className="scroll_wrapper">
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
            </div>
          </Demo>
    </div>
  )
}

export default Upnext