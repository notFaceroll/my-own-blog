import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Notification from '../ui/notification';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4a4e69;
  width: clamp(250px, 60vw, 800px);
  margin: 0 auto;
  padding: 1.25rem;
  gap: 2rem;
  border-radius: 5px;

  h1 {
    color: #f2e9e4;
    font-size: clamp(2rem, 6vw, 3.2rem);
    text-align: center;
    margin: 0;
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    color: #f2e9e4;
    font-size: clamp(.8rem, 4vw, 1.125rem);
    margin-bottom: .5em;
  }
  input,
  textarea {
    border-radius: 5px;
    border: 1px solid #333333;
    padding: 0.5rem;
    background-color: #f2e9e4;
  }
  textarea {
    resize: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: grid;
    justify-content: stretch;
  }

  button {
    padding: 1rem 2rem;
    border: 0;
    background-color: #c9ada7;
    color: #333333;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
  }
`;

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export default function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error, null
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
    document.getElementById('form').reset();
  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way...',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message sent!',
      message: 'Your message sent successfully!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
  }

  return (
    <Container>
      <h1>How can I help you?</h1>
      <Form onSubmit={sendMessageHandler} id="form">
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Container>
  );
}
