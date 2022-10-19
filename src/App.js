import { Fragment, useState } from 'react';
import LoginForm from './Login/LoginForm';
import Header from './Layout/Header';
import { useSelector } from 'react-redux';
import AddStoryDash from './components/mainDasboard';
// import AddModal from './components/AddModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [email, setEmail] = useState('');
  // const [modalIsShown, setModalIsShown] = useState(false);

  const childToParent = (childdata) => {
    setEmail(childdata);
  };

  // const showModalHandler = () => {
  //   setModalIsShown(true);
  // };

  // const hideModalHandler = () => {
  //   setModalIsShown(false);
  // };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
      >
        <Header email={email} />
        {!isAuth && <LoginForm childToParent={childToParent} />}

        {isAuth && <AddStoryDash />}
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
