import React, {
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  View,
  TouchableOpacity
} from 'react-native'

import GoBack from '../GoBack'
import autobind from 'autobind-decorator'
import Swiper from 'react-native-swiper'
import Camera from 'react-native-camera'
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')

export const title = '04 - SnapChatMenu'
export const description = 'snapchat视频聊天'

@autobind
export default class SnapChatMenu extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Swiper showsPagination={false} loop={false}>
          <View style={styles.slide1}>
            <Image style={styles.image} source={require('./images/left.png')}/>
          </View>
          <View style={styles.slide2}>
          <Camera
            ref={(cam) => {
              this.camera = cam
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.Fill}>
            <TouchableOpacity onPress={() => this._takePicture()}>
              <View style={styles.capture}>
                  <Icon size={60} name={'camera'} color={'#333333'}/>
              </View>
            </TouchableOpacity>
          </Camera>
          </View>
          <View style={styles.slide3}>
            <Image style={styles.image} source={require('./images/right.jpg')}/>
          </View>
        </Swiper>
        <GoBack {...this.props}/>
      </View>
    )
  }

  _takePicture () {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  image: {
    width,
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height,
    width
  },
  capture: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 85,
    height: 85
  }
})
