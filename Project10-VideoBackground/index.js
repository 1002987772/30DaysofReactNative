import React, {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import autobind from 'autobind-decorator'
import Video from 'react-native-video'
import GoBack from '../GoBack'

const { width } = Dimensions.get('window')
const vw = width / 100

export const title = '10 - VideoBackground'
export const description = '背景视频'

@autobind
export default class VideoBackground extends React.Component {
  constructor () {
    super()
    this.state = {
      video: './moments',
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
      controls: true,
      skin: 'native'
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Video
          source={{uri: this.state.video}}
          style={styles.fullScreen}
          resizeMode={this.state.resizeMode}
          repeat={true}
        />
        <View style={styles.titleContainer}>
          <Image
            style={styles.title}
            source={require('./images/login-secondary-logo.png')}
            resizeMode='contain'/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight>
            <View style={[styles.button, styles.btnLogin]}>
              <Text style={styles.btnLoginText}>Login</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={[styles.button, styles.btnSignup]}>
              <Text style={styles.btnSignupText}>Sign up</Text>
            </View>
          </TouchableHighlight>
        </View>
        <GoBack {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  titleContainer: {
    width,
    position: 'absolute',
    left: 0,
    top: 60,
    alignItems: 'center'
  },
  title: {
    width: 80 * vw
  },
  buttonContainer: {
    width,
    position: 'absolute',
    left: 0,
    bottom: 30,
    alignItems: 'center'
  },
  button: {
    height: 50,
    width: 320,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnLogin: {
    backgroundColor: 'green'
  },
  btnLoginText: {
    fontSize: 14,
    color: '#ffffff'
  },
  btnSignup: {
    backgroundColor: '#ffffff'
  },
  btnSignupText: {
    fontSize: 16,
    color: 'green'
  }
})
