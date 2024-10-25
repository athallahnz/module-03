import React, { useState } from "react";
import { Modal, FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

  // Dummmy Data (Array of Object)
    const datas = [
        {
        id: 1,
        title:
            "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 2,
        title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 3,
        title:
            "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 4,
        title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 5,
        title:
            "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 6,
        title:
            "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 7,
        title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
        },
        {
        id: 8,
        title:
            "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 9,
        title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
        {
        id: 10,
        title:
            "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
        },
    ];

  // Functional Component
const List = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

// Arrow Function with destructured argument
const renderItem = ({ item }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
            style={styles.view}
            onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
            }}>
            <View>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        </View>
        );
    };

    //Penerapan Modal pada List
    return (
        <View>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

        <Modal visible={modalVisible} transparent={true} animationType="slide"> 
            <View style={styles.modalBackground} animationType="fade">
                <View style={styles.modalContent}>
                {selectedItem && (
                    <View style={styles.modalBody}>
                        <Image source={{ uri: selectedItem.image }} style={styles.imagemodal} />
                        <Text style={styles.textmodal}>{selectedItem.title}</Text>
                        <TouchableOpacity
                            style={styles.buttonmodal}
                            onPress={() => setModalVisible(false)}>
                            <Text style= {{color: '#fff'}}>Back</Text>
                        </TouchableOpacity>
                    </View>)}
                </View>
            </View>
        </Modal>
    </View>
    );
};

  // Styles
    const styles = StyleSheet.create({
        view: {
        padding: 15,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        },

        image: {
        height: 200,
        width: null,
        },

        imagemodal: {
        height: 150,
        width: 200,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
        },

        text: {
        fontSize: 18,
        paddingTop: 10,
        },

        textmodal: {
        fontSize: 12,
        paddingTop: 10,
        paddingHorizontal:20, 
        textAlign: 'center',
        color: '#000'
        },

        modalBackground: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background hitam transparan
        },

        modalBody: {
            width: 300,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },

        imagemodal: {
            height: 150,
            width: 252,
            borderRadius: 9,
            alignItems: 'center',
            justifyContent: 'center'
        },
        
        buttonmodal: {
            marginTop: 10,
            backgroundColor: '#AA0002',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 6,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
});

export default List;