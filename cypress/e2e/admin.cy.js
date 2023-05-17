describe('Admin page', () => {
    it('should add new project', () => {
      cy.visit('/admin');

      cy.contains("button", "Add new project").click();

      cy.get("input[name='name']").clear().type("My project");
  
      cy.get("textarea[name='description']").clear().type("New description");
  
      cy.get("textarea[name='overview']").clear().type("Project overview");
  
      cy.get("input[name='tools']").parent().click();
      cy.contains("li", "HTML").click();
      cy.contains("li", "Django").click().type("{esc}");

      cy.get("input[name='imageUrl']").clear().
      type('https://micoach.itj.com/assets/micoach_logo.png');

      cy.contains('button', 'Add project').click();
      
      // Expect
      cy.contains('My project');
      cy.contains('New description');
      cy.get('img')
      .filter("[src='https://micoach.itj.com/assets/micoach_logo.png']")
      .first()
      .should('exist');
    });
  });