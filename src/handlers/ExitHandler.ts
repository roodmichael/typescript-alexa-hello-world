import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Request, Response } from "ask-sdk-model";

/**
 * Skill exit handler.
 */
export const ExitHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request: Request = handlerInput.requestEnvelope.request;

        return request.type === "IntentRequest"
        && (request.intent.name === "AMAZON.CancelIntent"
            || request.intent.name === "AMAZON.StopIntent");
    },
    /**
     * Handle the Exit intent
     * Handler that is executed when the user wishes to exit the skill.
     * @param handlerInput
     * @return {Response}
     */
    handle(handlerInput: HandlerInput): Response {
        // tslint:disable-next-line:no-console
        console.log("EXIT INTENT: " + JSON.stringify(handlerInput));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechOutput = requestAttributes.t("STOP_MESSAGE");
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .getResponse();
    },
};
