import React from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { content: "Przejść na Reacta", done: false },
  { content: "zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraSectionContent={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        extraSectionContent={<List tasks={tasks} hideDone={hideDone} />}
      />
    </Main>
  );
}

export default App;
