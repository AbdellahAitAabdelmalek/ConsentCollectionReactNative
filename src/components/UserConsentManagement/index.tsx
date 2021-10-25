import React, {useEffect} from 'react';
import {useConsentWidgetState} from './ConsentWidget/useConsentModalState';
import {ConsentWidget} from './ConsentWidget';

export const UserConsentManagement = () => {
  const {
    hideConsentWidget,
    isConsentWidgetShown,
    showConsentWidgetIfFirstLaunched,
  } = useConsentWidgetState();

  useEffect(() => {
    showConsentWidgetIfFirstLaunched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ConsentWidget
        hideConsentWidget={hideConsentWidget}
        isConsentWidgetShown={isConsentWidgetShown}
        onConsentAccept={() => console.log('onConsentAccept :::')}
      />
    </>
  );
};
