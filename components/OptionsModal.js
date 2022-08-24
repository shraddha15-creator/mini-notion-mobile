import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {options} from '../OptionsDB/options';

export const OptionsModal = ({
  optionSelecthandler,
  setInputValue,
  setPlaceholderValue,
}) => {
  return (
    <ScrollView>
      <View style={styles.options} className="input-options">
        {options.map(option => {
          return (
            <TouchableOpacity
              key={option.id}
              onPress={() => {
                optionSelecthandler(option.heading);
                setPlaceholderValue(option.headingTitle);
                setInputValue('');
              }}>
              <View style={styles.optionsItem} className="option-item">
                <Text style={styles.headingMain} className="heading-main">
                  {option.heading}
                </Text>
                <View>
                  <Text style={styles.headingTitle} className="heading-title">
                    {option.headingTitle}
                  </Text>
                  <Text
                    style={styles.headingDetails}
                    className="heading-details">
                    {option.headingDetails}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  options: {
    width: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  optionsItem: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#ececec',
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  headingMain: {
    width: 70,
    fontSize: 13,
    padding: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  headingTitle: {
    fontWeight: 'bold',
  },
  headingDetails: {
    color: '#909090',
  },
});
