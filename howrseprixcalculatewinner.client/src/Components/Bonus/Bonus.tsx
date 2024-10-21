export interface Bonus {
    name: string;
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
}

export interface BonusSelectorProps {
    selectedBonus: Bonus | null;
    onBonusChange: (bonus: Bonus) => void;
    title: string;
    prefix: string;
}

export interface BonusState {
    customization: Bonus;
    styling: Bonus[];
    companion: Bonus;
    saddle: Bonus;
    saddleCloth: Bonus;
    bridle: Bonus;
    earBonnet: Bonus;
    horseShoes: Bonus;
    pack: Bonus;
    poloWrapper: Bonus;

}