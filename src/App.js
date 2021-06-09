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

const hideDoneTasks = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
      />
      <Form />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
      <List
        tasks={tasks}
        hideDoneTasks={hideDoneTasks}
      />
    </Main>
  );
}

export default App;
