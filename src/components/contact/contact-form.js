import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4a4e69;
  width: clamp(350px, 60vw, 1280px);
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  border-radius: 5px;

  h1 {
    color: #f2e9e4;
    font-size: 3rem;
  }
`;

const Form = styled.form`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    color: #f2e9e4;
  }
  input,
  textarea {
    border-radius: 5px;
    border: 1px solid #333333;
    padding: 0.5rem;
    background-color: #f2e9e4;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 1rem 2rem;
    border: 0;
    background-color: #c9ada7;
    color: #333333;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function sendMessageHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    console.log(newMessage);

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // fetch('/api/hello')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  return (
    <Container>
      <h1>How can I help you?</h1>
      <Form onSubmit={sendMessageHandler}>
        <Controls>
          <Control>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </Control>
          <Control>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </Control>
        </Controls>
        <Control>
          <label htmlFor="message">You Message</label>
          <textarea id="message" rows="5" ref={messageInputRef}></textarea>
        </Control>
        <ButtonContainer>
          <button>Send Message</button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
