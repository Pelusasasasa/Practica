import powers from "../data/powet";
import { Power } from '../data/powet';

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){};

    get power(): string{
        return powers.find((power: Power) => power.id === this.powerId)?.desc || 'not found'
    }
};

export class Hero2 {};
export class Hero3 {};
export class Hero4 {};