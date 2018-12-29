## Introduction

A Typescript Alexa hello world skill including strategies for integration and unit tests, automated deployment, and localization/i18n. Note, you will need to back into the deploy strategy from the buildspec as the README does not include instructions to setup automated deployments at the time of this writing.

## Installing dependencies

```
npm install
```

## Running unit tests

Integration/unit tests are run  using virtual-alexa, mocha, and chai.

```
npm run test
```

## Bundling

Deploy command creates a .zip file for upload to S3/Lambda. After running the below command, you can find your bundle in build/bundle.zip.

```
npm run deploy:beta
```

## Deployment Strategy 1 - Manual

The bundled code needs to be uploaded into AWS Lambda. To do so:

1. Open the AWS console and the hello world lambda function for your hello world alexa skill.
2. Scroll down to the *Function code* section.
3. Change the "Code entry type" dropdown to read "Upload a .zip file".
4. Change the "Handler" field to "index.hello".
5. Click the "Upload" button and select your .zip file.
6. Scroll back up to the top of the page and click the "save" button.

## Deployment Strategy 2 - Automated with Codebuild

TODO

## Built With

* [Npm](https://www.npmjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)

## Contributing

Feel free to send any PRs or feedback.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details