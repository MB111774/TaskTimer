import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button } from 'native-base';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Title from './Title';
import ChangeFormLink from './ChangeFormLink';

const Start = ({ navigation, currentForm, changeForm }) => {
  const login = () => {
    // Tutaj akcja z reduxa, if ok to navigate
    navigation.navigate('Home');
  };

  const register = () => {
    // Tutaj akcja z reduxa, if ok to navigate
    // const { navigation } = this.props;
    // navigation.navigate('Home');
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Content>
        <Title currentForm={currentForm} />
        {currentForm === 'login' && <LoginForm login={login} />}
        {currentForm === 'register' && <RegisterForm register={register} />}
        <ChangeFormLink currentForm={currentForm} changeForm={changeForm} />
      </Content>
    </Container>
  );
};

// class Start extends React.Component {
//   login = () => {
//     // Tutaj akcja z reduxa, if ok to navigate
//     const { navigation } = this.props;
//     navigation.navigate('Home');
//   };

//   register = () => {
//     // Tutaj akcja z reduxa, if ok to navigate
//     // const { navigation } = this.props;
//     // navigation.navigate('Home');
//   };

//   render() {
//     const { currentForm, changeForm } = this.props;
//     return (
//       <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <Content>
//           <Title currentForm={currentForm} />
//           {currentForm === 'login' && <LoginForm login={this.login} />}
//           {currentForm === 'register' && <RegisterForm register={this.register} />}
//           <ChangeFormLink currentForm={currentForm} changeForm={changeForm} />
//         </Content>
//       </Container>
//     );
//   }
// }

Start.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  currentForm: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default Start;
