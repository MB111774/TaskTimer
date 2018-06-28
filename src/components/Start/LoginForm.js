import React from 'react';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  CheckBox,
  Body,
  ListItem,
  Container,
} from 'native-base';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    rememberMe: true,
    email: '',
    password: '',
  };

  handleCheck = () => {
    const { rememberMe } = this.state;
    const currentState = rememberMe;
    this.setState({
      rememberMe: !currentState,
    });
  };

  render() {
    const { login } = this.props;
    const { email, password, rememberMe } = this.state;
    return (
      <Container
      // style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-around',
      // }}
      >
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input value={email} onChangeText={text => this.setState({ email: text })} />
          </Item>
          <Item floatingLabel>
            <Label>Hasło</Label>
            <Input value={password} onChangeText={text => this.setState({ password: text })} />
          </Item>
          <ListItem>
            <CheckBox checked={rememberMe} onPress={this.handleCheck} />
            <Body>
              <Text>Zapamiętaj mnie</Text>
            </Body>
          </ListItem>
          <Button
            style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
            primary
            disabled={(email && password) === ''}
            onPress={login}
          >
            <Text>Zaloguj</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
export default LoginForm;
