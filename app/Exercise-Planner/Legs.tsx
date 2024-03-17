
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
  
  const Legs = () => {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'light' ? false : true;
  
    const openYouTubeVideo = (videoId: String) => {
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
      WebBrowser.openBrowserAsync(youtubeUrl);
    };
  
    return (
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkModeContainer]}>
        <Text style={[styles.title, isDarkMode && styles.darkModeText]}>
          Legs Workout:
        </Text>
  
        <View style={styles.buttonContainer}>
  
          <Button
            title="Lunges at Home Workout"
            onPress={() => openYouTubeVideo('uVwNVEQS_uo')}
            color={isDarkMode ? '#222' : '#808080'}
  
          />
  
          <Separator />
          <Button
            title="Leg Workout at Home - Squats, RDLs"
            onPress={() => openYouTubeVideo('ZZI__bqlBkQ')}
            color={isDarkMode ? '#222' : '#808080'}
  
          />
          <Separator />
          <Button
            title="At Home Workout, No Equipment, Lower Body HIT"
            onPress={() => openYouTubeVideo('Gwf8vxZ_o3s')}
            color={isDarkMode ? '#222' : '#808080'}
  
          />
          <Separator />
          <Button
            title="LEG/THIGH WORKOUT"
            onPress={() => openYouTubeVideo('Cq8xjqDLPKg')}
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
  
  export default Legs;
  