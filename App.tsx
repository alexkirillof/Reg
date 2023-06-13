import React from "react";
import { Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";



//*	https://webhook.site/cee3d686-8b9e-4638-941e-bc3e104192e3*//

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
