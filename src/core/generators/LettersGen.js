import {BaseGen} from './BaseGen';

export class LettersGen extends BaseGen {
    static create() {
        return new LettersGen();
    }
    chars = 'abcdefghijklmnopqrstuvwxyz';
    /**
     * @returns {string} single character
     */
    generate(){
      const index = Math.floor(Math.random()* this.chars.length);
      const symbol = this.chars[index];
      return this.upperCase ? symbol.toUpperCase() : symbol;
    }
    withUpperCase() {
        this.upperCase = true;
        return this;
    }
}

