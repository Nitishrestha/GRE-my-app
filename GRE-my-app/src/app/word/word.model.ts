export class Word {

  constructor(
    public title: string,
    public grammarType: GrammarType,
    public isMastered: boolean,
    public meaning: Meaning,
    public sentence: Sentence,
    public type: Type
  ) {}
}

export enum GrammarType {
  ADJ,
  VERB,
  NOUN
}

export enum Type {
  POSITIVE,
  NEGATIVE,
  NONE
}

export class Meaning {
  constructor(
    public meaning: string[]
  ) {}
}

export class Sentence {
  constructor(
    public sentence: string[]
  ) {}
}
