import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";

/**
 * Handles launch request
 */
export const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return handlerInput.requestEnvelope.request.type === "LaunchRequest";
    },
    /**
     * Handles the launch request by letting the user know what can be asked of the skill.
     * @param handlerInput {HandlerInput}
     * @return {Response}
     */
    handle(handlerInput: HandlerInput): Response {
        // tslint:disable-next-line:no-console
        console.log("LAUNCH REQUEST: " + JSON.stringify(handlerInput));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const responseBuilder = handlerInput.responseBuilder;
        const speechOutput = requestAttributes.t("HELP_MESSAGE");
        const reprompt = requestAttributes.t("HELP_REPROMPT");

        return responseBuilder
            .speak(speechOutput)
            .reprompt(reprompt)
            .getResponse();
    },
};
