import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Description,
  Category,
  Button
} from './styles';


export function Task({ task }) {
  return (
    <Container>
      <Description>
        {task.description}
      </Description>
      <Category>
        {task.category}
      </Category>
      <Button>
        <Icon name="edit" />
      </Button>
    </Container>
  )
}
