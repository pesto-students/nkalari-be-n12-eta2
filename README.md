<br />
<p align="center">
    <img src="https://res.cloudinary.com/kalari/image/upload/v1644114710/kalari_logo_gfxuj9.png" alt="Logo" width="120" >
</p>

<h1 align="center">Kalari Frontend</h1>
<h3 align="center">
	<a href="https://nkalari-8f0ee.web.app/">Live URL</a>
</h3>
  
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#artefacts">Artefacts</a></li>
        <li><a href="#backend-repo">Frontend Repo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#test-credentials">Test Credentials</a></li>
        <li><a href="#other-available-scripts">Other Available Scripts</a></li>
        <li><a href="#tools-and-libraries">Tools And Libraries</a></li>
      </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nkalari-8f0ee.web.app/)

A livestreaming platform for musicians, painters, comedians, dancers and actors to showcase their talents to the world. Whether you're a musician, painter, comedian, dancer or actor, Kalari is the place for you to share your work with the world. With a wide selection of livestreaming channels, you can find the perfect one for you, and start streaming your performances today.

### Artefacts

<a href="https://docs.google.com/document/d/1gusD8HeKRB9gGvAD0XKwNsuuJPW4fnxqiIsV9OKexUc/edit?usp=sharing">PRD</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://res.cloudinary.com/kalari/image/upload/v1644122408/HLD_sclowx.png">HLD</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.figma.com/file/8mfWR935k15JheCrD6oEzu/Hire-wand---Feature-Set?node-id=3%3A16">Wireframes</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://drive.google.com/file/d/1RWk71ZR6cVY-c2g_gaNI5I6DZNRQJPzE/view?usp=sharing">Coding Practices</a>

### Backend Repo

[Frontend Repo](https://github.com/pesto-students/nkalari-be-n12-eta2)

**Mission:**

To empower amatuer performance artists to build their audience and community.

**Vision:**

To build a talent ecosystem for performing arts.

**Goals:**

-  Simple solutions for the problems.
- All solutions are in one place.
- Bridge the communication gap within the society.

**Features:**

- Livestream video
- Chat with members
- Superchat
- Give gifts to the artist

### Built With

<p align="center">
	<a href="https://reactjs.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867520/react-logo_aiqchy.png" title="React" height="100">
	</a>
	<a href="https://redux.js.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867520/redux-logo_g2vd7e.png" title="Redux" height="100">
	</a>
	<a href="https://firebase.google.com/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631803785/firebase-logo_v8dzdj.png" title="Firebase" height="100">
	</a>
	<a href="https://github.com/features/actions">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867519/github-action-logo_yamrxz.png" title="Github Actions" height="100">
	</a>
	&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://stripe.com/">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" title="Stripe Payment Gateway" height="100">
	</a>
	<a href="https://www.heroku.com/">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png" title="Heroku" height="100">
	</a>
  <a href="https://www.agora.io/en/">
		<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p49ujxdbaurplycovgrx" title="Agora" height="100">
	</a>
</p>

<!-- GETTING STARTED -->

## Getting Started

Following are the simple steps to run this project.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

- firebase
  ```sh
  npm install firebase -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pesto-students/nkalari-fe-n12-eta2
   ```
2. Set environment variables

    ### frontend
    REACT_APP_DOMAIN=http://localhost:4000
    REACT_APP_CLOUDINARY_PRESET=nkalari
    REACT_APP_CLOUDINARY_CLOUD_NAME=nkalari
    REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/puneet61/image/upload
    REACT_APP_AGORA_APP_ID=f7899b6646784713883b43d23e2627b0
    REACT_APP_AGORA_APP_CERTIFICATE=37f8775bf0fe49ff99f30ea26b584878

    ### backend
    AGORA_APP_ID=f7899b6646784713883b43d23e2627b0
    AGORA_APP_CERTIFICATE=37f8775bf0fe49ff99f30ea26b584878

3. Install NPM packages
   ```sh
   cd emarat-fe && npm install
   ```
4. Run
   ```sh
   npm start
   ```
5. Open http://localhost:3000 to view it in the browser


## Test Credentials

*To login in the app use no. 9999999999 and otp 123456*  

## Tools and Libraries 

- [Redux-Tool-Kit] - State Management
- [Sentry] - Error Tracking
- [Eslint] - Linting
- [Prettier] - Automatic code formatting
- [Tailwind] - CSS styling classes

<!-- Contributors -->

## Contributors

Puneet - [GiHub](https://github.com/puneettiwari61) - [Email](mailto:puneettiwari61@gmail.com)

Jagan - [GiHub](https://github.com/jagan607) - [Email](mailto:jaganmohan19972016@gmail.com)

Avirup - [GiHub](https://github.com/axios047) - [Email](mailto:axios47@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://res.cloudinary.com/kalari/image/upload/v1644116161/Screenshot_2022-02-06_082548_kstljw.png