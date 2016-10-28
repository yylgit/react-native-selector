# Install

```
npm install react-native-select  --save
```
仓库地址： https://github.com/yylgit/react-native-select.git

# API

Props |Type| Description
---|---|---
optionsData | PropTypes.array | select的数据源
onSelect | PropTypes.func |  选择事件，函数参数为选择的item
selectedOption | PropTypes.object |  选中的item 
topStyle | PropTypes.any | select的样式
placeholder | PropTypes.string | select默认展示的文本，优先级大于选中的item


# example
```
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
import Select from '../index';
const sellStatusOptions = [{name: '全部', value: -1}, {name: '售卖中', value: 0}, {name: '停止售卖', value: 1}];
const stockOptions = [{name: '全部', value: -1}, {name: '单品库存告急', value: 0}, {name: '单品售罄', value: 1}];

class testProject extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      sellStatus: {name: '全部', value: -1},
      stockStatus: {name: '全部', value: -1},
      sellStatusPlaceHolder: '售卖状态',
      stockPlaceHolder: '库存状态'
    };
  }

  _selectSellStatus(item) {
      this.setState({
          sellStatus: item,
          sellStatusPlaceHolder: ''
      });
  }

  _selectStockStatus(item) {
      this.setState({
          stockStatus: item,
          stockPlaceHolder: ''
      });
  }


  _renderSelect() {
      let {
          sellStatus, stockStatus,
          sellStatusPlaceHolder,
          stockPlaceHolder
      } = this.state;
      return (
          <View style={styles.selectWrapper}>
              <Select
                  ref={view=>{this.sellStatusSelect = view }}
                  optionsData={sellStatusOptions}
                  selectedOption={sellStatus}
                  onSelect={this._selectSellStatus.bind(this)}
                  topStyle={{borderRightWidth: 0}}
                  placeholder={sellStatusPlaceHolder}
              />
              <Select
                  ref={view=>{this.stockSelect = view }}
                  optionsData={stockOptions}
                  selectedOption={stockStatus}
                  onSelect={this._selectStockStatus.bind(this)}
                  placeholder={stockPlaceHolder}
              />
          </View>
      );
  }

  _onStartShouldSetResponderCapture() {
      this.sellStatusSelect.close();
      this.stockSelect.close();
      return false;
  }

  render() {
      return (
        <View style={styles.container}>
          {this._renderSelect()}
          <View style={{flex: 1}} onStartShouldSetResponderCapture={this._onStartShouldSetResponderCapture.bind(this)}>
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
  selectWrapper: {
      flexDirection: 'row',
      zIndex: 1000
  }
});

AppRegistry.registerComponent('react-native-select-index', () => testProject);

```

# Screenshots
![image description](https://dn-cnode.qbox.me/FnmN1500bsL8w85dVfe5nj9V43wg)
![image description](https://dn-cnode.qbox.me/FpGX4AJ3G24YownZUBJM141PBvrx)