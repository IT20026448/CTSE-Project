import AddEmployee from './EmployeeManagement/AddEmployee';
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import profile from "../assets/tiffany.jpeg";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import work from "../assets/work.png";
import employee from "../assets/employee.jpg";
import product from "../assets/product.jpg";

export default function Home() {
  const navigation = useNavigation();

    const addEmpNav = () => {
        navigation.navigate('Employee');
    }

    const viewEmpNav = () => {
        navigation.navigate("ViewEmp");
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
          <ImageBackground
            source={work}
            style={[styles.discoverItem]}
            imageStyle={styles.discoverItemImage}
          >
            <View style={styles.discoverItemLocationWrapper}>
              <Entypo name="location-pin" size={18} color={colors.white} />
              <Text style={styles.discoverItemLocationText}>
                {"Manage Tasks"}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            source={employee}
            style={[styles.discoverItem]}
            imageStyle={styles.discoverItemImage}
          >
            <View style={styles.discoverItemLocationWrapper}>
              <Entypo name="location-pin" size={18} color={colors.white} />
              <Text style={styles.discoverItemLocationText}>
                {"Manage Employees"}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            source={product}
            style={[styles.discoverItem]}
            imageStyle={styles.discoverItemImage}
          >
            <View style={styles.discoverItemLocationWrapper}>
              <Entypo name="location-pin" size={18} color={colors.white} />
              <Text style={styles.discoverItemLocationText}>
                {"Manage Products"}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View>
          <Button onPress={addEmpNav} title="Add Employee"/>
          <Button title="View Employee" onPress={viewEmpNav}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 390,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 20,
    marginLeft: 10,
    marginTop: 30,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
