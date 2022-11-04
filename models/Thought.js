const { Schema } = require('mongoose');
const reactionSchema = require('./Reaction');


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
      },
      id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

module.exports = ThoughtSchema;