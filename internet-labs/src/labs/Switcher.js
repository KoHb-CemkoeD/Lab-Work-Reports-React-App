import React from 'react';
import LR_1 from './LR_1/LR_1'
import LR_2 from './LR_2/LR_2'
import LR_3 from './LR_3/LR_3'
import LR_4 from './LR_4/LR_4'
import LR_5 from './LR_5/LR_5'
import LR_6 from './LR_6/LR_6'
import LR_7 from './LR_7/LR_7'
import LR_8 from './LR_8/LR_8'
import LR_9 from './LR_9/LR_9'
import LR_10 from './LR_10/LR_10'
import MODULE_1 from './MODULE_1/MODULE_1'

function LabSwitcher (props){
  switch(props.number){
    case 1: return <LR_1></LR_1>
    case 2: return <LR_2></LR_2>
    case 3: return <LR_3></LR_3>
    case 4: return <LR_4></LR_4>
    case 5: return <LR_5></LR_5>
    case 6: return <LR_6></LR_6>
    case 7: return <LR_7></LR_7>
    case 8: return <LR_8></LR_8>
    case 9: return <LR_9></LR_9>
    case 10: return <LR_10></LR_10>
    case 11: return <MODULE_1></MODULE_1>
    default: return (<div>Еще не готово!</div>)
  }
}

export default LabSwitcher;
