import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/constacts/operations';
import { selectError, selectIsLoading } from 'redux/constacts/selectors';

import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  ContactNavWrapper,
  ContentPageContainer,
  FilterWrapper,
  Title,
} from './Contacts.module';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContentPageContainer>
      <Section>
        <ContactNavWrapper>
          <Title>Contacts</Title>
          <FilterWrapper>
            <Filter />
          </FilterWrapper>
        </ContactNavWrapper>
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Section>
      <Section title="Add New Contact">
        <ContactForm />
      </Section>
    </ContentPageContainer>
  );
};

export default Contacts;
