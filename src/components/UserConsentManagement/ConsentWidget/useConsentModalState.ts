import {useState} from 'react';
import {storage} from '../../../utile/storage';

export const STORAGE_CONSENT_KEY = '@consent_Keys';

export const useConsentWidgetState = () => {
  const [isConsentWidgetShown, setIsConsentWidgetShown] = useState(false);
  const showConsentWidget = () => setIsConsentWidgetShown(true);
  const hideConsentWidget = () => setIsConsentWidgetShown(false);
  const showConsentWidgetIfFirstLaunched = async () => {
    try {
      const storedConsent = await storage.local.get(STORAGE_CONSENT_KEY);
      if (storedConsent === null) {
        // no consent config stored then show the widget
        showConsentWidget();
      }
    } catch (error) {
      //
    }
  };

  return {
    isConsentWidgetShown,
    showConsentWidget,
    hideConsentWidget,
    showConsentWidgetIfFirstLaunched,
  };
};
