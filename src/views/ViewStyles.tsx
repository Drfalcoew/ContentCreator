import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Header
    headerContainer: {
        marginTop: 15,
        height: 50,
        width: width,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    headerLeftContainer: {
        paddingTop: 3,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 10,
    },
    headerBackText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '400',
        marginRight: 10,
    },
    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    // Main Navigation
    mainScrollView: {
        width: width - 40,
        height: height + 150,
        marginLeft: 20,
        zIndex: 0,
        marginRight: 33,
        flexDirection: 'column',
        backgroundColor: 'rgba(27,26,29,1.0)',
    },
    mainView: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 0,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(27,26,29,1.0)',
        zIndex: 1
    },
    scrollViewChildView: {
        width: width,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        zIndex: 1,
    },
})

export default styles;