import { ErrorHandler, HandlerInput } from "ask-sdk-core";
import { Response } from "ask-sdk-model";

/**
 * Error Handler
 */
export const SkillErrorHandler: ErrorHandler = {
    canHandle(): boolean {
        return true;
    },
    /**
     * Handles an error from the skill. In the event of an error we notify the user
     * and log the error to ensure we catch it in our metrics.
     * @param handlerInput  {HandlerInput}
     * @param error {Error}
     */
    handle(handlerInput: HandlerInput, error: Error): Response {
        // tslint:disable-next-line:no-console
        console.log("ERROR HANDLER: " + JSON.stringify(handlerInput));
        // tslint:disable-next-line:no-console
        console.error("ERROR - " + JSON.stringify(error));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const outputSpeech = requestAttributes.t("UNHANDLED_INTENT_MESSAGE");
        const reprompt = requestAttributes.t("UNHANDLED_INTENT_MESSAGE");

        return handlerInput.responseBuilder
            .speak(outputSpeech)
            .reprompt(reprompt)
            .getResponse();
    },
};
