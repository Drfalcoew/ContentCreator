import { StyleSheet } from 'react-native';

// Styles for the tab bar and navigation header

const globalStyles = StyleSheet.create({
    accentColor: {
        // This will be selected by the user
        // Default is blue
        backgroundColor: "#3F8CFB"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(27,26,29,1.0)',
    },
    backgroundColor: {
      backgroundColor: 'rgba(27,26,29,1.0)',
    },
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