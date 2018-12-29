import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";

/**
 * Handles any unhandled intents.
 */
export const UnhandledIntentHandler: RequestHandler = {
    canHandle() {
        return true;
    },
    /**
     * Handles unhandled intents by letting the user know we didn't understand what they were asking.
     * ToDo: We should log requestEnvelope information so we can aggregate later on and better understand
     * things users tried to do but were unable to.
     * @param handlerInput {HandlerInput}
     * @return {Response}
     */
    handle(handlerInput: HandlerInput): Response {
        // tslint:disable-next-line:no-console
        console.log("UNHANDLED INTENT REQUEST: " + JSON.stringify(handlerInput));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const outputSpeech = requestAttributes.t("UNHANDLED_INTENT_MESSAGE");
        return handlerInput.responseBuilder
            .speak(outputSpeech)
            .reprompt(outputSpeech)
            .getResponse();
    },
};
