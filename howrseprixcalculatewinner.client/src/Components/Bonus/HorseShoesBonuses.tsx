import BonusSelector from '../Bonus/BonusSelector';
import { BonusSelectorProps } from "../Bonus/Bonus";
import '../SkillFormFieldStyle.css';



function HorseShoesBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    return (
        <BonusSelector
            selectedBonus={selectedBonus}
            onBonusChange={onBonusChange}
            title={title}
            prefix={prefix}
            bonusType="horseShoesBonuses"
            fetchUrl="bonuscategory/AllBonuses"
        />
    );
}

export default HorseShoesBonuses;