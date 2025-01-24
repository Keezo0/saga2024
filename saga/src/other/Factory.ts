import { Archer } from "../players/archer";
import { Knight } from "../players/knight";
import { Mage } from "../players/mage";
import { Player, playerClasses } from "../players/player";

export abstract class PlayerGen {
  public static generateRandomPlayer(): Player {
    const names = ['Джейс', 'Уильям', 'Кэтрин', 'Элизабет', 'Виктор'];
    const randomName = names[Math.floor(Math.random() * names.length)];

    // Генерация здоровья в диапазоне от 35 до 50
    const randomHealth = Math.floor(Math.random() * (50 - 35 + 1)) + 35;

    // Генерация атаки в диапазоне от 15 до 25
    const randomAtk = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

    // Случайный выбор класса
    const randomClassId = Math.floor(Math.random() * 3);

    // Создаем экземпляр игрока в зависимости от выбранного класса
    switch (randomClassId) {
      case playerClasses.Mage:
        return new Mage(randomName, randomHealth, randomAtk);
      case playerClasses.Archer:
        return new Archer(randomName, randomHealth, randomAtk);
      case playerClasses.Knight:
        return new Knight(randomName, randomHealth, randomAtk);
      default:
        throw new Error("Неизвестный класс игрока");
    }
  }
}

// const randomPlayer = PlayerGen.generateRandomPlayer();
// console.log(randomPlayer.name, randomPlayer.health, randomPlayer.atk, randomPlayer.class);