import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid } from "react-native";
import { NativeBaseProvider, Box, Button, Divider, StatusBar } from "native-base";
import Header from "./components/header";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
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
    <Box p={4} bg="#222222" flex={1}>
      <Button colorScheme="primary" onPress={() => changePage(drawer, "list")}>
        List
      </Button>
      <Divider my={4} />
      <Button colorScheme="primary" onPress={() => changePage(drawer, "article")}>
        Article
      </Button>
      <Divider my={4} />
      <Button colorScheme="secondary" onPress={() => drawer.current.closeDrawer()}>
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
        <Box>
          <Header drawer={drawer} />
          {page == "list" ? <List /> : page == "article" ? <Article /> : null}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;
