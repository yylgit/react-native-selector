/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../index';

class testProject extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <Button size='lg' text="（大按钮）size='lg'" />
          </View>
          <View style={styles.row}>
            <Button  text="（默认尺寸）" />
          </View>
          <View style={styles.row}>
            <Button size='sm'   text="（小按钮) size='sm'" />
          </View>
          <View style={styles.row}>
            <Button size='xs'   text="（超小尺寸) size='xs'" />
          </View>
          <View style={styles.row}>
            <Button type="default"  text="（默认样式）type=default" />
          </View>
          <View style={styles.row}>
            <Button type="primary"  text="（首选项）type=type=primary" />
          </View>
          <View style={styles.row}>
            <Button type="success"  text="（成功）type=success" />
          </View>
          <View style={styles.row}>
            <Button type="info"  text="（一般信息）type=info" />
          </View>
          <View style={styles.row}>
            <Button type="warning"  text="（警告）type=warning" />
          </View>
          <View style={styles.row}>
            <Button type="danger"  text="（危险）type=danger" />
          </View>
          <View style={styles.row}>
            <Button type="main"  text="（美团色）type=main" />
          </View>
          <View style={styles.row}>
            <Button  type="link" text="（链接）Link" />
          </View>
          <View style={styles.row}>
            <Button  disabled={true} text="disabled" />
          </View>
          <View style={styles.row}>
            <Button  isLoading={true} activityIndicatorColor="black" text="loading" />
          </View>
          <View style={styles.row}>
            <Button type="danger" isLoading={true}  text="loading" />
          </View>
          <View style={styles.row}>
            <Button>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginLeft: 5}}>自定义内容</Text>
              </View>
            </Button>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  row: {
    marginTop: 5
  }
});

AppRegistry.registerComponent('@mtfe/react-native-button-index', () => testProject);
