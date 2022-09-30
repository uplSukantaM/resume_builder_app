import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'native-base';
import FastImage from 'react-native-fast-image';
import { useForProfile } from '../../Container/HomeScreen/Menu/hooks';
export default function PasswordField(props) {
  const [flipIcon, setFlipIcon] = useState(false);
  const { show, handleClick } = useForProfile();
  const handelIconClick = () => {
    handleClick();
    setFlipIcon(!flipIcon);
  }
  return (
    <View>
      <Input
        type={show ? 'text' : 'password'}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        onBlur={props.onBlur}
        error={props.error}
        // touched={props.touched}
        InputRightElement={
          <TouchableOpacity onPress={handelIconClick}>
                        <FastImage
                        source={! flipIcon ? require('../../Common/Assets/images/Frame.png') : require('../../Common/Assets/images/Frame_Flip.png')}
                        key={! flipIcon ? require('../../Common/Assets/images/Frame.png') : require('../../Common/Assets/images/Frame_Flip.png')}
                        style={styles.InputRightElement}
                        alt="icons"
                      />
          </TouchableOpacity>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  InputRightElement: {
    height: 21,
    width: 21,
    marginRight: '3.37%',
  },
});
