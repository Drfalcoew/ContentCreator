import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    sectionHeaderContainer: {
        flex: 1,
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    sectionHeaderText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    mainScrollView: {
        flex: 1,
        width: width - 40,
        height: height,
        marginLeft: 20,
        zIndex: 0,
        marginRight: 33,
        flexDirection: 'column',
    },  
    mainView: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 0,
        justifyContent: 'top',
        backgroundColor: 'rgba(27,26,29,1.0)',
        zIndex: 1
    },
})

export default styles;