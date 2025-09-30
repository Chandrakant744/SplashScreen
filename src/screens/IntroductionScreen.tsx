import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const CIRCLE_SIZE = 90;
const IntroductionScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo.jpeg")}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.heading}>Introduction</Text>
            <View style={styles.imageBlock}>
                <Image
                    source={require("../assets/doc2.jpeg")}
                    style={styles.doctorImage}
                />
                <View style={styles.circle}>
                    <Text style={styles.circleText}>100K+</Text>
                    <Text style={styles.circleSubText}>Facilities</Text>
                </View>
            </View>
            <Text style={styles.paragraph}>
                Borcelle Medical is at the forefront of this
                transformation, focusing on innovative solutions to
                enhance patient care and outcomes.
            </Text>
            <View style={styles.row}>
                <View style={styles.landscapeTextContainer}>
                    <Text style={styles.subHeading}>Healthcare Landscape</Text>
                    <Text style={styles.landscapeText}>
                        The healthcare landscape is evolving rapidly, with over 100,000
                        healthcare facilities in the Borcelle.
                    </Text>
                </View>
                <Image
                    source={require("../assets/doc1.jpeg")}
                    style={styles.bpImage}
                />
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },

    logoContainer: {
        alignItems: "flex-start",
        marginBottom: 4,
    },
    logoImage: {
        width: 50,
        height: 50,
    },

    heading: {
        fontSize: 40,
        fontWeight: "700",
        textAlign: "left",
        marginBottom: 16,
        marginTop: 20,
        color: "#333",
    },

    imageBlock: {
        width: "100%",
        height: 180,
        position: "relative",
        marginBottom: 24,
        justifyContent: "center",
    },
    doctorImage: {
        width: width * 0.7,
        height: 160,
        borderRadius: 16,
        resizeMode: "cover",
        position: "absolute",
        right: 0,
        top: 10,
        zIndex: 1,
    },
    circle: {
        position: "absolute",
        left: 20,
        top: 45,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: "#2D9CDB",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    circleText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700",
    },
    circleSubText: {
        fontSize: 12,
        color: "#fff",
    },

    paragraph: {
        fontSize: 14,
        color: "#444",
        textAlign: "left",
        marginBottom: 20,
        lineHeight: 24,
        marginLeft: 20,
    },


    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
    },
    landscapeTextContainer: {
        flex: 1,
        marginRight: 12,
    },
    subHeading: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 10,
        color: "#333",
        textAlign: "left",
        flexWrap: "nowrap",
        marginLeft: 20,
        marginTop: 25,
    },
    landscapeText: {
        fontSize: 14,
        color: "#333",
        lineHeight: 20,
        textAlign: "left",
        marginLeft: 20,
    },
    bpImage: {
        width: 100,
        height: 150,
        borderRadius: 12,
        resizeMode: "cover",
    },
});
export default IntroductionScreen;