import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebase';

import './styles.css';

export default function Login({history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const user_uid = sessionStorage.getItem('userKeyAdmUndetermined');

    if (user_uid) {
      history.push('/');
    }
    
  }, [history])

function handleSubmit (e) {
    e.preventDefault();
    
    if (!email || !password) {
      setErrors('E-mail ou senha não foram preenchidos');
      setPassword('');
      return false;
    }

    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
              const user_uid = user.user.uid;
              sessionStorage.setItem('userKeyAdmUndetermined', user_uid);
              history.push('/');
            })
            .catch(function(error) {
              setErrors(error.message);
              return false;
            });

    
    
  }
  return (
    <div className="container-fluid d-flex flex-column justify-content-between align-items-center container-login">
      <div className="container-title">
        <h2 className="text-center text-white">Undetermined Studios</h2>
      </div>
      <div className="card card-width">
        <div className="card-header">
          <h3 className="text-center">Login</h3>
        </div>
        <div className="card-body">
          <p className="text-center text-danger p-0 m-1">{errors}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="e-mail" value={email} onChange={ e => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>

            <button className="btn btn-dark btn-block">Entrar</button>
          </form>
        </div>
      </div>

      <footer>
        <nav className="navbar fixed-bottom navbar-light bg-dark">
          <div className="social-media">
            <ul>
              <li>
                  <a  
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
              </li>
              <li>
                  <a  
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </a>
              </li>
              <li>
                  <a  
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-square fa-2x" />
                    </a>
              </li>
              <li>
                  <a  
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp-square fa-2x" />
                    </a>
              </li>
              <li>
                  <a  
                    href="https://telegram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram fa-2x" />
                    </a>
              </li>
              <li>
                  <a  
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-discord fa-2x" />
                    </a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand text-white" href="/contato">Reserved Undetermined Studios {new Date().getFullYear()}</a>
        </nav>
      </footer>

    </div>
  );
}
