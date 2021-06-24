import { useState} from 'react';
import axios from 'axios';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const authObject = { 'Project-ID': "6fc506ee-347f-469c-b1d5-4951b94d6a8f", 'User-Name': username, 'User-Secret': password};
    try{
      await axios.get('https://api.chatengine.io/chats', {headers: authObject});
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
       setError('');
    }catch(error){
      setError("oops, incorrect credentials...")
    }
  }
  return (
    <div className="wrapper">
        <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="UserName" required/>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required/>
          <div align="center">
            <button type="submit" className="button">
               <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
        </div>
    </div>
  );
}
export default LoginForm;
