import { useState } from 'react';

function App() {
  const [info, setInfo] = useState({
    name: 'CHUN',
    age: 20,
    address: 'Ha Noi'
  });

  const handleUpdate = () => {
    setInfo(prev => (
      {
        ...info,
        bio: "Đẹp zai"
      }
    ));
  }

  return (
    <div className='App'>
      <h1>
        {JSON.stringify(info)}
      </h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
