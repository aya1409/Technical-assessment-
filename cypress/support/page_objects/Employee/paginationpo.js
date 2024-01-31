class PaginationPO {
    getNextPageButton() {
        return cy.get('.jqx-rc-all.jqx-button.jqx-widget.jqx-fill-state-normal[title="next"]');
    }

    getPreviousPageButton() {
        // Adjust the selector based on the actual HTML structure
        return cy.get('.jqx-rc-all.jqx-button.jqx-widget.jqx-fill-state-normal[title="previous"]');
    }

    getPageNumber = () => cy.get('#pagertreeGrid > div > div:nth-child(6) > input') 
    getItemsPerPageDropdown = () => cy.get('#dropdownlistArrowgridpagerlistbottomtreeGrid > .jqx-icon-arrow-down') ;
    
    getPaginationContainer = () => cy.get('#columntabletreeGrid > div:nth-child(4) > div > div:nth-child(1)');
    
    selectItemsPerPage= (rowIndex) => {
        const rowSelector = `#listitem${rowIndex}innerListBoxgridpagerlistbottomtreeGrid > .jqx-listitem-state-normal`;
        return cy.get(rowSelector);
      };

      
}

export default PaginationPO;