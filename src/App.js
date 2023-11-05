import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { auth, db } from './config/firebase.config';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import Spinner from './components/Spinner';
import { useDispatch } from 'react-redux';
import { SET_USER } from './context/actions/userActions';
import NewProject from './pages/NewProject';
import { Toaster } from 'react-hot-toast';
import { SET_PROJECTS } from './context/actions/projectActions';

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        setDoc(doc(db, 'users', userCred?.uid), userCred?.providerData[0]).then(
          () => {
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

  useEffect(() => {
    const projectsQuery = query(
      collection(db, 'Projects'),
      orderBy('id', 'desc')
    );

    const unSubscribe = onSnapshot(projectsQuery, querySnaps => {
      const projectsList = querySnaps.docs.map(doc => doc.data());
      dispatch(SET_PROJECTS(projectsList));
    });

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
            <Route path="/newProject" element={<NewProject />} />
            <Route path="*" element={<Navigate to={'/home'} />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      )}
    </>
  );
}

export default App;
