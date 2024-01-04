import {Alert, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

export const Bai3 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Mở Model</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType={"slide"}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal đã đóng', 'Bạn đã đóng modal');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello Thành đẹp trai!</Text>
                        <Image source={{
                            uri: 'https://nhuthuyxuandung.info.vn/images/gallery/webp/studio(4).webp'
                        }} style={styles.imgStyle} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Ẩn Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 120,
        height: 50,
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 24,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 4,
        textAlign: 'center',
    },
    imgStyle: {
        width: 100,
        height: 160,
        borderRadius: 16,
        margin: 8,
        resizeMode: "cover",
    }

});
