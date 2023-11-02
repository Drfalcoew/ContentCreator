import { StyleSheet } from 'react-native';

// Styles for the tab bar and navigation header

const globalStyles = StyleSheet.create({
    textMain: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    textDetail: {
        fontSize: 14,
        color: '#FFF',
    },
    tabIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingIcon: {
        position: 'absolute',
        bottom: '4%', // Adjust the top position as needed
        left: '50%',
        marginLeft: -15, // Half of the icon's width
        width: 35, // Adjust as needed
        height: 35, // Adjust as needed
        backgroundColor: '#FFF', // Background color matches the view's background
        borderRadius: 25, // Make it a circle
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTabCircle: {
        width: 45, // Adjust the size of the circle as needed
        height: 45, // Adjust the size of the circle as needed
        borderRadius: 25, // Make it a circle
        backgroundColor: 'rgba(100, 100, 100, 0.5)', // Your selected tab circle color
        alignItems: 'center',
        justifyContent: 'center',
    },
    unselectedTabCircle: {
        width: 50, // Adjust the size of the circle as needed
        height: 50, // Adjust the size of the circle as needed
        borderRadius: 25, // Make it a circle
        backgroundColor: 'transparent', // Transparent for unselected tabs
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default globalStyles;