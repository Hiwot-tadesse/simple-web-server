# Simple Web Server

## Description
This project is a basic web server built with Express.js. It serves three routes, each providing specific information.

## Setup Instructions

### Prerequisites
- Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hiwot-tadesse/web-server.git
   cd simple-web-server

### Install dependencies:
    npm install
### Start the server:
    node server.js
## Routes
/: Returns "Welcome to the Home Page!" as a plain text message.

/name: Returns "Hiwot Tadesse" as a plain text message.

/hobby: Returns { hobby: "cooking" } as a JSON object.

/dream: Returns "Dream big, stay focused, and never give up. Your perseverance will lead to greatness" as a plain text message.


### After starting the server, you can access the following routes:

Home Page: http://localhost:3000/
Name: http://localhost:3000/name
Hobby: http://localhost:3000/hobby
Dream: http://localhost:3000/dream

## Technologies Used
Node.js
Express.js

### Author
Hiwot Tadesse