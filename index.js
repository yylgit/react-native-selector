'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {isFunction} from './utils';

class Select extends Component {

    static propTypes = {
        optionsData: React.PropTypes.array,
        onSelect: React.PropTypes.func,
        selectedOption: React.PropTypes.object,
        topStyle: React.PropTypes.any,
        placeholder: React.PropTypes.string
    }

    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false
        };
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    _renderOptions() {
        let {isOpen} = this.state;
        let {optionsData, selectedOption} = this.props;
        if(!isOpen) return null;
        //解决android下option之间的间隙
        let stylepatch = Platform.OS === 'ios' ? null : {marginTop: -1};
        let options =  optionsData.map((item, index)=>{
            let check = null;
            if(selectedOption.value === item.value) {
                check = (
                    <View style={{position: 'absolute', right: 10,top: 14}}>
                        <Icon name='check' size={12} color="#000"/>
                    </View>
                );
            }
            return (
                <TouchableOpacity key={index} onPress={this._itemPress.bind(this, item)}>
                    <View style={[styles.option,stylepatch]}>
                        <Text style={styles.optionText}>{item.name}</Text>
                        {check}
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <View style={styles.options}>
                {options}
            </View>
        );
    }

    
    _itemPress(item) {
        this.setState({
            isOpen: false
        });
        this.setState({
            selectedOption: item
        })
        if(isFunction(this.props.onSelect)) {
            this.props.onSelect(item)
        }
    }

    _changeOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let {isOpen} = this.state;
        let {selectedOption, topStyle,placeholder} = this.props;
        let showName = placeholder ? placeholder : selectedOption.name;
        let arrowName = isOpen ? "angle-up" : "angle-down";
        topStyle = topStyle ? topStyle : null;
        return (
            <View style={styles.select}>
                <TouchableOpacity style={[styles.option, styles.optionBtn, topStyle]} onPress={this._changeOpen.bind(this)}>
                    <Text style={styles.optionText}>{showName}</Text>
                    <View style={{position: 'absolute', right: 10,top: 10}}>
                        <Icon name={arrowName} size={20} color="#000"/>
                    </View>
                </TouchableOpacity>
                {this._renderOptions()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    select: {
        flex: 1,
        height: 40,
    },

    option: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems:'center',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#ececec'

    },
    optionText: {
        flex: 1,
        textAlign: 'center'
    },
    optionBtn: {
        borderWidth: 1
    }
});


export default Select;