import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import classes from '../Login/LoginForm.module.sass';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rating from '@mui/material/Rating';
import ButtonUI from '../UI/Button/FormButtonUI';
import Modal from '../UI/Modal';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import { useDispatch } from 'react-redux';
// import { storyActions } from '../store/storyProvider';
import React from 'react';

const AddStoryForm = (props, ref) => {
  const [who, setWho] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [sexDate, setSexDate] = useState('');
  const [rating, setRating] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState();

  // const ref1 = useRef(null);

  // console.log(ref1.current.value);

  function validateForm() {
    return (
      who.length > 0 &&
      description.length > 0 &&
      sexDate !== '' &&
      rating > 0 &&
      image !== ''
    );
  }

  let newSexDate;
  if (sexDate !== '') {
    const newDateHandler = (date) => {
      return `${date.getFullYear()} - ${date.getMonth()}`;
    };
    newSexDate = newDateHandler(sexDate);
  }
  let descriptionNew = description;
  let phoneNumNew = phoneNumber;
  let sexDateNew = sexDate;

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64.toString());
  };

  // let handleChange = async (e) => {
  //   var files = e.target.files;
  //   var filesArray = [].slice.call(files);

  //   filesArray.forEach((e) => {
  //     if (e.size < 5000000) {
  //       setImage(e);
  //     } else {
  //       alert('no more than 5mb');
  //     }
  //   });
  // };

  function handleSubmit(event) {
    event.preventDefault();

    const storyData = {
      who,
      image: image,
      date: newSexDate,
      rating,
      description: descriptionNew,
      phoneNumber: phoneNumNew,
      sexDateTotal: sexDateNew,
    };
    props.onSaveUserData(storyData);
    props.onClose();
  }

  // let showImage;
  // if (image !== '') {
  //   showImage = URL.createObjectURL(image);
  // }
  // dispatch(storyActions.addStoryData(storyData));

  return (
    <Modal onClose={props.onClose} exitAni={props.exitAni}>
      <svg
        onClick={props.onClose}
        className={classes.x}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1280.000000pt"
        viewBox="0 0 1280.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M6180 11089 c-921 -38 -1841 -368 -2584 -926 -356 -267 -701 -614
-961 -963 -907 -1222 -1165 -2801 -694 -4250 127 -389 329 -804 561 -1149 987
-1473 2722 -2269 4468 -2050 966 121 1831 515 2559 1165 1571 1403 2010 3690
1070 5574 -418 836 -1056 1515 -1869 1985 -608 352 -1377 582 -2040 610 -283
12 -330 12 -510 4z m555 -719 c1327 -114 2497 -871 3146 -2035 484 -870 622
-1920 378 -2895 -175 -702 -530 -1330 -1039 -1840 -329 -330 -687 -585 -1095
-781 -545 -261 -1114 -389 -1725 -389 -641 0 -1227 139 -1795 425 -760 383
-1377 1001 -1760 1763 -588 1171 -560 2582 74 3717 648 1160 1815 1918 3131
2034 139 12 546 12 685 1z"
          />
          <path
            d="M4609 8719 c-26 -4 -57 -13 -70 -19 -40 -21 -409 -392 -432 -435 -29
-53 -30 -173 -3 -225 10 -19 378 -395 817 -835 l799 -800 -796 -795 c-462
-462 -804 -812 -817 -835 -33 -62 -31 -175 5 -235 39 -66 394 -414 442 -434
49 -20 152 -21 202 0 29 11 255 231 842 817 l802 802 803 -802 c586 -586 812
-806 841 -817 50 -21 153 -20 202 0 48 20 403 368 442 434 36 60 38 173 5 235
-13 23 -355 373 -817 835 l-796 795 799 800 c439 440 807 816 817 835 27 52
26 172 -3 225 -32 59 -399 420 -448 441 -51 21 -148 21 -200 -1 -30 -12 -249
-225 -842 -818 l-803 -802 -802 802 c-464 464 -816 807 -833 814 -47 19 -106
25 -156 18z"
          />
        </g>
      </svg>

      <Form onSubmit={handleSubmit} className={classes.input}>
        <h1 className={classes.loginHere}>Add Story</h1>

        <label htmlFor="sexDate">When you had it</label>
        <DatePicker
          id="sexDate"
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={150}
          scrollableYearDropdown
          value={sexDate}
          onChange={(sexDate) => setSexDate(sexDate)}
          selected={sexDate}
        />

        <Form.Group size="lg" controlId="who">
          <Form.Label>Who</Form.Label>

          <Form.Control
            autoFocus
            type="who"
            value={who}
            onChange={(e) => setWho(e.target.value)}
          />
        </Form.Group>

        <label htmlFor="rating">Rating</label>

        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <label htmlFor="file">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileRead(e)}
        />

        <label htmlFor="phoneNum">What is Her Number</label>

        <PhoneInput
          id="phoneNum"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <label htmlFor="description">Tell us the story</label>
        <textarea
          id="description"
          name="story"
          rows="5"
          cols="33"
          maxLength="200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <ButtonUI
          type="submit"
          className={classes.formBtn}
          disabled={!validateForm()}
        >
          Add
        </ButtonUI>
      </Form>
    </Modal>
  );
};

export default AddStoryForm;
