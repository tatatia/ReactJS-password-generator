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

    generatePassword() { }

    setLength = (length) => {
        this.generator.setLength(length);
        this.setState((state) => ({ ...state, length }), this.getPassword);
    };

    removeStrategy = (strategyName) => {
        const { strategies } = this.state;
        if (strategies.size === 1) {
            return;
        }
        const updateStrategies = new Set(strategies);
        updateStrategies.delete(strategyName)
        this.setState((state) => ({ ...state, strategies: updateStrategies }),
            this.getPassword
        );
    };

    addStrategy = (strategyName) => {
        const strategies = new Set(this.state.strategies);
        strategies.add(strategyName);
        this.setState((state) => ({ ...state, strategies }), this.getPassword);
    };

    toggleStrategy = (strategyName) => {
        const { strategies } = this.state;
        if (strategies.has(strategyName)) {
            this.removeStrategy(strategyName);
        } else {
            this.addStrategy(strategyName);
        }
    }

    render() {
        const { suggestedPassword, length, strategies } = this.state;
        return (
            <PasswordGenerator
                suggestedPassword={suggestedPassword}
                onLengthChange={this.setLength}
                onStrategyChange={this.toggleStrategy}
                length={length}
                strategyList={ALL_STRATEGIES}
                activeStrategies={[...strategies]}
            />
        );
    }
}
export default PasswordGeneratorContainer;