import './App.css';
import Profile from './Profile/profile';



function App() {
  const handleName = (e) =>
  {
    alert('Chuks Chito')
  };
  return(
    <div style={{ display: 'flex', height: '100%', color: 'pink'}}>
      <Profile title="Profile" fullName="Chuks Chito" bio="I am a 500l student of fupre, studying Petroleum Engineering. I am sultry, crazy, smart, intelligent and beautiful. I am capable of accomplishing whatsover i want through Christ" profession="Software Engineer, Hair business owner and a student">
          <img src='./propsimg.jpg' alt='assignment' className='port'/>
      </Profile>
      <handleName>
        <button style={{textAlign: 'center'}} onClick={handleName}>click me</button>
      </handleName>
    </div>
  )
}

export default App;
