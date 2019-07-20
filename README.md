# Nikocale

 https://nikocale.com

## What's this?

Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth.

## Tech Stacks

### Front-end

- HTML5
- CSS3
- [SASS](https://sass-lang.com/)
  - Actually I use SCSS
- [JavaScript](https://www.javascript.com/)
  - Using ES6 syntax
- [Babel](https://babeljs.io/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
  - with [Redux-saga](https://github.com/redux-saga/redux-saga)
- [Webpack](https://webpack.js.org/)
- [Material-UI](https://material-ui.com/)
- Websocket
  - with SockJS
- AJAX
  - with axios

### Back-end

- [Kotlin](https://kotlinlang.org/)
- [Spring Framework](https://spring.io/)
  - used Spring Boot
- [Doma](https://doma.readthedocs.io/en/stable/)
- [PostgreSql](https://www.postgresql.org/)

## Applications and Tools

- VS Code
- IntelliJ
  - Community Edition
- Adobe XD
- AWS
  - [EC2](https://aws.amazon.com/ec2/)
    - For hosting
  - [RDS](https://aws.amazon.com/rds/)
    - For saving data
- [Firebase](https://firebase.google.com/)
  - only authentication

## Development Process

### 1. Design

Follow the royal road to design a website.

#### Wireframe

I would like to use a pen and a paper to write wireframes, because it can make prototypes in insanely fast speed.

#### Mockup

Used Adobe XD because it's free to use personally.

#### Application Architecture

Nikocale consists of Front, Back-end separation infrastructure which a client sends a  AJAX request and a server returns a response asynchronously because this application provides communication platform among team members. So it needs dynamic interactive UI without refreshing a page.

To build this application with high reliability and integrity, I implement [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

### 2. Development(Front-end)

Mainly use JavaScript and its popular frameworks.

#### VS Code

For front-end development

#### React

In this application, there comes opportunities to change child components to another frequently. One of the most advantages of React is that React can swap component smoothly which Vue does same thing more difficult. Also, I want to use Redux for more flexible state management including UI components.

#### Redux

Redux can help React's data-flow and asynchronous collaboration much simpler than only using React. Also, it realizes UI state management and orchestration between many kinds of states with higher code readability than Vuex.

### 3. Development(Back-end)

Server side architecture consists of Kotlin + Spring Framework + PostgreSql + Firebase.

#### IntelliJ

For back-end development

#### Spring Framework

This framework makes clean architecture implementation easy. In Ruby on Rails(most of my career I have used), it is hard to follow this design concept because Rails focuses to create MVC architecture-based application. On the other hand, Spring framework can build an application in various architectures including a clean architecture.

#### Firebase

Firebase is used for only Authentication feature which only google account can be assigned in this application. 

Nikocale is focused on users to build their own instances (you can imagine like Gitlab, jenkins...etc) and connect firebase in user's account so that their conversation can take place in their private space.

## Next Actions

- Add priviledges to users
  - Admin
  - Maintainer
- Add how to develop this app to README.md