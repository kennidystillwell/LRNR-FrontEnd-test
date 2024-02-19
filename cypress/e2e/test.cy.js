describe('LRNR App Tests', () => {
  //homepage tests
  describe('Homepage Tests', () => {
    it('successfully loads the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Your guided path to programming enlightenment');
    });
    //checks for presence of "Begin Journey" button/link
    it('finds the "Begin Journey" link on the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('a#download-button.btn-large.waves-effect.waves-light.teal').should('be.visible').and('contain', 'Begin Journey');
    });
  });

  //categories page tests
  describe('Categories Page Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/categories');
    });
  
    it('checks for the presence of main form elements', () => {
      //checks for form's main heading
      cy.contains('h3', 'Quiz Generation Options').should('be.visible');
  
      //checks for dropdowns by associated labels
      cy.contains('label', 'Topic').should('be.visible');
      cy.contains('label', 'Expertise').should('be.visible');
      cy.contains('label', 'Number of Questions').should('be.visible');
      cy.contains('label', 'Style of Questions').should('be.visible');
  
      //checks for the 'generate quiz' button
      cy.get('button').contains('Generate Quiz').should('be.visible');
    });
  });

  //account page test
  describe('Account Page Test - lrnr Level Section', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/account');
    });
  
    it('verifies the presence of lrnr Level information', () => {
      //checks for the lrnr Level section
      cy.contains('.header-5', 'lrnr Level: 2').should('be.visible');
      cy.contains('.light', '150/200 xp').should('be.visible');
    });
  });
  
});
