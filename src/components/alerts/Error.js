import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

export default function Error({ error }) {
    return <Text style={styles.errorText}>{error}</Text>
}

const styles = StyleSheet.create({
    errorText: {
        paddingBottom: 10,
        flexWrap: 'wrap',
        color: colors.danger
    }
});