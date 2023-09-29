

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PlayScreen from './components/PlayScreen';
import SettingsScreen from './components/SettingsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'play', // Trang ban đầu là "play"
    };
  }

  renderPage = () => {
    const { currentPage } = this.state;
    if (currentPage === 'play') {
      return <PlayScreen />;
    } else if (currentPage === 'settings') {
      return <SettingsScreen />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderPage()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.playButton]}
            onPress={() => this.setState({ currentPage: 'play' })}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.settingsButton]}
            onPress={() => this.setState({ currentPage: 'settings' })}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  button: {
    marginTop:15,
    width:300,
    borderRadius: 5,
  },
  playButton: {
    padding: 30,
    backgroundColor: 'white', // White background
  },
  settingsButton: {
    padding: 30,
    backgroundColor: 'white', // White background
  },
  buttonText: {
    color: '#8B4513', // Brown text color
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
