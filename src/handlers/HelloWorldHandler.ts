import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Request, Response } from "ask-sdk-model";

export const HelloWorldHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        // tslint:disable-next-line:no-console
        console.log("EVALUATE INTENT - HelloWorldIntentHandler");
        const request: Request = handlerInput.requestEnvelope.request;

        return (request.type === "IntentRequest" && request.intent.name === "HelloWorldIntent");
    },
    handle(handlerInput: HandlerInput): Response {
        // tslint:disable-next-line:no-console
        console.log("START INTENT - HelloWorldIntentHandler - " + JSON.stringify(handlerInput));

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechOutput = requestAttributes.t("SUCCESSFULL_HELLO_WORLD_REQUEST");
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .getResponse();
    },
};
