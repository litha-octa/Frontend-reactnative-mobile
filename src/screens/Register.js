/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {Form, Item, Input, Label, Button, Icon} from 'native-base';
import CustomModal from '../components/CustomModal';
import {register} from '../redux/actions/auth';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';

function Register({...props}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });

  const errorStyle = {
    borderColor: '#EB4335',
    color: '#EB4335',
  };
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });
  const [inputValidation, setInputValidation] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    repassword: undefined,
  });

  const [zIndexInput, setZIndexInput] = useState({
    name: 1,
    email: 1,
    password: 1,
    repassword: 1,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [componentWidth, setComponentWidth] = useState(
    Dimensions.get('window').width - 64,
  );

  useEffect(() => {
    const updateLayout = () => {
      setComponentWidth(Dimensions.get('window').width - 64);
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  // =============================VALIDATION SECTION============================= //
  // name : min. length = 5
  const nameValidation = () => {
    if (dataRegister.name === '') {
      setInputValidation({...inputValidation, name: false});
      setErrorMessage({...errorMessage, name: "This field can't be empty"});
    } else if (dataRegister.name.length < 5) {
      setInputValidation({...inputValidation, name: false});
      setErrorMessage({
        ...errorMessage,
        name: 'name must be at least 5 characters',
      });
    } else {
      setInputValidation({...inputValidation, name: true});
    }
  };

  // e-mails must be in the format x@x.x
  const isValidEmailAddress = address => {
    return !!address.match(/^[^\s@]+@[^\s@.]+\.[^\s@]+$/);
  };
  const emailValidation = () => {
    if (dataRegister.email === '') {
      setInputValidation({...inputValidation, email: false});
      setErrorMessage({...errorMessage, email: "This field can't be empty"});
    } else if (!isValidEmailAddress(dataRegister.email)) {
      setInputValidation({...inputValidation, email: false});
      setErrorMessage({...errorMessage, email: 'Please enter a valid email'});
    } else {
      setInputValidation({...inputValidation, email: true});
    }
  };

  // password : min. length = 8
  const passwordValidation = () => {
    if (dataRegister.password === '') {
      setInputValidation({...inputValidation, password: false});
      setErrorMessage({...errorMessage, password: "This field can't be empty"});
    } else if (dataRegister.password.length < 8) {
      setInputValidation({...inputValidation, password: false});
      setErrorMessage({
        ...errorMessage,
        password: 'Password must be at least 8 characters',
      });
    } else {
      setInputValidation({...inputValidation, password: true});
    }
  };
  //re-password: must be the same as the previous one
  const rePasswordValidation = () => {
    if (dataRegister.repassword === '') {
      setInputValidation({...inputValidation, repassword: false});
      setErrorMessage({
        ...errorMessage,
        repassword: "This field can't be empty",
      });
    } else if (dataRegister.repassword.length < 8) {
      setInputValidation({...inputValidation, repassword: false});
      setErrorMessage({
        ...errorMessage,
        repassword: 'Password must be at least 8 characters',
      });
    } else if (dataRegister.repassword !== dataRegister.password) {
      setInputValidation({...inputValidation, repassword: false});
      setErrorMessage({
        ...errorMessage,
        repassword: "Password don't match",
      });
    } else {
      setInputValidation({...inputValidation, repassword: true});
      setErrorMessage({
        ...errorMessage,
        repassword: 'Password  match',
      });
    }
  };
  // =============================END VALIDATION SECTION============================= //

  const registerHandler = e => {
    e.preventDefault();
    const data = {
      name: dataRegister.name,
      email: dataRegister.email,
      password: dataRegister.password,
    };
    console.log(data);
    props.register(`${DOMAIN_API}:${PORT_API}/api/v1/auth/regis/`, data);
  };
  useEffect(() => {
    if (
      inputValidation.name &&
      inputValidation.email &&
      inputValidation.password &&
      inputValidation.repassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputValidation]);

  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (props.auth.isRegisterPending) {
        console.log('Loading...');
      } else if (props.auth.isRegisterFulfilled) {
        console.log('sukses');
        setModalVisible(true);
      } else if (props.auth.isRegisterRejected) {
        console.log(props.auth.errorRegister);
      }
    }
  }, [
    props.auth.isRegisterPending,
    props.auth.isRegisterFulfilled,
    props.auth.isRegisterRejected,
  ]);
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={{...styles.title}}>Register</Text>
          <View style={{...styles.formContainer, width: componentWidth}}>
            <Form>
              <Item floatingLabel style={[styles.formItem]}>
                <Label
                  style={{
                    ...styles.formLabel,
                    color:
                      inputValidation.name === false
                        ? errorStyle.color
                        : '#ADA9BB',
                  }}>
                  name
                </Label>
                <Input
                  style={{
                    ...styles.formInput,
                    zIndex: zIndexInput.name,
                    borderColor:
                      inputValidation.name === false
                        ? errorStyle.borderColor
                        : '#ADA9BB',
                  }}
                  value={dataRegister.name}
                  onChangeText={text => {
                    setDataRegister({...dataRegister, name: text});
                  }}
                  onPressIn={() => {
                    setZIndexInput({...zIndexInput, name: -1});
                    setInputValidation({
                      ...inputValidation,
                      name: undefined,
                    });
                    setErrorMessage({...errorMessage, name: ''});
                  }}
                  onBlur={() => {
                    setZIndexInput({
                      ...zIndexInput,
                      name: dataRegister.name ? -1 : 1,
                    });
                    nameValidation();
                  }}
                  disableFullscreenUI={true}
                />
              </Item>
              <Text
                style={{
                  ...styles.errorMessage,
                  marginBottom: errorMessage.name ? 5 : -5,
                }}>
                {errorMessage.name}
              </Text>

              <Item floatingLabel style={styles.formItem}>
                <Label
                  style={{
                    ...styles.formLabel,
                    color:
                      inputValidation.email === false
                        ? errorStyle.color
                        : '#ADA9BB',
                  }}>
                  Email
                </Label>
                <Input
                  style={{
                    ...styles.formInput,
                    zIndex: zIndexInput.email,
                    borderColor:
                      inputValidation.email === false
                        ? errorStyle.borderColor
                        : '#ADA9BB',
                  }}
                  keyboardType="email-address"
                  value={dataRegister.email}
                  onChangeText={text => {
                    setDataRegister({...dataRegister, email: text});
                  }}
                  onPressIn={() => {
                    setZIndexInput({...zIndexInput, email: -1});

                    setInputValidation({
                      ...inputValidation,
                      email: undefined,
                    });
                    setErrorMessage({...errorMessage, email: ''});
                  }}
                  onBlur={() => {
                    setZIndexInput({
                      ...zIndexInput,
                      email: dataRegister.email ? -1 : 1,
                    });
                    emailValidation();
                  }}
                  disableFullscreenUI={true}
                />
              </Item>
              <Text
                style={{
                  ...styles.errorMessage,
                  marginBottom: errorMessage.email ? 5 : -5,
                }}>
                {errorMessage.email}
              </Text>

              <Item floatingLabel style={styles.formItem}>
                <Label
                  style={{
                    ...styles.formLabel,
                    color:
                      inputValidation.password === false
                        ? errorStyle.color
                        : '#ADA9BB',
                  }}>
                  Password
                </Label>
                <Input
                  secureTextEntry={!showPassword ? true : false}
                  style={{
                    ...styles.formInput,
                    paddingRight: 45,
                    zIndex: zIndexInput.password,
                    borderColor:
                      inputValidation.password === false
                        ? errorStyle.borderColor
                        : '#ADA9BB',
                  }}
                  keyboardType={showPassword ? 'visible-password' : null}
                  value={dataRegister.password}
                  onChangeText={text => {
                    setDataRegister({...dataRegister, password: text});
                  }}
                  onPressIn={() => {
                    setZIndexInput({...zIndexInput, password: -1});

                    setInputValidation({
                      ...inputValidation,
                      password: undefined,
                    });
                    setErrorMessage({...errorMessage, password: ''});
                  }}
                  onBlur={() => {
                    setZIndexInput({
                      ...zIndexInput,
                      password: dataRegister.password ? -1 : 1,
                    });

                    passwordValidation();
                  }}
                  disableFullscreenUI={true}
                />
                <Icon
                  name={!showPassword ? 'eye' : 'eye-off'}
                  style={styles.eyeToggler}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </Item>
              <Text
                style={{
                  ...styles.errorMessage,
                  marginBottom: errorMessage.password ? 5 : -5,
                }}>
                {errorMessage.password}
              </Text>

              <Item floatingLabel style={styles.formItem}>
                <Label
                  style={{
                    ...styles.formLabel,
                    color:
                      inputValidation.repassword === false
                        ? errorStyle.color
                        : '#ADA9BB',
                  }}>
                  Confirm Password
                </Label>
                <Input
                  secureTextEntry={!showConfirmPassword ? true : false}
                  style={{
                    ...styles.formInput,
                    paddingRight: 45,
                    zIndex: zIndexInput.repassword,
                    borderColor:
                      inputValidation.repassword === false
                        ? errorStyle.borderColor
                        : '#ADA9BB',
                  }}
                  keyboardType={showConfirmPassword ? 'visible-password' : null}
                  value={dataRegister.repassword}
                  onChangeText={text => {
                    setDataRegister({...dataRegister, repassword: text});
                  }}
                  onPressIn={() => {
                    setZIndexInput({...zIndexInput, repassword: -1});
                    setInputValidation({
                      ...inputValidation,
                      repassword: undefined,
                    });
                    setErrorMessage({...errorMessage, repassword: ''});
                  }}
                  onBlur={() => {
                    setZIndexInput({
                      ...zIndexInput,
                      repassword: dataRegister.repassword ? -1 : 1,
                    });
                    rePasswordValidation();
                  }}
                  disableFullscreenUI={true}
                />
                <Icon
                  name={!showConfirmPassword ? 'eye' : 'eye-off'}
                  style={styles.eyeToggler}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </Item>
              <Text
                style={{
                  ...styles.errorMessage,
                  color:
                    inputValidation.repassword === true
                      ? '#0EAA00'
                      : errorStyle.color,
                  marginBottom: errorMessage.password ? 5 : -5,
                }}>
                {errorMessage.repassword}
                {inputValidation.repassword === true ? (
                  <Icon
                    name="checkmark-circle"
                    style={{fontSize: 14, color: '#0EAA00'}}
                  />
                ) : null}
              </Text>
            </Form>
          </View>
          <View style={styles.btnGroup}>
            <Button
              disabled={isDisabled}
              style={{
                ...styles.buttonLogin,
                width: componentWidth,
                opacity: isDisabled ? 0.7 : 1,
              }}
              onPress={registerHandler}>
              <Text style={styles.buttonLabel}>Register</Text>
            </Button>
            <Button style={{...styles.buttonGoogle, width: componentWidth}}>
              <Image source={require('../assets/images/logogoogle.png')} />
              <Text style={styles.buttonLabelGoogle}>Register with Google</Text>
            </Button>
          </View>

          <View style={styles.txtFooter}>
            <Text style={styles.txtNewUser}>Already have account?</Text>
            <Text
              style={styles.txtRegister}
              onPress={() => props.navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      {modalVisible ? (
        <CustomModal
          iconStyle="success"
          modalVisible={modalVisible}
          title="Yeay"
          msg="Your account has been successfully registered. Login now and start learning!"
          btnLabel="Login Now"
          onAction={() => props.navigation.navigate('Login')}
        />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height:
      Dimensions.get('window').height < 700
        ? StatusBar.currentHeight + 700
        : StatusBar.currentHeight + Dimensions.get('window').height,
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Kanit-Medium',
  },
  formContainer: {
    justifyContent: 'center',
  },
  formInput: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
    paddingLeft: 16,
    fontFamily: 'Roboto-Regular',
    color: '#010620',
    height: 55,
    paddingRight: 16,
  },
  formItem: {
    marginTop: 0,
    borderBottomWidth: 0,
    marginLeft: 0,
  },
  formLabel: {
    backgroundColor: '#F9F9F9',
    marginLeft: 16,
    fontFamily: 'Kanit-Regular',
    // color: '#ADA9BB',
    fontSize: 16,
    position: 'absolute',
  },
  eyeToggler: {
    position: 'absolute',
    right: 10,
    top: 17,
    marginLeft: 12,
  },

  btnGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLogin: {
    justifyContent: 'center',
    marginTop: 60,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5784BA',
    height: 50,
  },

  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Kanit-Medium',
  },
  buttonGoogle: {
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    height: 50,
  },

  buttonLabelGoogle: {
    color: '#010620',
    fontSize: 16,
    fontFamily: 'Kanit-Medium',
    marginLeft: 12,
  },
  txtFooter: {
    flexDirection: 'row',
  },
  txtNewUser: {color: '#ADA9BB', fontFamily: 'Kanit-Medium', fontSize: 16},
  txtRegister: {
    fontFamily: 'Kanit-Medium',
    marginLeft: 5,
    color: '#5784BA',
    fontSize: 16,
  },
  errorMessage: {
    paddingLeft: 5,
    marginTop: 10,
    color: '#EB4335',
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  register: (url, data) => {
    dispatch(register(url, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
