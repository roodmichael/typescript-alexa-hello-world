/* tslint:disable */
const i18n = require("i18next");
const sprintf = require("i18next-sprintf-postprocessor");

import { HandlerInput } from "ask-sdk-core";
import { languageStrings } from "../i18n/";

export const LocalizationInterceptor = {
    process(handlerInput: HandlerInput) {
        const localizationClient = i18n.use(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: languageStrings,
            returnObjects: true,
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = (...args: string[]) => {
            return localizationClient.t(...args);
        };
    },
};
