import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: new Date().toDateString(),
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: new Date().toDateString(),
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: new Date().toDateString(),
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: new Date().toDateString(),
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    setNotes([
      ...notes,
      { id: nanoid(), text: text, date: new Date().toDateString() },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText) // filters notes by search
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
