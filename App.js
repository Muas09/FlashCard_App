import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayScreen from './components/PlayScreen';
import SettingsScreen from './components/SettingsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'play', // Initial page is "play"
    };
  }

  renderPage = () => {
    const { currentPage } = this.state;
    if (currentPage === 'play') {
      return <PlayScreen />;
    } else if (currentPage === 'settings') {
      return <SettingsScreen />;
    }
    // Handle other cases or unexpected values of currentPage here
    return null;
  };

  render() {
    const { currentPage } = this.state;
    return (
      <View style={styles.container}>
        {this.renderPage()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.playButton, { backgroundColor: 'white' }]}
            onPress={() => this.setState({ currentPage: 'play' })}
          >
            <View style={styles.buttonContent}>
              <View style={styles.iconContainer}>
                <Icon name="play-circle" size={30} color={currentPage === 'play' ? 'red' : '#8B4513'} />
              </View>
              
              <Text style={[styles.buttonText, { color: currentPage === 'play' ? 'red' : '#8B4513' }]}>
                Play
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.settingsButton, { backgroundColor: 'white' }]}
            onPress={() => this.setState({ currentPage: 'settings' })}
          >
            <View style={styles.buttonContent}>
              <View style={styles.iconContainer}>
                <Icon name="cog" size={30} color={currentPage === 'settings' ? 'red' : '#8B4513'} />
              </View>
              <Text style={[styles.buttonText, { color: currentPage === 'settings' ? 'red' : '#8B4513' }]}>
                Settings
              </Text>
            </View>
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
    marginTop: 15,
    width: 250,
    height: 90,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  playButton: {},
  settingsButton: {},
  buttonText: {
    fontSize: 18,
    marginLeft: 100,
  },
  iconContainer: {
    marginLeft: 100, // Đặt khoảng cách 100px từ phía trái
  },
});

export default App;
