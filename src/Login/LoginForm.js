import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import classes from './LoginForm.module.sass';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '../UI/Card/Card';
import ButtonUI from '../UI/Button/FormButtonUI';
import Slider from '@mui/material/Slider';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { userActions } from '../store/user';

function LoginForm({ childToParent }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [length, setLength] = useState('');

  const handleLengthChange = (event, newValue) => {
    setLength(newValue);
  };

  const [weight, setWeight] = useState('');

  const handleWeightChange = (event, newValue) => {
    setWeight(newValue);
  };

  const [date, setDate] = useState('');

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      length !== '' &&
      weight !== '' &&
      date !== ''
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(authActions.login());

    // props.onAddUser(userData);

    dispatch(userActions.addUserData({ email: email, length: length }));
  }

  return (
    <Card>
      <div>
        <Form onSubmit={handleSubmit} className={classes.input}>
          <h1 className={classes.loginHere}>Login Here</h1>

          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>

            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <label htmlFor="length">length</label>
          <div>
            <Slider
              id="length"
              size="medium"
              defaultValue={0}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={10}
              max={30}
              onChange={handleLengthChange}
              sx={{
                color: 'red',
              }}
            />
          </div>
          <label htmlFor="weight">weight</label>
          <Slider
            id="weight"
            aria-label="Temperature"
            defaultValue={0}
            valueLabelDisplay="auto"
            min={0}
            max={120}
            onChange={handleWeightChange}
            sx={{
              color: 'red',
            }}
          />
          <label htmlFor="datePicker">Born Date</label>
          <DatePicker
            id="datePicker"
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={150}
            scrollableYearDropdown
            onChange={(date) => setDate(date)}
            selected={date}
          />
          <ButtonUI
            type="submit"
            className={classes.formBtn}
            disabled={!validateForm()}
            onClick={() => childToParent(email)}
          >
            Login
          </ButtonUI>
        </Form>
      </div>
    </Card>
  );
}

export default LoginForm;
