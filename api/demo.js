export default function handler(req, res) {
    const uri = process.env.my-secret
    res.status(200).json({ name: `John Doe ${uri}` })
  }