import { LettersGen } from './LettersGen';
describe('LettersGen', () => {

    test('Should generate random symbol from chars propperty', () => {
        const gen = LettersGen.create();
        const symbol = gen.generate();
        expect(gen.chars.indexOf(symbol)).not.toBe(-1);
    });

    test('Should generate random symbol from chars propperty in upper case', () => {
        const gen = LettersGen.create().withUpperCase();
        const symbol = gen.generate();
        expect(symbol).toEqual(symbol.toUpperCase());
    });

})