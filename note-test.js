
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Assertion failed: " + assertionToCheck + " is not truthy");
    };
  }
};



(function(exports) {

  var n  = 0;
  function testNoteObjectId() {

    var note = new Note("message");
    var note2 = new Note("whatever");
    pass = note.id === 0;
    assert.isTrue(pass);
    formatOutput('testNoteObjectId', pass)
    pass = note2.id === 1;
    assert.isTrue(pass);
    formatOutput('testNoteObjectId', pass)
  };
  testNoteObjectId();

  function testNoteObject() {
    var note = new Note("message");
    pass = note.readText() === "message"
    assert.isTrue(pass);
    formatOutput('testNoteObject', pass)
  };
  testNoteObject();

})(this);


(function(exports) {
  function testNoteListObject() {
    var noteList = new NoteList();
    var note1 = { text: "Favourite drink: seltzer"}
    noteList.add(note1);
    assert.isTrue(noteList.list[0].text === "Favourite drink: seltzer");
    pass = noteList.readList()[0].text === "Favourite drink: seltzer"
    assert.isTrue(pass);
    formatOutput('testNoteListObject', pass)

  };
  testNoteListObject();
})(this);


(function(exports) {
  function testNoteListViewObject() {
    var noteList = { list:  [{text: "Favourite food: pesto", id: 0}, {text: "Favourite drink: seltzer", id: 1}]};
    var noteListView = new NoteListView(noteList);
  pass = noteListView.view() === "<ul><li><div><a href='' id='0'>Favourite food: pest</a></div></li><li><div><a href='' id='1'>Favourite drink: sel</a></div></li></ul>";
  // console.log(noteListView.view());
  assert.isTrue(pass);
  formatOutput('testNoteListViewObject', pass)
  };
  testNoteListViewObject();
})(this);

(function(exports) {
  function testNoteController() {
    function DocumentDouble() {
      this.tags = {};
    }
    function Tag(){
      this.innerHTML = ""
    }
    DocumentDouble.prototype.getElementById = function (id) {
      if (!(id in this.tags)) {
        this.tags[id] = new Tag();
      };
      return this.tags[id];
    };
    var documentDouble = new DocumentDouble()
    var noteList = new NoteList()
    var noteController = new Controller(noteList);
    noteController.showNoteListView(documentDouble)
    console.log(documentDouble.getElementById("app").innerHTML);
    pass = documentDouble.getElementById("app").innerHTML === "<ul><li><div><a href='' id='0'>Favourite drink: sel</a></div></li></ul>";
    assert.isTrue(pass);
    formatOutput('testNoteController', pass)
    // noteController.showNoteListView();                             <ul><li><div>Favourite drink: seltzer.</div></li></ul
    // console.log(noteController.printElement());
    // assert.isTrue( noteController.printElement() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  };
  testNoteController();
})(this);

(function(exports) {
  function testSingleNoteView() {
  note = {text: 'Favourite drink: seltzer'};
  var singleNoteView = new SingleNoteView(note);
  pass = singleNoteView.createHtmlELement() === '<div>Favourite drink: seltzer</div>';
  assert.isTrue(pass);
  formatOutput('testSingleNoteView', pass)
  };
  testSingleNoteView();
})(this);
