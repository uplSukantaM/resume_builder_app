import React from 'react';
import { View, Text } from 'react-native';
import {
	Box,
	Divider,
	NativeBaseProvider,
	Button,
	Input,
	VStack,
	FormControl,
	Radio,
} from 'native-base';

export default function TextField(props) {
	return (
		<View style={props.style}>
			<Input
				placeholderTextColor={props.placeholderTextColor}
				size={props.size}
				selectionColor={'blue'}
				variant={props?.variant}
				maxLength={props.maxLength}
				type={props.type}
				placeholder={props.placeholder}
				onChangeText={props.onChangeText}
				handleBlur={props.handleBlur}
				value={props.value}
				keyboardType={props.keyboardType}
				textContentType={props.textContentType}
				autoCapitalize={props.autoCapitalize}
				autoCompleteType={props.autoCompleteType}
				height={props.height}
				px={props.px}
				isDisabled={props.isDisabled}
				InputLeftElement={props.InputLeftElement}
				InputRightElement={props.InputRightElement}
				style={props.styleInput}
				_focus={props._focus}
			/>
		</View>
	);
}
