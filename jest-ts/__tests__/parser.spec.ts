import { Parser } from '../src/parser';

describe('Parser', () => {
  let parser: Parser;

  beforeEach(() => {
    parser = new Parser();
  });

  it('Shoud return an empty array for an empty ""', () => {
    // act
    const res = parser.parse('');
    // assert
    expect(res).toEqual([]);
  });
  it('Should parser string with one number as an array with the same number', () => {
    // arrange

    // act
    const res = parser.parse('');

    // assert
  });
});
