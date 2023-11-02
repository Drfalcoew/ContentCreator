import { ScrollView } from "react-native";
import { View, Text } from "react-native"
import styles from "./SubViewStyles"
import globalStyles from "../Styles";
import { ImageBackground } from "react-native";


const CellViewChild = ({ post }) => (
    <ImageBackground source={post.image} style={styles.postView}>
        <View style={styles.postBottomView}>
            <Text style={globalStyles.textDetail}>{post.title}</Text>
        </View>
    </ImageBackground>
);

const CellViews = ({ viewData, setPost }) => {
    /* images are from /assets/stock_images/ */

    const handlePostSelection = (post) => {
        setPost(post);
    };

    return (
        <View style={styles.postContainer}>
            <ScrollView horizontal={true}>
                {viewData.map((post) => (
                    <CellViewChild
                        key={post.id}
                        post={post}
                        onPress={() => handlePostSelection(post)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default CellViews;