import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { Ionicons } from '@expo/vector-icons';

export default function CustomTextInput({ label = null, placeholder = null, value, setValue = () => { }, isSecure = false, type = 'default', required = false, height = 50 }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(isSecure);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>
                {label + (required == true ? ' *' : '')}
            </Text>}
            <View style={styles.inputView}>
                <TextInput
                    placeholder={placeholder ?? label}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    placeholderTextColor={colors.gray}
                    style={[styles.inputField, { height: height }]}
                    secureTextEntry={isPasswordVisible}
                    keyboardType={type}
                />
                {isSecure ? <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
                    <Ionicons name={isPasswordVisible ? "eye-outline" : "eye-off"} size={24} color={colors.gray} />
                </TouchableOpacity> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: '600',
        color: colors.secondary
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        flex: 1,
        borderRadius: 5,
        marginTop: 5,
        paddingStart: 10,
        borderWidth: 0.5,
        borderColor: colors.gray,
        color: colors.secondary
    },
    icon: {
        position: 'absolute',
        right: 10,
    }
});