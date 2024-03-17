import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';
const Separator = () => <View style={styles.separator} />;

const Planner = () => {
  const navigation = useNavigation();
  const isDarkMode  = useColorScheme() === 'light' ? false : true;


  // Function to open a YouTube video in the browser
  const openYouTubeVideo = (videoId: String) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    WebBrowser.openBrowserAsync(youtubeUrl);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkModeText]}>
        Please choose the workout:
      </Text>
      <Separator />
      <View style={styles.buttonContainer}>
      <Link href="/Exercise-Planner/Chest" asChild>
      <Button title="Chest" color={isDarkMode ? '#222' : '#808080'}/>
      </Link>
      <Separator />

      <Link href="/Exercise-Planner/Legs" asChild>
      <Button title="Legs" color={isDarkMode ? '#222' : '#808080'}/>
      </Link>
      <Separator />

      <Link href="/Exercise-Planner/Arms" asChild>
      <Button title="Arms" color={isDarkMode ? '#222' : '#808080'}/>
      </Link>
      <Separator />

      <Link href="/Exercise-Planner/Abdominal_Muscles" asChild>
      <Button title="Abdominal Muscles" color={isDarkMode ? '#222' : '#808080'}/>
      </Link>
      <Separator />

      <Link href="/Exercise-Planner/Full_Body" asChild>
      <Button title="Full Body" color={isDarkMode ? '#222' : '#808080'}/>
      </Link>
      <Separator />
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

export default Planner;
