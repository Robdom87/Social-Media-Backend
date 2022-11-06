# spokenThoughts_API_routing

## Description
spokenThoughts_API_routing creates the back end routing with which to create, view, update, and delete users, posts, and reactions within MongoDB.

## URL Requests

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

[Walk-Thru](https://drive.google.com/file/d/1gePNrytEkB3WeAXjTMFP7r-CT8pC8Twm/view)