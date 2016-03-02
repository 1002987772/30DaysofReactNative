import React, {
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class GoBack extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._goBack.bind(this)} underlayColor='transparent'>
          <View style={styles.arrow}>
            <Icon name='ios-arrow-thin-left' size={40} color='#fff'/>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  _goBack () {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 0
  },
  arrow: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
