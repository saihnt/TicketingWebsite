import './loginPageSetup.css'

function App() {
  const [formData, setFormData] = usestate({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const[resgisterData, setRegisterData] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registerSuccess,, SetRegisterSuccess] = useState('');
  const [loginError, setLloginError] = useState('');

//this is for checking is user is already logged in

useEffect(() => {
  const 
})
  return (
    <div className="overallContainer">
      <div className="loginContainer">
        <div className="headerContainer">
          <div className="logoBox">PUT LOGO HERE</div>
          <div className="headerText">
            <p className="eyebrow">Welcoome to EN-Tech System</p>
            <h1>Login</h1>
          </div>
        </div>

        
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter email" />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password" />
          </div>

          <div className="utilityRow">
            <label className="checkboxRow">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <p>Not registered?</p>
            <a href="#">Sign up</a>
          </div>
          

          <button type="submit" className="loginButton">Log In</button>
        

      </div>
    </div>
  )
}

export default App
