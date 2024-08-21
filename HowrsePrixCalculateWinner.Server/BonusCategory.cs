namespace HowrsePrixCalculateWinner.Server
{
    public abstract class BonusCategory
    {
        public string? Name { get; set; }
        public int Stamina { get; set; }
        public int Speed { get; set; }
        public int Dressage { get; set; }
        public int Gallop { get; set; }
        public int Trot { get; set; }
        public int Jumping { get; set; }
    }

    public class CustomizationBonus : BonusCategory { }
    public class EquipmentBonuses : BonusCategory { }
    public class ExtraBonuses : BonusCategory { }
    public class CompanionBonuses: BonusCategory { }
}
