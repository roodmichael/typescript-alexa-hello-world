import { assert, expect } from "chai";
import * as nock from "nock";
import * as sinon from "sinon";
import * as va from "virtual-alexa";
import { languageStrings } from "../i18n/messages";

const SKILL_MODELS: any = {
    CA: "./model/en-CA.json",
    US: "./model/en-US.json",
};

/* tslint:disable */

/**
 * Creates an instance of Virtual Alexa using
 * the model passed into it.
 * @param model
 */
const createVirtualAlexa = (model : string, locale: string) : any => {
    return va.VirtualAlexa.Builder()
        .handler("build/index.handler")
        .interactionModelFile(model)
        .locale(locale)
        .create();
};

describe("en-US - INTEGRATION TESTS", () => {
    let alexa: any;
    let prompt: string;
    beforeEach(() => {
        alexa = createVirtualAlexa(SKILL_MODELS.US, "en-US");
    });
    describe("STANDARD INTENTS", () => {
        it("help intent plays help message", async () => {
            const launchResponse: any = await alexa.utter("help");
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.HELP_MESSAGE}</speak>`;
            const response = launchResponse.response.outputSpeech.ssml;
            expect(response).to.equal(expectedResponse);
        });
        it("launch intent plays help message", async () => {
            const launchResponse: any = await alexa.launch();
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.HELP_MESSAGE}</speak>`;
            const response = launchResponse.response.outputSpeech.ssml;
            expect(response).to.equal(expectedResponse);
        });
        it("unhandled intent plays unhandled message", async () => {
            const launchResponse: any = await alexa.intend("AMAZON.FallbackIntent", {});
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.UNHANDLED_INTENT_MESSAGE}</speak>`;
            const response = launchResponse.response.outputSpeech.ssml;
            expect(response).to.equal(expectedResponse);
        });
        it("Stop intent plays stop message", async () => {
            const launchResponse: any = await alexa.intend("AMAZON.StopIntent", {});
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.STOP_MESSAGE}</speak>`;
            const response = launchResponse.response.outputSpeech.ssml;
            expect(response).to.equal(expectedResponse);
        });
        it("Cancel intent plays stop message", async () => {
            const launchResponse: any = await alexa.intend("AMAZON.CancelIntent", {});
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.STOP_MESSAGE}</speak>`;
            const response = launchResponse.response.outputSpeech.ssml;
            expect(response).to.equal(expectedResponse);
        });
    });
    describe("HelloWorldIntent", () => {
        it("says expected hello world phrase", async () => {
            const intentResponse: any = await alexa.intend("HelloWorldIntent", {});
            const expectedResponse = `<speak>${languageStrings["en-US"].translation.SUCCESSFULL_HELLO_WORLD_REQUEST}</speak>`;
            prompt = intentResponse.response.outputSpeech.ssml;
            assert.include(prompt, expectedResponse);
        });
    });
});
