import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { auth, db } from './config/firebase.config';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import { doc, setDoc } from 'firebase/firestore';
import Spinner from './components/Spinner';
import { useDispatch } from 'react-redux';
import { SET_USER } from './context/actions/userActions';

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        setDoc(doc(db, 'users', userCred?.uid), userCred?.providerData[0]).then(
          () => {
            // TODO: dispatch to the store
            dispatch(SET_USER(userCred?.providerData[0]));
            navigate('/home/projects', { replace: true });
          }
        );
      } else {
        navigate('/home/auth', { replace: true });
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });

    // clean the listener even
    return () => unSubscribe();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen text-sm whitespace-nowrap md:text-base h-screen flex justify-start items-start overflow-hidden">
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="*" element={<Projects />} />
              <Route path="auth" element={<SignUp />} />
            </Route>
            <Route path="*" element={<Navigate to={'/home'} />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
