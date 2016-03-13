import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import autobind from 'autobind-decorator'
import { BlurView } from 'react-native-blur'
import GoBack from '../GoBack'

const { width, height } = Dimensions.get('window')
const vw = width / 100
const vh = height / 100

export const title = '06 - FindMyLocation'
export const description = '我的地理位置'

@autobind
export default class FindMyLocation extends React.Component {
  constructor () {
    super()
    this.state = {
      myLocation: 'My Location'
    }
  }

  render () {
    return (
      <Image style={{flex: 1}} source={require('./images/1-Eb_0OvtcxJXHZ7-IOoBsaQ.png')} resizeMode='stretch'>
        <BlurView style={styles.container} blurType='dark'>
          <View style={styles.myLocation}>
            <Text style={styles.myLocationText}>{this.state.myLocation}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={() => this._getMyLocation()} underlayColor={'transparent'}>
              <View style={styles.buttonContent}>
                <Image style={styles.buttonImage}
                  source={require('./images/Find_my_location.png')}
                  resizeMode='stretch'/>
                <Text style={styles.buttonText}>Find My Location</Text>
              </View>
            </TouchableHighlight>
          </View>
          <GoBack {...this.props}/>
        </BlurView>
      </Image>
    )
  }

  _getMyLocation () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const myLocation = JSON.stringify(position)
        this.setState({myLocation})
        setTimeout(() => {
          this.setState({myLocation: '目前没有获取城市好的实现'})
        }, 1000)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width
  },
  myLocation: {
    marginTop: 80,
    width: 90 * vw,
    height: 60,
    backgroundColor: '#1B1323',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  myLocationText: {
    color: '#ffffff'
  },
  buttonContainer: {
    width,
    position: 'absolute',
    bottom: 10,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContent: {
    width: 80 * vw,
    height: 10 * vh,
    alignItems: 'center'
  },
  buttonImage: {
    width: 80 * vw,
    height: 10 * vh
  },
  buttonText: {
    marginTop: -44,
    fontSize: 14,
    color: '#ffffff'
  }
})
