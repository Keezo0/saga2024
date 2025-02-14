import { Ability } from '../abilities/ability';
import { Logger } from '../other/logger';

export enum PlayerClasses {
  Mage,
  Archer,
  Knight,
}

export abstract class Player {
  protected _abilities: Ability[] = [];
  protected _name: string;
  protected _class: string;
  protected _classid: PlayerClasses;
  protected _health: number;
  protected _atk: number;
  protected _stunnedState: boolean = false;
  protected _usedSpecialAbility: boolean = false;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this.health = playerHealth;
    this._atk = playerAtk;
  }

  public useAbility(caster: Player, ability: Ability, damage: number) {
    this.health = Math.max(0, this.health - damage);
  }

  public abstract useSpecialAbility(target: Player): void;

  public skipTurn(): boolean {
    if (this._stunnedState) {
      Logger.logSkipTurn(this.classid, this.name);
      this._stunnedState = false;
      return true;
    }
    return false;
  }

  public setStunnedState(stunned: boolean): void {
    this._stunnedState = stunned;
  }

  public get stunnedState(): boolean {
    return this._stunnedState;
  }

  public get health(): number {
    return this._health;
  }

  protected set health(hp: number) {
    this._health = Math.max(0, hp);
  }

  public get abilities(): Ability[] {
    return this._abilities;
  }

  public get classid(): PlayerClasses {
    return this._classid;
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
