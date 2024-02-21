import { useSelector, useDispatch } from 'react-redux';

import { selectContactsList } from 'redux/constacts/selectors';
import { addContact } from 'redux/constacts/operations';

import { Form, Input, Label, Button } from './ContactForm.module';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(
          `${originalPromiseResult.name} successfully added to contacts`
        );
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
          required
          placeholder="Enter name ..."
          value={contacts.name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number ..."
          value={contacts.number}
        />
      </Label>
      <Button type="submit">New contact</Button>
    </Form>
  );
};
