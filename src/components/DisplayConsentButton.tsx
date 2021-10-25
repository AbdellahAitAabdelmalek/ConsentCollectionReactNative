import React, {useState} from 'react';
import {Button} from 'react-native';
import {storage} from '../utile/storage';
import {
  ConsentParameters,
  ConsentWidget,
} from './UserConsentManagement/ConsentWidget';
import {
  STORAGE_CONSENT_KEY,
  useConsentWidgetState,
} from './UserConsentManagement/ConsentWidget/useConsentModalState';

export const DisplayConsentButton = () => {
  const {hideConsentWidget, isConsentWidgetShown, showConsentWidget} =
    useConsentWidgetState();

  const [storedConsentParameters, setStoredConsentParameters] =
    useState<ConsentParameters>({
      contentSquare: false,
      facebook: false,
      googleAnalytics: false,
    });

  const onDisplayConsent = async () => {
    try {
      const storedConsent = await storage.local.get(STORAGE_CONSENT_KEY);
      console.log(' storedConsent mmm', storedConsent);
      setStoredConsentParameters(storedConsent);
      showConsentWidget();
    } catch (error) {
      //
    }
  };

  return (
    <>
      <Button title={'Display your consent'} onPress={onDisplayConsent} />
      <ConsentWidget
        hideConsentWidget={hideConsentWidget}
        isConsentWidgetShown={isConsentWidgetShown}
        storedConsentParameters={storedConsentParameters}
      />
    </>
  );
};
