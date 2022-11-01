import { getPageHeader } from '../support/app.po';

describe('ecommerce', () => {
  beforeEach(() => cy.visit('/products'));

  it('should display home page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getPageHeader().contains('Products');
  });
});
