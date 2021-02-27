const src = require('../assets/scripts/main');
test('fVIP66', () => {
    
    expect(src(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
});
test('fVIP34', () => {
    expect(src(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
});
test('fVIP1', () => {
    expect(src(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
});
test('fVIPn1', () => {
    expect(src(-1)).toBe(`./assets/media/icons/volume-level-0.svg`);
});