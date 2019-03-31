import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Style from './Style';
import data from './dict.json';
import _ from 'lodash';

export default class App extends Component {
  state = {
    result: data,
    key: '',
  }

  onTextChange(key) {
    console.log('key ', key);
    const result = data.filter(item =>
      _.startsWith(item.key.toLowerCase(), key.toLowerCase()));
    this.setState({
      key, result
    });
  }

  render() {
    const { result, key } = this.state;
    const results = [];
    result.forEach((item, i) => {
      results.push(
        <View key={i + item.key} style={Style.resultItem}>
          <Text style={Style.resultMean}>
            <Text style={Style.resultKey}>
              {item.key}:
            </Text>
            {item.value}
          </Text>
        </View>

      );
    });

    console.log('key', result);

    return (
      <View style={Style.container}>
        <View style={Style.inputContainer}>
          <TextInput style={Style.inputText}
            onChangeText={text => this.onTextChange(text)}
            placeholder={"Nhập từ cần tra"}
            value={key} />
          {/* <TouchableOpacity>
              <Image source={{ uri: '' }}
                style={Style.searchIcon} />
            </TouchableOpacity> */}
        </View>
        <View style={Style.resultContainer}>
          <ScrollView>
            <Text style={Style.resultTitle}>Kết quả</Text>

            {results}
          </ScrollView>
        </View>
      </View>
    );
  }
}
