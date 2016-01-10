import React from 'react';

import Editor from '../components/editor';
import Text from '../components/text';

const App = React.createClass({
  render() {
    return (
      <div>
        <Text />
        <Editor />
      </div>
    )
  }
});

// const mapStateToProps = () => {

// }

// const mapDispatchToProps = () => {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
