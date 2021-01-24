import React from 'react';
import { PasswordGenerator } from './PasswordGenerator';
import { STRATEGIES_NAME, GeneratorsFactory } from '../core/GeneratorsFactory';

const ALL_STRATEGIES = Object.values(STRATEGIES_NAME);

class PasswordGeneratorContainer extends React.Component {
    state = {
        suggestedPassword: '',
        length: 5,
        strategies: new Set(ALL_STRATEGIES),
    };

    componentDidMount() {
        this.iniGenerator();
        this.getPassword();
    }
    iniGenerator = () => {
        const { length, strategies } = this.state;
        this.generator = GeneratorsFactory.create(length, strategies);
    }
    getPassword = () => {
        const suggestedPassword = this.generator.generate();
        this.setState((state) => ({ ...state, suggestedPassword }));
    };

    generatePassword() {}

    setLength = (length) => {
        this.generator.setLength(length);
        this.setState((state) => ({ ...state, length }), 
        () => this.getPassword()
        );
    }
    toggleStrategy(strategyName) {}

    render() {
        const { suggestedPassword, length } = this.state;
        return (
            <PasswordGenerator
                suggestedPassword={suggestedPassword}
                onLengthChange={this.setLength}
                length={length}
                strategyList={ALL_STRATEGIES}
            />
        );
    }
}
export default PasswordGeneratorContainer;