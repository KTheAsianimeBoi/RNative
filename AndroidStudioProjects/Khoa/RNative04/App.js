/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import DemoImage from './src/Components/DemoImage';
// import Stateful from './src/Component/stateful';
// import StateLess from './src/Component/Stateless';
// import DemoImage from './src/Component/DemoImage';
// import DemoInput from './src/Component/DemoTextInput';
import UI from './src/Components/UI';
import BindingData from './src/HolderComponent/BindingData';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull />
        <StateLess /> */}
      {/* <DemoImage /> */}
      <BindingData />
    </Fragment>
  );
};

export default App;
