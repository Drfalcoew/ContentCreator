import { ScrollView, View, Text } from "react-native";
import styles from "./SubViewStyles";
import globalStyles from "../Styles";
import { ImageBackground, TouchableOpacity } from "react-native"; // Import TouchableOpacity for pressability

const CellViewChild = ({ post, onPress }) => (
  <TouchableOpacity onPress={onPress}> {/* Wrap the content with TouchableOpacity for pressability */}
    <ImageBackground source={post.image} style={styles.postView}>
      <View style={styles.postBottomView}>
        <Text style={globalStyles.textDetail}>
            {post.title}
        </Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const CellViews = ({ viewData, setData }) => {
  return (
    <View style={styles.postContainer}>
      <ScrollView horizontal={true}>
        {viewData.map((post) => (
          <CellViewChild
            key={post.id}
            post={post}
            onPress={() => setData(post)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CellViews;
