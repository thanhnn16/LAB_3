import {Button, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App.tsx";
import {ComponentType} from "react";


type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;
export const HomeScreen: ComponentType<HomeScreenProps> = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 32,
        }}>
            <Button title={'Bài 1'} onPress={() => navigation.navigate('Bai1')}/>
            <View style={{
                height: 6,
            }}></View>
            <Button title={'Bài 2'} onPress={() => navigation.navigate('Bai2')}/>
            <View style={{
                height: 6,
            }}></View>
            <Button title={'Bài 3'} onPress={() => navigation.navigate('Bai3')}/>
        </View>
    );
};
