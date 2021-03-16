export interface ITester {
  add(test: () => boolean): void;
  execute(): void;
}
