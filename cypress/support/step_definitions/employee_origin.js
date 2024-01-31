
import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
const EmployeeTreeGridPO = require('../page_objects/Employee/employee_tree_gridpo.js');
const employeeTreeGridPage = new EmployeeTreeGridPO();
const qs = require("qs");
 
 


  When('check Selected Data', function() {
    // Click on the "Collapse All" button
    employeeTreeGridPage.ButtonGrid().click();
 
    // Get the total number of rows dynamically
    employeeTreeGridPage.getTotalRows().then((totalRows) => {
      // Select all checkboxes except the last one
      for (let i = 0; i < totalRows; i++) {
        console.log(totalRows);
        const checkboxElement = employeeTreeGridPage.getCheckboxFromRow(i);
        checkboxElement.click({ force: true });
      }
 
      // Click on the "Show Data" button
      employeeTreeGridPage.ButtonShowData().click();
 
      // Loop through each row to check the selected data
      for (let i = 0; i < totalRows; i++) {
        // Get the actual data from the selected list item
        const listItem = employeeTreeGridPage.getlistitem(i);
 
        // Use cy.then to handle the asynchronous nature and assert inside it
        listItem.invoke('text').then((listItemText) => {
          const trimmedText = listItemText.trim();
 
          // Get the expected data from the page object inside the then block
          employeeTreeGridPage.getFirstNameFromRow(i).then((name) => {
            employeeTreeGridPage.getCityFromRow(i).then((city) => {
              const expectedText = `${name} is from ${city}`;
 
              // Assert that the actual data matches the expected data
              cy.wrap(trimmedText).should('eq', expectedText);
            });
          });
        });
      }
    });
  });
 
  When('check Selected Data after deleting rows one by one', function() {
    // Click on the "Collapse All" button
    employeeTreeGridPage.ButtonGrid().click();
 
    // Get the total number of rows dynamically
    employeeTreeGridPage.getTotalRows().then((totalRows) => {
      // Select all checkboxes except the last one
      for (let i = 0; i < totalRows; i++) {
        const checkboxElement = employeeTreeGridPage.getCheckboxFromRow(i);
        checkboxElement.click({ force: true });
      }
 
      // Click on the "Show Data" button
      employeeTreeGridPage.ButtonShowData().click();
 
      // Loop through each row to delete one by one
      for (let rowIndex = totalRows -1; rowIndex >= 0; rowIndex--) {
        // Select the checkbox for deletion
        const checkboxElement = employeeTreeGridPage.getCheckboxFromRow(rowIndex);
        checkboxElement.click({ force: true });
 
        // Click on the "Show Data" button
        employeeTreeGridPage.ButtonShowData().click();
 
        // Get the actual data from the selected list item
        const listItem = employeeTreeGridPage.getlistitem(rowIndex);
 
        // Use cy.then to handle the asynchronous nature and assert inside it
        listItem.should('not.exist');
      }
    });
  });

