/* eslint-disable react/display-name */
import React, {useEffect, useState} from 'react';

import {storage, stringifyValue} from '../../../utile/storage';
import {FullScreenModal} from '../../FullScreenModal';
import {ConsentContent} from './ConsentContent';
import {STORAGE_CONSENT_KEY} from './useConsentModalState';

export type ConsentParameters = {
  contentSquare: boolean;
  facebook: boolean;
  googleAnalytics: boolean;
};

type ConsentWidgetProps = {
  isConsentWidgetShown: boolean;
  hideConsentWidget: () => void;
} & (
  | {storedConsentParameters?: never; onConsentAccept: () => void}
  | {storedConsentParameters: ConsentParameters; onConsentAccept?: never}
);

const onConsent = async (storedConsent: ConsentParameters) => {
  console.log('storedConsent //// ', storedConsent);
  // await firebase
  //   .analytics()
  //   .setAnalyticsCollectionEnabled(Boolean(storedConsent.google_analytics));
};

const isEverythingDeclined = (consentParameters: ConsentParameters) =>
  Object.values(consentParameters).every(value => !value);

export const ConsentWidget = ({
  isConsentWidgetShown,
  hideConsentWidget,
  onConsentAccept,
  storedConsentParameters,
}: ConsentWidgetProps) => {
  const [consentParameters, setConsentParameters] = useState<ConsentParameters>(
    storedConsentParameters || {
      contentSquare: false,
      facebook: false,
      googleAnalytics: false,
    },
  );
  useEffect(() => {
    storedConsentParameters && setConsentParameters(storedConsentParameters);
  }, [storedConsentParameters]);

  const onWidgetResponse = async () => {
    onConsent(consentParameters);

    try {
      await storage.local.save(
        STORAGE_CONSENT_KEY,
        stringifyValue(consentParameters),
      );
    } catch (error) {
      //
    }
    hideConsentWidget();

    if (
      onConsentAccept &&
      consentParameters &&
      !isEverythingDeclined(consentParameters)
    ) {
      onConsentAccept();
    }
  };

  if (!isConsentWidgetShown) {
    return null;
  }

  return (
    <FullScreenModal visible={isConsentWidgetShown} closeFn={onWidgetResponse}>
      <ConsentContent
        consentParameters={consentParameters}
        setConsentParameters={setConsentParameters}
      />
    </FullScreenModal>
  );
};
