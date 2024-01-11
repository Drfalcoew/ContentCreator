import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../Styles";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Header
    headerContainer: {
        width: '100%',
        marginTop: 15,
        height: 50,
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
        paddingRight: 0,
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
    // Login View
    rootContainer: {
        width: width - 40,
        marginLeft: 20,
        zIndex: 0,
        marginRight: 33,
        flexDirection: 'column',
        backgroundColor: 'rgba(27,26,29,1.0)',
    },
    loginViewContainer: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
      },
      loginAccountImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
      },
      loginAccountImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      accountName: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
      },
      accountButton: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: globalStyles.accentColor.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      accountButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
      },
})

export default styles;