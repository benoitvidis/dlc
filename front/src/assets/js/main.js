const Editor = require('./editor');

console.log(Editor);

class DLC {
  constructor () {
    this.editor = new Editor();
    this.kuzzle = null;
  }

}

window.dlc = new DLC();