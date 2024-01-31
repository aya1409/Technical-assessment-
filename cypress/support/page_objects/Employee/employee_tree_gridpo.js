class EmployeeTreeGridPO {
  getColumnFirstName = () => cy.get('#columntabletreeGrid > div:nth-child(1) > div > div:nth-child(1)');

  getColumnLastName = () => cy.get('#columntabletreeGrid > div:nth-child(2) > div > div:nth-child(1) > span');

  getColumnTitle = () => cy.get('#columntabletreeGrid > div:nth-child(3) > div > div:nth-child(1)');

  getColumnCity = () => cy.get('#columntabletreeGrid > div:nth-child(4) > div > div:nth-child(1)');
  getColumnElement(columnIndex) {
    const columnSelector = `#columntabletreeGrid > div:nth-child(${columnIndex}) > div > div:nth-child(1)`;
    return cy.get(columnSelector);
  }

  getFirstNameFromRow = (rowIndex) => {
    const rowSelector = `#row${rowIndex}treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-title`;
    return cy.get(rowSelector).invoke('text').then((text) => text.trim());
  };
  getCityFromRow = (rowIndex) => {
    const rowSelector = `#row${rowIndex}treeGrid > [style="max-width:200px; width:200px;border-right-width: 0px;"]`;
    return cy.get(rowSelector).invoke('text').then((text) => text.trim());
  };  
  
  getCheckboxFromRow = (rowIndex) => cy.get(`#row${rowIndex}treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox`);

  getCellsElement = (rowId) => cy.get(rowId).find('td');

  getRowElement = (i) => {
    const rowId = `#row${i}treeGrid`;
    return cy.get(rowId);
  };

  ButtonGrid = () => cy.get('.jqx-tree-grid-collapse-button');
  ButtonShowData = () => cy.get('#btn');

  getlistitem = (rowIndex) => cy.get(`#listitem${rowIndex}listBoxSelected > .jqx-listitem-state-normal`);

  getTotalRows() {
    // Assuming each row has a 'td' element
    return cy.get('.jqx-grid-cell-nowrap').its('length').then((length) => length);
  }
  
  
}


export default EmployeeTreeGridPO;
