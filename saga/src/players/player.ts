import { Ability } from '../abilities/ability';

export enum playerClasses {
  Mage,
  Archer,
  Knight,
}

export abstract class Player {
  protected _abilities: Ability[] = [];
  protected _name: string;
  protected _class: string;
  protected _classid: playerClasses;
  protected _health: number;
  protected _atk: number;
  protected _stunnedState: boolean = false;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this.health = playerHealth;
    this._atk = playerAtk;
  }

  public useAbility(caster: Player, ability: Ability, damage: number) {
    this.health = Math.max(0, this.health - damage); // Убедимся, что здоровье не станет отрицательным
  }

  public abstract useSpecialAbility(target: Player): void;

  // Пропуск хода, если игрок оглушен
  public skipTurn(): boolean {
    if (this._stunnedState) {
      console.log(`${this.name} пропускает ход из-за оглушения.`);
      this._stunnedState = false; // Сбрасываем флаг после пропуска хода
      return true;
    }
    return false;
  }

  // Установка состояния оглушения
  public setStunnedState(stunned: boolean): void {
    this._stunnedState = stunned;
  }

  // Геттеры и сеттеры
  public get stunnedState(): boolean {
    return this._stunnedState;
  }

  public get health(): number {
    return this._health;
  }

  protected set health(hp: number) {
    this._health = Math.max(0, hp); // Убедимся, что здоровье не станет отрицательным
  }

  public get classid(): playerClasses {
    return this._classid;
  }
  public get StunnedState(): boolean {
    return this._stunnedState;
  }

  public get name(): string {
    return this._name;
  }

  public get class(): string {
    return this._class;
  }

  public get atk(): number {
    return this._atk;
  }
}