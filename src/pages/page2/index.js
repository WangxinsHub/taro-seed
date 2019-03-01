import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


class Index extends Component {

  config = {
    navigationBarTitleText: '2'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        2
      </View>
    )
  }
}

export default Index
