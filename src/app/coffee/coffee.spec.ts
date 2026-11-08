/// <reference types="jasmine" />

import { Coffee } from './coffee';

describe('Coffee', () => {
  it('should create an instance', () => {
    expect(new Coffee(
      1,
      "Blend",
      "Altiplano",
      "Chocolate",
      1540,
      "http://example.com/example.png"
    )).toBeTruthy();
  });
});
