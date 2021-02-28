describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75)
    })
  });

  it('vol changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33)
    })
  });

  it('audio', ()=>{
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume',.33)
    })
  });


  it('snd and image change with selection', ()=>{
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    })
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    })
  });
  it('volImage changes when volume input changes 1', ()=>{
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
    })
  });
  it('volImage changes when volume input changes 34', ()=>{
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
    })
  });
  it('volImage changes when volume input changes 67', ()=>{
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
    })
  });

  it('Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
       
      expect($el).to.have.attr('disabled','disabled');
    })
  });

  it('reading errors', ()=>{
    cy.get('#volume-number').clear().type('-3');
    cy.get('#party-horn-form').within(() => {
      cy.get('input:invalid').should('have.length',1)
    })
  });
});
