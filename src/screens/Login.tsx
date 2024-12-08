import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Image, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { LoginTitle, ThemeColor } from '../strings';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Modal from "react-native-modal";
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/types';
import Seperator from '../Utils/Seperator';

const Login = () => {

  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirm, setConfirm] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [langList, setLangList] = useState([
    { name: 'English', selected: true},
    { name: 'हिन्दी', selected: false},
    { name: 'मराठी', selected: false},
    { name: 'తెలుగు', selected: false}
  ])

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const signInWithPhoneNumber = async () => {
    navigation.navigate('MainScreen')

    // try {
    //   const confirmation = await auth().createUserWithEmailAndPassword(email, 'test123');
    //   if(confirmation?.additionalUserInfo?.isNewUser){
    //     setConfirm(confirmation)
    //   }
    //   console.log("Confirmation object:", confirmation);
    // } catch (error: any) {
    //   console.error("Error signing in with phone number:", error.message, typeof(error.message));
    //   if(error.message === "[auth/email-already-in-use] The email address is already in use by another account."){
    //     verifyUser(email, 'test123')
    //   }
    // }
  };

  const verifyUser = async (em: string, pas: string) => {
    navigation.navigate('MainScreen')
    // try {
    //   const confirmation = await auth().signInWithEmailAndPassword(em, pas);

    //   console.log("Confirmation object: Login", confirmation);
    // } catch (error: any) {
    //   console.error("Error signing in with phone number:", error.code, error.message);
    //   Alert.alert(
    //     "Error",
    //     error.message || "An unexpected error occurred. Please try again."
    //   );
    // }
  }
  
  const onLangSelect = (ind: number) => {
    const newList = langList.map((list, inde) => {
      if(inde === ind){
        return {...list, selected: !list.selected}
      } else {
        return {...list, selected: false}
      }
    })    
    setLangList(newList)
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
          <Image style={styles.banner} source={require('../../assets/images/loginBanner.webp')} />
          <TouchableOpacity style={styles.lan} onPress={() => setIsModalVisible(true)}>
            <Image style={styles.lanIcon} source={require('../../assets/images/language.png')}/>
          </TouchableOpacity>
      </View>
      <Text style={styles.loginTitle}>{LoginTitle}</Text>
      <Seperator label='Login or Signup' lineWidth='30%'/>
      {/* <TextInput value={email} onChangeText={txt => setEmail(txt)} placeholder='email' style={styles.mobileInput} />
      <TouchableOpacity onPress={() => signInWithPhoneNumber()} style={styles.loginButton}>
          <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity> */}
      {
        confirm === null ? 
        <View>
          <TextInput value={email} onChangeText={txt => setEmail(txt)} placeholder='email' style={styles.mobileInput} />
          <TouchableOpacity onPress={() => 
            signInWithPhoneNumber()
            } style={styles.loginButton}>
              <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
        : <View>
          <TextInput value={confirmEmail} onChangeText={txt => setConfirmEmail(txt)} placeholder='confirm email' style={styles.mobileInput} />
          <TextInput value={confirmPassword} onChangeText={txt => setConfirmPassword(txt)} placeholder='confirm password' style={styles.mobileInput} />

          <TouchableOpacity onPress={() => verifyUser(confirmEmail, confirmPassword)} style={styles.loginButton}>
              <Text style={styles.btnTxt}>Verify</Text>
          </TouchableOpacity>
        </View>
      }
      <Modal animationIn={'bounceInUp'} style={styles.modal} isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <FlatList data={langList} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => onLangSelect(index)} style={[styles.langItem, item.selected ? styles.selected : '']} key={index}>
                <View style={styles.lanRow}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {
                      item.selected ?<Image style={[styles.radio, {tintColor: ThemeColor}]} source={require('../../assets/images/ra1.png')}/>
                      : <Image style={styles.radio} source={require('../../assets/images/ra2.png')}/>
                    }
                    <Text style={{fontSize: 16, marginLeft: 7}}>{item.name}</Text>
                  </View>
                  {/* <Grayscale> */}
                    <Image source={require('../../assets/images/gifIcon.gif')} style={{height: 25, width: 25, opacity: item.selected ? 1 : 0.5}}/>
                  {/* </Grayscale> */}
                </View>
              </TouchableOpacity>
            )
          }}/>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  topView: {
      height: responsiveHeight(35),
  },
  lan: {
    position: 'absolute',
    top: 55,
    left: 25,
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  lanIcon: {
    width: '100%',
    height: '100%'
  },
  banner: {
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
  },
  loginTitle: {
      fontSize: responsiveFontSize(3),
      fontWeight: '800',
      color: '#000000',
      alignSelf: 'center',
      textAlign: 'center',
      width: '75%',
      marginTop: responsiveHeight(5)
  },
  mobileInput: {
      borderWidth: 1,
      borderRadius: 10,
      height: 50,
      borderColor: '#8e8e8e',
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
      paddingLeft: 10
  },
  loginButton: {
      backgroundColor: ThemeColor,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      height: 50,
      borderRadius: 10,
      marginTop: responsiveHeight(3)
  },
  btnTxt: {
      color: 'white',
      fontWeight: '600',
      fontSize: responsiveFontSize(2)
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#ffff',
    height: 300,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25
  },
  langItem: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'center',
    marginVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  selected: {
    borderColor: ThemeColor
  },
  lanRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radio: {
    width: 21,
    height: 21
  }
})

export default Login