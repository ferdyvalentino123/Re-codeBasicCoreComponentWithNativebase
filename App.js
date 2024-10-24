import React, { useState, useRef } from "react";
import { DrawerLayoutAndroid, StatusBar } from "react-native";
import { NativeBaseProvider, Box, Button, Spacer } from "native-base";
import Header from "./components/header";
import List from "./screens/list";
import Article from "./screens/article";


const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value
    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <Box safeArea p={5} bg="#222222" flex={1}>
      <Button colorScheme="blueGray" onPress={() => changePage(drawer, "list")}>
        List
      </Button>
      <Spacer size={5} />
      <Button colorScheme="blueGray" onPress={() => changePage(drawer, "article")}>
        Article
      </Button>
      <Spacer size={5} />
      <Button colorScheme="red" onPress={() => drawer.current.closeDrawer()}>
        Close
      </Button>
    </Box>
  );

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar barStyle="light-content" backgroundColor="#AA0002" />
        <Box safeArea flex={1}>
          <Header drawer={drawer} />
          {page === "list" ? <List /> : page === "article" ? <Article /> : null}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;