import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Authentication from './src/screens/Authentication/Authentication';
import styles from './src/styles/rootStyles';

export default function App() {
    return (
        <SafeAreaView style={styles.root}>
            <Authentication />
        </SafeAreaView>
    );
}