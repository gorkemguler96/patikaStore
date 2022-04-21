import React from 'react';
import { View, StyleSheet, Text, TextInput,Button } from "react-native";
import styles from './Searchbar.style'
import {useState} from "react";

function Searchbar(props) {

    const [text, setText] = useState(null);

    return (
        <View>
            <Text style={styles.patikastore}>PATIKASTORE</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Ara..."
            />
        </View>
    );
}

export default Searchbar;
