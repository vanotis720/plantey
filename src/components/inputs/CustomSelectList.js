import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { colors } from "../../constants/colors";

export default function CustomSelectList({ label, setValue, data, placeholder = null, required = false, height = 50 }) {

    return (
        <View style={styles.inputSection}>
            {label && <Text style={styles.label}>
                {label + (required == true ? ' *' : '')}
            </Text>}
            <SelectList
                setSelected={(val) => setValue(val)}
                data={data}
                save='key'
                placeholder={placeholder}
                placeholderTextColor={colors.secondary}
                boxStyles={[styles.inputField, { height: height }]}
                inputStyles={{ color: colors.secondary }}
                dropdownTextStyles={{ color: colors.secondary }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputSection: {
        marginBottom: 15,
        justifyContent: 'center',
    },
    label: {
        textTransform: 'capitalize',
        fontSize: 12,
        fontWeight: '600',
        color: colors.secondary
    },
    inputField: {
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0,
        marginTop: 5,
        paddingStart: 10,
        borderWidth: 0.3,
        borderColor: colors.gray,
    },
});