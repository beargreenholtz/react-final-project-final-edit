import ButtonUI from '../UI/Button/FormButtonUI.js';
import Card from '../UI/Card/Card.js';
import classes from './MainDashboard.module.sass';
import AddStoryForm from './AddStoryForm.js';
import { useState, useEffect } from 'react';
import { id } from 'date-fns/locale';
import { Rating } from '@mui/material';
import React from 'react';
import StoryEdit from './StoryEdit';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddStoryDash = (props) => {
  const [story, setStory] = useState([]);
  const [isStoryEmpty, setIsStoryEmpty] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userD, setUserD] = useState({});
  const [exitAni, setExitAni] = useState('');

  const addStoryeHandler = (data) => {
    setStory((prevData) => {
      return [data, ...prevData];
    });
  };

  const handleRemove = (id) => {
    setStory((todos) => todos.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (story.length === 0) {
      setIsStoryEmpty(true);
    }
  }, [story]);

  const saveUserDataHandler = (data) => {
    const userData = {
      ...data,
      id: Math.random().toString(),
      key: id,
    };
    addStoryeHandler(userData);
    setIsStoryEmpty(false);
  };

  const showModalHandler = () => {
    setIsShown(true);
  };
  const hideModalHandler = () => {
    setTimeout(() => {
      setIsShown(false);
      setExitAni(false);
    }, 320);
  };

  const editModalHandler = () => {
    setIsEdit(true);
  };

  const setExitAniHandler = () => {
    setExitAni(true);
  };

  const getClickedData = (
    id,
    who,
    rating,
    date,
    image,
    description,
    phoneNumber,
    sexDateTotal
  ) => {
    setUserD({
      id: id,
      who: who,
      rating: rating,
      date: date,
      image: image,
      description: description,
      phoneNumber: phoneNumber,
      sexDateTotal: sexDateTotal,
    });
  };
  // };
  const hideEdit = () => {
    setIsEdit(false);
  };

  if (isShown) {
    return (
      <AddStoryForm
        onSaveUserData={saveUserDataHandler}
        onClose={() => {
          hideModalHandler();
          setExitAniHandler();
        }}
        exitAni={exitAni}
      >
        {props.children}
      </AddStoryForm>
    );
  } else if (isEdit) {
    return (
      <StoryEdit
        id={userD.id}
        whoEdit={userD.who}
        ratingEdit={userD.rating}
        descriptionEdit={userD.description}
        phoneNumberEdit={userD.phoneNumber}
        sexDateTotalEdit={userD.sexDateTotal}
        imageEdit={userD.image}
        onSaveUserData={saveUserDataHandler}
        onClose={hideEdit}
      >
        {props.children}
      </StoryEdit>
    );
  } else {
    return (
      <div className={classes.cardFlex}>
        <Card>
          {isStoryEmpty && (
            <div className={classes.dashboard}>
              <p>click on the button to add a story</p>
            </div>
          )}

          {story.map(
            ({
              key,
              who,
              rating,
              id,
              date,
              image,
              description,
              phoneNumber,
              sexDateTotal,
            }) => (
              <Card>
                <div className={classes.storyCard} key={key}>
                  <p>Name- {who}</p>
                  <Rating name="read-only" value={rating} readOnly />
                  <p>
                    <svg
                      classname={classes.datesvg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 122.89"
                    >
                      <title>date</title>
                      <path d="M81.61,4.73C81.61,2.12,84.19,0,87.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM66.11,105.66c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1ZM15.85,68.94c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14-10.1H107c.8,0,.8,10.1,0,10.1H91.25c-.8,0-.8-10.1,0-10.1ZM15.85,87.3c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1ZM41,87.3c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14,0c-.8,0-.8-10.1,0-10.1H107c.8,0,.8,10.1,0,10.1Zm-75.4,18.36c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,43.47H116.47v-22a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,0,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.09a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.55V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07v22Zm110.08,6.41H6.4v63.67a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.55a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V49.88ZM50.43,18.54a3.2,3.2,0,0,1,0-6.4H71.92a3.2,3.2,0,1,1,0,6.4Z" />
                    </svg>
                    {date}
                  </p>
                  <img className={classes.imgCard} src={image} alt="sexy" />
                  <Popup
                    trigger={
                      <button className={classes.dashBtn}>Show Story</button>
                    }
                    position="top "
                  >
                    <div className={classes.descPopUp}>{description}</div>
                  </Popup>

                  <button
                    className={classes.dashBtn}
                    onClick={() => {
                      editModalHandler();
                      getClickedData(
                        id,
                        who,
                        rating,
                        date,
                        image,
                        description,
                        phoneNumber,
                        sexDateTotal
                      );
                      handleRemove(id);
                    }}
                    id={id}
                  >
                    Edit
                  </button>

                  <button
                    className={classes.dashBtn}
                    onClick={() => handleRemove(id)}
                  >
                    Delete
                  </button>
                </div>
              </Card>
            )
          )}
        </Card>

        <div className={classes.dashboardBtn}>
          <ButtonUI onClick={showModalHandler}> Add Story</ButtonUI>
        </div>
      </div>
    );
  }
};

export default AddStoryDash;
