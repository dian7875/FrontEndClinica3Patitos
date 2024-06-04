describe('Register A User',()=>{
  it('Register OK',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('a').contains('Login').click();
    cy.get('button').contains('Back').click();
    cy.get('a').contains('Login').click();
    cy.get('button').contains('Sing Up').click();
    cy.get('[name=user_Name]').type('Cypress Test',{force:true});
    cy.get('[name=email]').type('dian7875.a@gmail.com',{force:true});
    cy.get('[name=phone]').type('+506 0000-0000', {force:true});
    cy.get('[name=password]').type('123', {force:true});
    cy.get('[type=submit]').eq(1).click({force:true})
  })
})

describe('Login User',()=>{
  it('LOGIN OK',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('a').contains('Login').click();
    cy.get('[name=Email]').type('dian7875.a@gmail.com',{force:true});
    cy.get('[name=Password]').type('123', {force:true});
    cy.get('[type=submit]').eq(0).click({force:true})
    cy.wait(2000)
    cy.get('a').contains('My Apointtments').click({force:true});
    cy.wait(200)
    cy.get('[name=id_Appoitment_Type]').eq(0).select('2') 
    cy.get('[name=id_ClinicBranch]').eq(0).select('3')
    cy.get('button').contains('Reserve').click()
    cy.get('button').contains('Yes').click()
    cy.wait(1000)
    cy.get('button').contains('Edit').eq(0).click()
    cy.get('[name=id_Appoitment_Type]').eq(1).select('1',{force:true})
    cy.get('button').contains('Save').eq(0).click({force:true})
    cy.get('button').contains('Yes').click()
    cy.wait(1000)
    cy.get('button').contains('Edit').eq(0).click()
    cy.get('button').contains('Delete').eq(0).click({force:true})
    cy.get('button').contains('Yes, delete it!').click()
    cy.wait(1000)
    cy.get('button').contains('Edit').eq(0).click({force:true})
    cy.get('button').contains('Cancel').eq(0).click({force:true})
    cy.get('button').contains('Yes').click()
  })
})

