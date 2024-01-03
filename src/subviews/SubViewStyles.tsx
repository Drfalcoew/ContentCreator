import { Dimensions, StyleSheet } from "react-native";
import globalStyles from "../../Styles";

const { width, height } = Dimensions.get('window');
// Styles for subviews
const styles = StyleSheet.create({
  // Generic Styles
  rootContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textField: {
    height: 50,
    width: width - 40,
    marginBottom: 20,
    backgroundColor: 'rgba(43,43,43,0.95)',
    borderRadius: 20,
    color: '#FFF',
    paddingHorizontal: 20,
  },
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
    backgroundColor: 'transparent',
    borderradius: 'inherit',
    marginTop: 40,
    filter: 'blur(30px) saturate(2)',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    // AddPost View
    addPostContainer: {
      flex: 1,
        height: '100%',
        maxHeight: height * 0.25,
        width: width,
        marginBottom: 25,
        flexDirection: 'row',
        overflow: 'hidden',
        zIndex: 2,
    },
    addPostView: {
      flex: 1,
      alignItems: 'center',
      maxWidth: 120,
      maxHeight: 172.5,
      borderRadius: 20,
      justifyContent: 'center',
      overflow: 'hidden',
      marginRight: 10,
      marginTop: 10,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: 'gray',
    },
    deleteButton: {
      position: 'absolute',
      top: 5,
      right: 5,
      opacity: 0.85,
      backgroundColor: '#292C2D',
      zIndex: 3,
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      // shadow
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1.5 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    // CellViews
    postContainer: {
        flex: 1,
        minHeight: height * 0.25,
        width: width,
        paddingTop: 10,
        marginBottom: 25,
        flexDirection: 'row',
        overflow: 'hidden',
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
        maxHeight: 172.5,
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
      backgroundColor: globalStyles.accentColor.backgroundColor,
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
      fontWeight: 'normal',
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
        flex: 0.3,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        opacity: 0.85,
        zIndex: 3
    },
    selectedPostLabels: {
        fontSize: 14,
        color: 'white',
        marginRight: 10,
        zIndex: 4,
    },
    selectedPostCommenter: {
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white',
        marginRight: 10,
        zIndex: 4,
    },
    selectedPostComments: {
        fontSize: 14,
        color: 'lightgray',
        fontWeight: '100',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },
})

export default styles;