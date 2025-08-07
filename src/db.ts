import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = 'mongodb://root:admin@my-mongo:27017/myDatabase?authSource=admin';

mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

export const User = model<IUser>('User', UserSchema);