import dbConnect from '../../utils/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === 'POST') {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ success: true, message: 'Sign in successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
