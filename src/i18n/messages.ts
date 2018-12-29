"use strict";

/* tslint:disable:max-line-length */

/**
 * Interface for Alexa Language String Resources
 */
interface ILanguageStrings {
    "en": ITranslation;
    "en-US": ITranslation;
    "en-CA": ITranslation;
}

/**
 * Interface for Alexa Language String Resources
 */
interface ITranslation {
    translation: ITranslationStrings;
}

/**
 * Interface for Alexa Language String Resources
 */
interface ITranslationStrings {
    [key: string]: string;
}

/**
 * Language strings used for skill.
 */
export const languageStrings: ILanguageStrings = {
    "en": {
        translation: {
            APP_NAME: "Hello World",
            ERROR_MESSAGE: "I'm sorry, something went wrong. Please try again later.",
            HELP_MESSAGE: "This is an Alexa Hello World skill. You can ask Alexa to say hello.",
            HELP_REPROMPT: "What can I help you with?",
            SKILL_NAME: "Hello World",
            STOP_MESSAGE: "Goodbye!",
            SUCCESSFULL_HELLO_WORLD_REQUEST: "Hello World",
            UNHANDLED_INTENT_MESSAGE: "I'm sorry, I wasn't able to process your request.",
        },
    },
    "en-CA": {
        translation: {
            APP_NAME: "Hello World",
            ERROR_MESSAGE: "I'm sorry, something went wrong. Please try again later.",
            HELP_MESSAGE: "This is an Alexa Hello World skill. You can ask Alexa to say hello.",
            HELP_REPROMPT: "What can I help you with?",
            SKILL_NAME: "Hello World",
            STOP_MESSAGE: "Goodbye!",
            SUCCESSFULL_HELLO_WORLD_REQUEST: "Hello World",
            UNHANDLED_INTENT_MESSAGE: "I'm sorry, I wasn't able to process your request.",
        },
    },
    "en-US": {
        translation: {
            APP_NAME: "Hello World",
            ERROR_MESSAGE: "I'm sorry, something went wrong. Please try again later.",
            HELP_MESSAGE: "This is an Alexa Hello World skill. You can ask Alexa to say hello.",
            HELP_REPROMPT: "What can I help you with?",
            SKILL_NAME: "Hello World",
            STOP_MESSAGE: "Goodbye!",
            SUCCESSFULL_HELLO_WORLD_REQUEST: "Hello World",
            UNHANDLED_INTENT_MESSAGE: "I'm sorry, I wasn't able to process your request.",
        },
    },
};
