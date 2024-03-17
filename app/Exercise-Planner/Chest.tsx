
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';


const Separator = () => <View style={styles.separator} />;

const Chest = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'light' ? false : true;

  const openYouTubeVideo = (videoId: String) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    WebBrowser.openBrowserAsync(youtubeUrl);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkModeText]}>
        Chest Workout:
      </Text>

      <View style={styles.buttonContainer}>

        <Button
          title="1.Chest Workout At Home"
          onPress={() => openYouTubeVideo('4o1YzksPuqg')}
          color={isDarkMode ? '#222' : '#808080'}

        />

        <Separator />
        <Button
          title="2. Five push up Variations"
          onPress={() => openYouTubeVideo('m3QYYUvJQL0')}
          color={isDarkMode ? '#222' : '#808080'}

        />
        <Separator />
        <Button
          title="3. Ten Minute Chest Workout"
          onPress={() => openYouTubeVideo('U5Bx_yNtgyk')}
          color={isDarkMode ? '#222' : '#808080'}

        />
        <Separator />
        <Button
          title="4. Home Chest Workoutttt"
          onPress={() => openYouTubeVideo('rxEMKXW2Wqs')}
          color={isDarkMode ? '#222' : '#808080'}

        />
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  darkModeContainer: {
    backgroundColor: '#2c3e50',
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  darkModeText: {
    color: '#ffffff',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#dcdcdc',
  },
  darkModeButton: {
    backgroundColor: '#808080',
  },
  separator: {
    marginVertical: 20,
  },
});

export default Chest;
