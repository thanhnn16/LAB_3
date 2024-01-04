import React, {useState} from 'react';
import {
    Alert,
    Button,
    Image,
    StyleSheet, Text,
    TextInput,
    View,
} from 'react-native';


export const Bai2 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [wish, setWish] = useState('');
    const [ok, setOk] = useState('');

    function validatePhone(phone: string) {
        if (phone.length == 10) {
            setPhone(phone);
            setOk('Bạn đã nhập đủ 10 số cho số đt.');
        } else {
            setPhone(phone);
            setOk('');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://nhuthuyxuandung.info.vn/images/gallery/webp/studio(4).webp'
            }} style={styles.containerImg}
            />

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder={'Nhập họ và tên'}
                maxLength={50}
                style={styles.textInput}
            />

            <TextInput
                value={phone}
                onChangeText={validatePhone}
                placeholder={'Nhập số điện thoại'}
                maxLength={10}
                keyboardType={"phone-pad"}
                style={styles.textInput}
            />
            {ok ? <Text style={{color: 'green', fontSize: 12}}>{ok}</Text> : null}
            <TextInput
                value={wish}
                onChangeText={setWish}
                placeholder={'Nhập lời chúc'}
                multiline={true}
                style={styles.textInput}
            />

            <Button title={'Gửi lời chúc!'} onPress={() => {
                if (!name || !phone || !wish) {
                    Alert.alert('Xin lỗi!', 'Vui lòng nhập đủ thông tin :(');
                    return;
                }
                Alert.alert('Cảm ơn', `Cảm ơn bạn ${name} đã gửi lời chúc!`);
                setName('');
                setPhone('');
                setWish('');
            }}/>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        padding: 16,
        marginTop: 8,
        borderRadius: 8,
    },
    containerImg: {
        width: "60%",
        height: '50%',
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 8,
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#f26147',
        borderRadius: 6,
        marginTop: 10,
        marginHorizontal: 16,
        color: '#f26147',
        paddingHorizontal: 8
    }
});
