import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';

import {HomeScreen} from "./HomeScreen.tsx";
import {Bai1} from "./Bai1.tsx";
import {Bai2} from "./Bai2.tsx";
import {Bai3} from "./Bai3.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Bai1: undefined;
    Bai2: undefined;
    Bai3: undefined;
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />

                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        title: 'Lab 3',
                    }}/>
                    <Stack.Screen name="Bai1" component={Bai1} options={{
                        title: 'Bài 1',
                    }}/>
                    <Stack.Screen name="Bai2" component={Bai2} options={{
                        title: 'Bài 2',
                    }}/>
                    <Stack.Screen name="Bai3" component={Bai3} options={{
                        title: 'Bài 3',
                    }}/>
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

export default App;
