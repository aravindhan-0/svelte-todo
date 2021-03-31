export default function handler(req, res) {
    const uri = 'Hello'
    res.status(200).json({ name: `John Doe ${uri}` })
  }