import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
// Styles for subviews
const styles = StyleSheet.create({
  // Generic Styles
  labelone: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  labeltwo: {
    fontSize: 16,
    color: '#FFF',
  },
  labelthree: {
    fontSize: 14,
    color: 'lightgray',
    paddingRight: 5,
  },
  labelfour: {
    fontSize: 12,
    color: 'lightgray',
  },
  glowingimage: {
    backgroundsize: 'cover',
    backgroundposition: 'center',
    backgroundrepeat: 'norepeat',
    zindex: -1,
    borderradius: 'inherit',
    filter: 'blur(10px) saturate(2)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 1,
    borderRadius: 0.6,
  },

  // Header
    headerContainer: {
      flex: 1.0,
      width: width,
      minHeight: 80,
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      zIndex: 3,
  },
  headerText: {
      fontSize: 25,
      color: '#FFF',
      fontWeight: 'bold',
  },
  // CellViews
    postContainer: {
        flex: 0.3,
        minHeight: height * 0.25,
        width: width,
        paddingTop: 10,
        marginBottom: 25,
        zIndex: 2,
    },
    postView: {
        flex: 1,
        alignItems: 'center',
        width: 120,
        borderRadius: 20,
        justifyContent: 'flex-end',
        overflow: 'hidden',
        marginRight: 10,
    },
    postBottomView: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        opacity: 0.85,
        backgroundColor: '#292C2D',
        zIndex: 3
    },

    // Switch
    container: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width - 40,
      backgroundColor: 'rgba(43,43,43,0.95)',
      height: 50,
      borderRadius: 20,
    },
    segment: {
      flex: 1,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      borderRadius: 20,
      width: width -100,
    },
    selectedSegment: {
      height: 43,
      marginLeft: 3,
      marginRight: 3,
      backgroundColor: '#3F8CFB',
      borderRadius: 20,
    },
    segmentLabel: {
      fontSize: 16,
      color: 'white',
      zIndex: 4,
    },

    // SelectedPost
    selectedPostContainer: {
      flex: 1,
      borderRadius: 20,
      width: "100%",
      backgroundColor: 'rgba(43,43,43,0.95)',
      minWidth: width - 40,
      minHeight: 80,
      alignItems: 'center',
      justifyContent: 'center', // Use 'center' to vertically center the header
      overflow: 'hidden',
    },
    selectedPostHeaderContainer: {
      width: "100%",
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 5,
      zIndex: 3,
    },
    selectedPostHeader: {
      width: '66%',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      zIndex: 4,
    },
    
    selectedPostHeaderTitle: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'medium',
      zIndex: 4,
    },
    
    selectedPostHeaderCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginHorizontal: 10,
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      zIndex: 4,
    },
    selectedPostImage: {
        minWidth: '97%',
        minHeight: height * 0.25,
        borderRadius: 20,
    },
    selectedPostBottomView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
    },
    selectedPostLabels: {
        fontSize: 14,
        color: 'white',
        marginRight: 10,
        zIndex: 4,
    },
    selectedPostCommenter: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 10,
        zIndex: 4,
    },
    selectedPostComments: {
        fontSize: 14,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
})

export default styles;