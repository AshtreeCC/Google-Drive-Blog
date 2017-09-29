// auto-save should trigger the document to run this publish script
function triggerOnSave() {
  
}

// or publish manually via a menu option
function onOpen() {
  ui = SpreadsheetApp.getUi();
  ui.createMenu('Blog')
      .addItem('Publish', 'putToFirebase')
      .addToUi();
}
