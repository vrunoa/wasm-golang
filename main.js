require('./wasm_exec.js');
const fs = require('fs');

async function bridge(who) {
  try {
    /*eslint-disable no-undef */
    const go = new Go();
    const mod = await WebAssembly.compile(fs.readFileSync('./main.wasm'));
    let inst = await WebAssembly.instantiate(mod, go.importObject);
    go.run(inst);
    const printMessage = (who) => {
      return new Promise((res, rej) => {
        global.printMessage(who, (err, msg) => {
          if (err) return rej(err);
          res(msg);
        });
      });
    };
    let msg = await printMessage(who);
    return msg;
  } catch (e) {
    console.error(e);
  }
}

if (require.main == module) {
  (async () => {
    let msg = await bridge('Ghostbusters');
    console.log(msg);
  })();
}

exports.bridge = bridge;
