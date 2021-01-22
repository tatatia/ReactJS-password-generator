import {BaseGen} from './generators';

export class PasswordGenerate extends BaseGen{
    /**
     * 
     * @param {number} length 
     * @param {Array<BaseGen>} strategies 
     */
    constructor(length, strategies) {
        super();
        this. length = length;
        this. strategies;
    }
    generate() {
        let password = '';
        while(password.length < this.length){
        const strategy = this.strategies[this.getRandomIndex()]
        cons char = strategy.generate();
        password += char;    
    }
    return password;
    }
    /**
     * @private
     * @returns {number}
     */
    getRandomIndex(){
        return Math.floor(Math.random() * this.strategies.length);
    }
}