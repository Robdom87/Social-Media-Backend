# Social-Media-Backend

## Description
Social-Media-Backend creates the back end routing with which to create, view, update, and delete users, posts, and reactions within MongoDB.

## Installation
Social-Media-Backend does not require installation.

Social-Media-Backend is dependant on MongoDB being present in the users computer. Click here to downnload MongoDB.

## Usage
The user can view, add, update, and delete the following subjects: Users, Posts, and Reactions to the database.

Below is the functionality provided alongside the appropriate routing.

- View All Users
  - GET /api/users
- Add User
  - POST /api/users
  - JSON
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
- View One User
  - GET /api/users/:userId
- Update User
  - PUT /api/users/:userId
- Delete User
  - DELETE /api/users/:userId
- Add Friend
  - POST /api/users/:userId/friends/:friendId
- Remove Friend
  - DELETE /api/users/:userId/friends/:friendId
- View all Thoughts
  - GET /api/thoughts
- Add new Thought
  - POST /api/thoughts
  - JSON
    {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
        "userId": "5edff358a0fcb779aa7b118b"
    }
- View One Thought
  - GET /api/thoughts/:thoughtId
- Update Thought
  - PUT /api/thoughts/:thoughtId
- Delete Thought
  - DELETE /api/thoughts/:thoughtId
- Add Reaction
  - POST /api/thoughts/:thoughtId
- Remove Reaction
  - DELETE /api/thoughts/:thoughtId/reactions/:reactionId
  

## Walk Through Video
[Link](https://drive.google.com/file/d/1gePNrytEkB3WeAXjTMFP7r-CT8pC8Twm/view)

## License
MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

