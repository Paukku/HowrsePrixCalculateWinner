import BonusSelector from '../Bonus/BonusSelector';
import { BonusSelectorProps } from "../Bonus/Bonus";
import '../SkillFormFieldStyle.css';

function CompanionBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    return (
        <BonusSelector
            selectedBonus={selectedBonus}
            onBonusChange={onBonusChange}
            title={ title }
            prefix={prefix}
            bonusType="companionBonuses" 
            fetchUrl="bonuscategory/AllBonuses"
        />
    );
}

export default CompanionBonuses;