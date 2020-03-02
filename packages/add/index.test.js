const add = require('.')

describe('add', () => {
  it('should add correctly', () => {
    expect(add(2, 3)).toBe(5)
  })
})