import React from 'react';
import { SafeAreaView } from 'react-native';
import Authentication from './src/screens/Authentication/Authentication';
import { globalStyles } from './src/styles/globalStyles';

export default function App() {
    return (
        <SafeAreaView style={globalStyles.root}>
            <Authentication />
        </SafeAreaView>
    );
}