import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Form, Input, Label, Button, LoggedLink } from './RegisterPage.module';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        console.log(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        console.log("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          placeholder="Enter password ..."
          required
        />
      </Label>
      <Button type="submit">Register</Button>
      <LoggedLink to="/login">Have acount? LogIn</LoggedLink>
    </Form>
  );
};

export default RegisterForm;
