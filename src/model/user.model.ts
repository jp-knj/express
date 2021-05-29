import {Document,HookNextFunction, Schema, model} from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends Document{
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidataPassword: string): Promise<boolean>;
}
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// For logging in
UserSchema.pre("save", async function (next: HookNextFunction) {
  let user = this as UserDocument;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generated encrypted password
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  const hash = await bcrypt.hashSync(user.password, salt);

  // replace the password with the hash
  user.password = hash;
  return next();
});


const User = model<UserDocument>("User", UserSchema);

export default User;
