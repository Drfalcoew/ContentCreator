import { ScrollView, View, Text } from "react-native";
import styles from "./SubViewStyles";
import globalStyles from "../../Styles";
import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

const CellViewChild = ({ post, onPress }) => {

  return (
    <>
      {post && post.image && (
        <TouchableOpacity onPress={onPress}>
          <ImageBackground source={post.image} style={styles.postView}>
            <View style={styles.postBottomView}>
              <Text style={globalStyles.textDetail}>
                {post.name}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </>
  );
};

const CellViews = ({ viewData, setData }) => {
  
  return (
    <View style={styles.postContainer}>
      <ScrollView horizontal={true}>
        {viewData && viewData.length > 0 && viewData.map((post) => (
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
