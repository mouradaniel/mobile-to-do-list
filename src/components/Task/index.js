import React from 'react';

import {
  Container,
  Description,
  Category
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
    </Container>
  )
}
