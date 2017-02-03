import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { login } from '../actions'


const LoginScene = (props) => (
  <View>
    <Text onPress={props.handleLogin}>
      Login
    </Text>
  </View>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  handleLogin: () => dispatch(login())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScene)
