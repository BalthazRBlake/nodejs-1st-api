const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true}
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  });

// this refers to current Mongo Document 
UserSchema.methods.toJSON = function() { // to delete password property every time a user document is call with mongoose
  let user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
}

// mongoose hook, every time before saving a document it will run this logic
UserSchema.pre("save", async function(next) { // normal fn not lambda to keep mongoose scope for this
  const user = this;

  if (!user.isModified("password")) { // validates password update
    return next(); // allows mongoose to continue if password is not being update
  }

  // runs if password is being update
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  
  next();
})

module.exports = mongoose.model("user", UserSchema);