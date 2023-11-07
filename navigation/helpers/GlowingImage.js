import styles from '../subviews/SubViewStyles';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';



const GlowingImage = ({ source, style }) => (
  <View style={style}>
    <ImageBackground source={source} style={[style, styles.glowingimage]} />
    <Image source={source} style={styles.image} />
  </View>
);

export default GlowingImage;