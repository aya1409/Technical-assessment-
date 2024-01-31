/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = function setupNodeEvents(on, config) {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", browserify.default(config));
    allureWriter(on, config);
    let storage = [];
    let feedsGroup = [];
    on("task", {
        checkIfFileExists(filename) {
            if (utils.fileExistsWithCaseSync(filename)) {
                return fs.readFileSync(filename, "utf8");
            }
            return null;
        },
        setStorage: (val) => {
            return (storage.push(val));
        },
        getAllStorage :(val) => {
            const matchingItems = storage.filter(item => Object.keys(item).find(itemKey => itemKey === val));
            return matchingItems.map(item => item[val]);
        },
        getStorageListsName:()=>{
            const allKeys = [];
            for (const item of storage) {
                // Get the keys (property names) of the current object
                const keys = Object.keys(item);

                // Push the keys to the 'allKeys' array
                allKeys.push(...keys);
            }
            return allKeys;
        },

        getStorage: (val) => {
            return storage.find(item => Object.keys(item).find(item => item == val))[val];
        },
        clearStorage: () => {
            return storage = [];
        },
        removeItem: (val) => {
            return storage.splice(storage.findIndex((obj) => Object.keys(obj) == val));
        },
        replaceStorageItem: (val) => {
            let updateArray = val.split("=");
            return storage.find(item => Object.keys(item).find(item => item == updateArray[0]))[updateArray[0]] = updateArray[1];
        },
        push2FeedsGroup: (val) => {
            return feedsGroup.push(val);
        },
        getFeedsGroup: () => {
            return feedsGroup;
        }
    });
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

