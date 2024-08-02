import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";
import PhoneInput from 'react-native-international-phone-number';


export default function CustomPhoneInput({ label = null, placeholder, setValue, required = false, height = 50 }) {

    const [selectedCountry, setSelectedCountry] = useState('CD');
    const [inputValue, setInputValue] = useState('');

    function handleInputValue(phoneNumber) {
        setInputValue(phoneNumber);
        if (selectedCountry) {
            setValue(`${selectedCountry.callingCode}${phoneNumber}`)
        }
    }

    function handleSelectedCountry(country) {
        setSelectedCountry(country);
        if (selectedCountry) {
            setValue(`${selectedCountry.callingCode}${inputValue}`)
        }
    }

    return (
        <View style={styles.inputSection}>
            {label && <Text style={styles.label}>
                {label + (required == true ? ' *' : '')}
            </Text>}
            <PhoneInput
                phoneInputStyles={{
                    container: {
                        height: height,
                        borderWidth: 0.3,
                        borderColor: colors.gray,
                        borderRadius: 5,
                    }
                }}
                placeholder={placeholder}
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                language="fr"
                defaultCountry="CD"
                showOnly={['CD']}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputSection: {
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: '600',
        color: colors.secondary
    },
    inputField: {
        borderRadius: 5,
        marginTop: 5,
        paddingStart: 10,
        borderWidth: 0.3,
        borderColor: colors.gray,
        color: colors.white
    },
});