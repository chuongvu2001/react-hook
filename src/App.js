import { useEffect, useState } from 'react';

function App() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  const previewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }
  return (
    <div>
      <input type="file" onChange={previewAvatar} />

      {avatar && (<img src={avatar.preview} width="80%" />)}
    </div>
  );
}

export default App;
