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
          <Icon name='ios-arrow-thin-left' size={40} color='#fff'/>
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
    top: 30,
    left: 20,
    alignItems: 'center'
  }
})
