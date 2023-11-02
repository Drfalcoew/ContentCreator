import styles from '../subviews/SubViewStyles';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';


const GlowingImage = ({ source, style }) => (
    <ImageBackground source={source} style={[style, styles.glowingimage]}>
      <View style={styles.image}/>
    </ImageBackground>
);

export default GlowingImage;