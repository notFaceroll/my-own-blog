import { MongoClient } from 'mongodb';

const url =
  'mongodb+srv://naegling:KmbOwZbFxt4ykNSz@cluster0.pbt1m.mongodb.net/my-site?retryWrites=true&w=majority';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: 'Sucessfully stored message!', stored: newMessage });
  }
}
