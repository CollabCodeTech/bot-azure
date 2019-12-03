import commands from '../src/components/commands'

describe('#Commands', () => {
  describe('get()', () => {
    it('should return discord link when send !invite', () => {
      expect(commands.get('!invite')).toEqual('https://discord.gg/kYBtYPj')      
    })
  })
})