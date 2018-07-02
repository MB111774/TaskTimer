import React from 'react';
import { Text, Container, Content } from 'native-base';
import AppHeader from '../../common/AppHeader';
import AddNewCategoryForm from './AddNewCategoryForm';

function AddNewCategory() {
  return (
    <Container>
      <AppHeader title="Dodaj kategorię" />
      <AddNewCategoryForm />
    </Container>
  );
}

export default AddNewCategory;
