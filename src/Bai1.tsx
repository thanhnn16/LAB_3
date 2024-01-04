import React, {ComponentType, FC} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, TextStyle,
    useColorScheme,
    View,
} from 'react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export const Bai1 = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Em vào đời bằng {''}
                <Text style={[styles.boldText, textColor('black')]}>vang đỏ</Text>, anh vào đời bằng {''}
                <Text style={[styles.boldText, textColor('yellow')]}> nước trà.</Text>
            </Text>

            <Text style={styles.baseText}>
                Bằng cơn mưa thơm {''}
                <Text style={[styles.italicText, textSize(20)]}>mùi đất</Text>
                {''}
                <Text style={[textSize(14)]}> và </Text>
                {''}
                <Text style={[styles.italicText, textSize(12)]}>bằng hoa dại mọc trước nhà</Text>
            </Text>

            <Text style={[
                styles.baseText,
                styles.boldText,
                styles.italicText,
                textColor('gray'),
            ]}>
                Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ </Text>

            <Text style={styles.baseText}>
                Lý trí em là {''}
                <Text style={styleText({
                    textDecorationLine: "underline",
                    letterSpacing: 20,
                    fontWeight: "bold",
                })}>
                    {''} công cụ {''}
                </Text>
                còn trái tim anh là {''}
                <Text style={styleText({
                    textDecorationLine: "underline",
                    letterSpacing: 20,
                    fontWeight: "bold",
                })}>
                    {''} động cơ {''}
                </Text>
            </Text>

            <Text style={[styles.baseText, styleText({textAlign: "right"})]}>
                Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
            </Text>

            <Text style={[
                styles.baseText,
                styleText({
                    fontWeight: "bold",
                    textAlign: "center",
                    color: 'orange',
                })
            ]}>
                Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
            </Text>

            <Text style={[
                styles.baseText,
                styleText({
                    fontWeight: "bold",
                    color: "black",
                })
            ]}>
                Em vào đời bằng <Text style={textColor('white')}> mây trắng </Text> em vào đời bằng
                <Text style={textColor('yellow')}> nắng xanh</Text>
            </Text>
            <Text style={[
                styles.baseText,
                styles.boldText,
                textColor('black')
            ]}>
                Em vào đời bằng <Text style={textColor('yellow')}> đại lộ </Text> và con đường đó giờ
                <Text style={textColor('white')}> vắng anh</Text>
            </Text>
        </View>
    )
}

const textSize = (size: number) => ({
    fontSize: size,
});

const textColor = (color: string) => ({
    color,
});

const styleText = (props: TextStyle) => ({
    ...props,
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f26147',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        fontFamily: 'Helvetica',
        color: 'white',
        fontSize: 16,
        marginTop: 8,
    },
    boldText: {
        fontWeight: "bold",
    },
    italicText: {
        fontStyle: "italic",
    },
});
