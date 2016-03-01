import React, {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  View,
  Text
} from 'react-native'

import GoBack from '../GoBack'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')
const vw = width / 100
const vh = height / 100

export const title = '01 - SimpleStopWatch'
export const description = '一个简单的定时器'
export default class SimpleStopWatch extends React.Component {
  constructor () {
    super()

    this.state = {
      count: '0.0'
    }
    this.timerID = null
  }

  componentWillUnmount () {
    this._onPause()
    this._reset()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.countWrap}>
          <Text style={styles.count}>
            {this.state.count}
          </Text>
          <View style={styles.reset}>
            <TouchableHighlight onPress={this._reset.bind(this)} underlayColor={'transparent'}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.control}>
          <View style={styles.left}>
            <TouchableHighlight onPress={this._onStart.bind(this)} underlayColor={'transparent'}>
              <Icon size={60} name={'play'} color={'#ffffff'}/>
            </TouchableHighlight>
          </View>
          <View style={styles.right}>
            <TouchableHighlight onPress={this._onPause.bind(this)} underlayColor={'transparent'}>
              <Icon size={60} name={'pause'} color={'#ffffff'}/>
            </TouchableHighlight>
          </View>
        </View>
        <GoBack {...this.props}/>
      </View>
    )
  }

  _onStart () {
    if (this.timerID) return

    this.timerID = setInterval(() => {
      const count = this.state.count
      this.setState({count: String((Number(count) + 0.1).toFixed(1))})
    }, 100)
  }

  _onPause () {
    clearInterval(this.timerID)
    this.timerID = null
  }

  _reset () {
    this.setState({count: '0.0'})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  countWrap: {
    width: width,
    height: 40 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#090123'
  },
  reset: {
    position: 'absolute',
    top: 43,
    right: 20
  },
  resetText: {
    color: '#ffffff'
  },
  count: {
    fontFamily: 'Avenir Next',
    color: '#ffffff',
    fontWeight: '100',
    fontSize: 80
  },
  control: {
    flexDirection: 'row',
    height: 60 * vh
  },
  left: {
    width: 50 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525BFC'
  },
  right: {
    width: 50 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66BD09'
  }
})
