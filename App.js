import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import Store from './src/redux/store';

export default function App() {
    const [loaded] = useFonts({
        interExtraBold: require('./assets/fonts/Inter/Inter-ExtraBold.ttf'),
        interSemiBold: require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
        interMedium: require('./assets/fonts/Inter/Inter-Medium.ttf'),
        interRegular: require('./assets/fonts/Inter/Inter-Regular.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!loaded) {
        return null;
    }
    SplashScreen.hideAsync();

    return (
        <Provider store={Store}>
            <Navigation />
        </Provider>
    );
}
