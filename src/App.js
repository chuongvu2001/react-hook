import { useState } from 'react';

const course = [
  {
    id: 1,
    name: 'Chun'
  },
  {
    id: 2,
    name: 'Vu'
  },
  {
    id: 3,
    name: 'DepZai'
  }
];

function App() {
  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {
    console.log({
      id: checked
    });
  }

  return (
    <div className='App'>
      {course.map(cour => (
        <div key={cour.id}>
          <input type="radio" checked={checked === cour.id} onChange={() => setChecked(cour.id)} />
          {cour.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
