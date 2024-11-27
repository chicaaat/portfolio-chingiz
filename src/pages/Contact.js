import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #007acc;
`;

const ContactItem = styled.div`
  margin: 10px 0;
  font-size: 18px;
  color: #333;

  a {
    color: #007acc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background-color: #007acc;
  color: white;
  text-align: center;
  width: 100%;
`;

const Contact = () => {
  return (
    <Container>
      <Title>Связаться со мной</Title>
      <ContactItem>
        📧 Email: <a href="https://mail.google.com/mail/u/0/">akmatbekovc1@gmail.com</a>
      </ContactItem>
      <ContactItem>
        📸 Instagram: <a href="https://www.instagram.com/_akmatbek0vxx_/" target="_blank" rel="noopener noreferrer">_akmatbek0vxx_</a>
      </ContactItem>
      <ContactItem>
        📱 Telegram: <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">t.me/chyngyzbro</a>
      </ContactItem>
      <ContactItem>
        ☎️ Телефон: <a href="tel:+996502585208">+996502585208</a>
      </ContactItem>
      <Footer>© 2024 Акматбеков Чынгыз. Все права защищены.</Footer>
    </Container>
  );
};

export default Contact;
