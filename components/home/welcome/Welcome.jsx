import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Rz</Text>
        <Text style={styles.welcomeMessage}>Find your purrfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Text
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Whatcha lookin for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
