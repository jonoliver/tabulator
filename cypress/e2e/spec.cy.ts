const getNote = (index = 0) => cy.get('[data-cy="note"]').eq(index);

const clickNote = (index = 0) => getNote(index).click();

const clickIncrement = () => cy.get('[data-cy="control-increment"]').click();
const clickDecrement = () => cy.get('[data-cy="control-decrement"]').click();
const getFretInput = () => cy.get('#control-fret-number');

describe('creating a simple tab', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[class^=riff_riff]').should('exist');
  });

  it('updating a single note', () => {
    clickNote().should('have.text', '0').classNameShould('contain', 'selected');

    getNote(1).classNameShould('not.contain', 'selected');

    clickNote(1)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    getNote().classNameShould('not.contain', 'selected');
  });

  it('clicking increment / decrement changes a single note values', () => {
    getFretInput().should('have.value', '0');
    clickNote().should('have.text', '0');

    clickIncrement();
    getFretInput().should('have.value', '1');
    getNote().should('have.text', '1');

    clickIncrement();
    getFretInput().should('have.value', '2');
    getNote(0).should('have.text', '2');

    clickDecrement();
    getFretInput().should('have.value', '1');
    getNote().should('have.text', '1');
  });

  it('clicking increment / decrement changes note values', () => {
    getFretInput().should('have.value', '0');
    clickNote(0)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickIncrement();
    getFretInput().should('have.value', '1');
    getNote(0).should('have.text', '1').classNameShould('contain', 'selected');

    clickNote(1)
      .should('have.text', '1')
      .classNameShould('contain', 'selected');

    getNote(0)
      .should('have.text', '1')
      .classNameShould('not.contain', 'selected');

    clickIncrement();
    getFretInput().should('have.value', '2');
    getNote(1).should('have.text', '2');
    getNote(0).should('have.text', '1');

    clickNote(0)
      .should('have.text', '1')
      .classNameShould('contain', 'selected');

    getNote(1)
      .should('have.text', '2')
      .classNameShould('not.contain', 'selected');

    getFretInput().should('have.value', '1');
  });

  it('changing note values handles zero values', () => {
    clickNote(0)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickNote(1)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickIncrement();

    getNote(1).should('have.text', '1').classNameShould('contain', 'selected');

    clickNote(0)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');
  });

  it('clearing note values', () => {
    clickNote(0).should('have.text', '0');
    clickNote(0).should('have.text', '');
    clickNote(1).should('have.text', '0');
    clickNote(1).should('have.text', '');
  });

  it('clearing note values when switching between notes', () => {
    clickNote(0)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickNote(1)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickNote(0)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickNote(0).should('have.text', '');

    clickNote(1)
      .should('have.text', '0')
      .classNameShould('contain', 'selected');

    clickNote(1).should('have.text', '');
  });
  // sometimes `undefined` goes into the query string
  // clamp fret number input values
  it('handles empty note values', () => {
    clickIncrement();
    clickNote().should('have.text', '1');
    getFretInput().type('{backspace}');
    getNote().should('have.text', '0');
  });
});
