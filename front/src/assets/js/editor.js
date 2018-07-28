let editor;

window.addEventListener('load', function() {
  editor = ContentTools.EditorApp.get();
});

class Editor {
  show( ) {
    editor.init('*[data-editable]', 'data-name');
  }
}

module.exports = Editor;