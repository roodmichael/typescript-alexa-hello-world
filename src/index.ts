const Alexa = require("ask-sdk-core");

import { SkillErrorHandler } from "./handlers/ErrorHandler";
import { ExitHandler } from "./handlers/ExitHandler";
import { HelloWorldHandler } from "./handlers/HelloWorldHandler";
import { HelpIntentHandler } from "./handlers/HelpIntentHandler";
import { LocalizationInterceptor } from "./interceptors/LocalizationInterceptor";
import { LaunchRequestHandler } from "./handlers/LaunchRequestHandler";
import { UnhandledIntentHandler } from "./handlers/UnhandledIntentHandler";

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        ExitHandler,
        HelloWorldHandler,
        HelpIntentHandler,
        LaunchRequestHandler,
        UnhandledIntentHandler
    )
    .addErrorHandlers(SkillErrorHandler)
    .addRequestInterceptors(LocalizationInterceptor)
    .lambda();
