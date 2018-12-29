import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Request, Response } from "ask-sdk-model";

/**
 * Help intent handler
 */
export const HelpIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request: Request = handlerInput.requestEnvelope.request;

        return request.type === "IntentRequest" && request.intent.name === "AMAZON.HelpIntent";
    },
    /**
     * Handle the help intent. This handler lets the user know what they can ask of this skill.
     * @param handlerInput {HandlerInput}
     */
    handle(handlerInput: HandlerInput): Response {
        // tslint:disable-next-line:no-console
        console.log("HELP INTENT: " + JSON.stringify(handlerInput));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechOutput = requestAttributes.t("HELP_MESSAGE");
        const reprompt = requestAttributes.t("HELP_REPROMPT");

        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(reprompt)
            .getResponse();
    },
};
