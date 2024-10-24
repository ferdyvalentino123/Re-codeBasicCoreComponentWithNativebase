import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Text,
  Image,
  Modal,
  Button,
  VStack,
  HStack,
} from "native-base";

// Dummy Data (Array of Object)
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

  // Fungsi untuk menampilkan modal dan menyimpan item yang dipilih
  const handlePressItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // Arrow Function with destructured argument
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => handlePressItem(item)}>
        <Box p={4} borderBottomWidth={1} borderBottomColor="coolGray.200">
          <Image
            source={{ uri: item.image }}
            alt={item.title}
            height={200}
            resizeMode="cover"
          />
          <Text fontSize="lg" mt={2}>
            {item.title}
          </Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <NativeBaseProvider>
      <Box>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        {selectedItem && (
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
            <Box bg="white" p={5} borderRadius={10} alignItems="center">
              <Image
                source={{ uri: selectedItem.image }}
                alt={selectedItem.title}
                size="xl"
                resizeMode="cover"
              />
              <Text fontSize="2xl" my={4} textAlign="center">
                {selectedItem.title}
              </Text>
              <Button colorScheme="red" onPress={() => setModalVisible(false)}>
                Close
              </Button>
            </Box>
          </Modal>
        )}
      </Box>
    </NativeBaseProvider>
  );
};

export default List;