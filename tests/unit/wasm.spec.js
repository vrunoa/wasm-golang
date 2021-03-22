const { bridge } = require('../../main');

describe('wasm-golang', () => {
  it('should get the correct value from wasm', async () => {
    const msg = await bridge('Ghostbusters');
    expect(msg).toEqual('Who u gonna call? Ghostbusters!!!');
  });
});
