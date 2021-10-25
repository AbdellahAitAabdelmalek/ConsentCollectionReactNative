import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';
import {ConsentParameters} from '.';

export const ConsentContent = ({
  consentParameters,
  setConsentParameters,
}: {
  consentParameters: ConsentParameters;
  setConsentParameters: (consentParameters: ConsentParameters) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>
        Some text to prompt to user to give his consent
      </Text>
      <ConsentOption
        consentParameterKey={'contentSquare'}
        consentParameterValue={consentParameters.contentSquare}
        toggleConsentParameterValue={() =>
          setConsentParameters({
            ...consentParameters,
            contentSquare: !consentParameters.contentSquare,
          })
        }
      />

      <ConsentOption
        consentParameterKey={'facebook'}
        consentParameterValue={consentParameters.facebook}
        toggleConsentParameterValue={() =>
          setConsentParameters({
            ...consentParameters,
            facebook: !consentParameters.facebook,
          })
        }
      />

      <ConsentOption
        consentParameterKey={'googleAnalytics'}
        consentParameterValue={consentParameters.googleAnalytics}
        toggleConsentParameterValue={() =>
          setConsentParameters({
            ...consentParameters,
            googleAnalytics: !consentParameters.googleAnalytics,
          })
        }
      />
    </View>
  );
};

const ConsentOption = ({
  consentParameterKey,
  consentParameterValue,
  toggleConsentParameterValue,
}: {
  consentParameterKey: string;
  consentParameterValue: boolean;
  toggleConsentParameterValue: () => void;
}) => (
  <View style={styles.optionContainer}>
    <Text style={styles.optioonText}>{consentParameterKey} </Text>

    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={consentParameterValue ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => toggleConsentParameterValue()}
      value={consentParameterValue}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionContainer: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    flexDirection: 'row',
  },

  optioonText: {fontSize: 25},
  promptText: {
    fontSize: 40,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    marginTop: 20,
  },
});
