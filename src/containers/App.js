import React from 'react';
import { Provider } from 'react-redux';
import { Container, Header } from 'native-base';
import configureStore from '../store/configureStore';
import DrawerNavigator from '../navigation/navigation';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <DrawerNavigator />
        </Container>
      </Provider>
    );
  }
}

export default App;
