//Screen de AccountScreen solo texto

import React from "react";
import { View, Text } from "react-native";
import styles from "./AccountScreen.style";

const AccountScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Account Screen</Text>
        </View>
    );
    }

export default AccountScreen