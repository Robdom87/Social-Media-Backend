const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique : true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique : true,
      match: /.+\@.+\..+/
    },
    //subdocument
    thoughts: [   {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },],
    //will need a populate
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
        virtuals: true,
      },
      id: false,
  }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', UserSchema);

module.exports = User;