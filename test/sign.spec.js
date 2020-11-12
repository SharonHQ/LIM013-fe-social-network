import { createUserAccount } from '../src/firebase/authencation.js';

describe('createUserAccount', () => {
  it('should be a function', () => {
    expect(typeof createUserAccount).toBe('function');
  });
  it('should return...', () => {
    expect(createUserAccount('storm@gmail.com', '123456A')).toBe('');
  });
});
