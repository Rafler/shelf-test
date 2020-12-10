import React from 'react';
import {RoleSelector} from "./components/RoleSelector/RoleSelector";

function App() {
  return (
    <div>
      <RoleSelector
          onSelect={(select) => console.log(select)}
          onSubmit={(select) => console.log(select)}
          onChange={(select) => console.log(select)}
      />
    </div>
  );
}

export default App;
