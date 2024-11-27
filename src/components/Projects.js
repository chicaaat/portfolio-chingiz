import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-image: url('https://kartinki.pics/uploads/posts/2021-07/thumbs/1625200055_58-kartinkin-com-p-epichnii-fon-krasivie-foni-59.jpg');
`;

const Projects = () => {
  return (
    <Container>
      <h1>Мои проекты</h1>
      <ul>
        <li>Проект 1: Телеграмм бот</li>
        <li>Проект 2: Магазин Одежды 'KyiymShop'</li>
        <li>Проект 3: Описание проекта 3</li>
      </ul>
    </Container>
  );
};

export default Projects;
