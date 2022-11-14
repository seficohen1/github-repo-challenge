# GitHub Repo Search
<br>


> React project, using GitHub API to search users and their repos
>
<br>
The following project is a small app that allows a user to make use of GitHub API and  search for Github members and their repositories. This app was developed as part of an interview process in which I have received this tech challenge. The main requirement of the project was for it to be written in TypeScript and, on a personal note I can share that  for me, this was the first time tackling TypeScript (ohh first starts, don’t we love them?), so a part of this README being informative about the “dull’ info, it is more of a documented post regarding some of the key concept I have learnt in the process. 


 

</div><br>

<br>

![](https://res.cloudinary.com/dio4xgjq5/image/upload/v1668438152/ezgif.com-gif-maker_otaxma.gif)

##  Getting started
<br>

>First things first! Make sure you create a .env file using the variable from .env.example (base url of GitHub API (https://api.github.com).

Then run npm command to install all dependencies needed and npm start to run the app on your local machine.

  ```shell

npm install

```

```shell

npm start

```
<br>  

## Developing


### Technologies / Built With

Technologies and libraries used during app development include the following:
- HTML5 
- CSS3
- TypeScript
- ReactTS
- Styled Components
- Prettier
- esLint

App was built using create-react-app with typescript template
  


## Setting up Dev  
To test out the app, developers must clone the following repository:

```shell

git clone https://github.com/seficohen1/github-repo-challenge.git

cd project-folder/

npm install

```

<br>

## Folder Structure

    .
    ├── public                  # HTML entry point
    ├── src                     # Source files 
    |   ├── components          # App components
    │   ├── context             # Managing state with Context
    │   ├── helpers             # Helper functions
    │   ├── hooks               # Custom hooks
    │   ├── interfaces          # Interfaces used in App
    │   ├── pages               # Pages (also main components)
    │   ├── services            # Connecting to GitHub API
    │   ├── UI                  # Defining reusable styled components
    |   ├── App.tsx             
    |   ├── Index.tsx
    |   ├── react-app-env.d.ts 
    ├── .env.example            # API BASE URL
    ├── .eslintrc               # esLint configuration file 
    ├── .prettierrc             # prettier configuration file 
    ├── tsconfig.json           # TypeScript compiler configuration 
    └── README.md

  
<br>

## Takeaways and Keypoints  

* Understanding the fundamentals of TypeScript, what is it used for what problem it solves.  Sources I used to grasp my head around TypeScript concepts: 
    -  [Ninja Net TypeScript tutorial](https://youtu.be/2pZmKW9-I_k) - Free.
    -  [Codecademy Learn TypeScript Course](https://www.codecademy.com/learn/learn-typescript) - Free, the free version of the course does the job just fine with exercise and explanations
    -  [FrontendMasters - TypeScript Fundamentals](https://frontendmasters.com/courses/typescript-v3/) - Paid course, I'm half way there, but learnt a lot from it. 

* Understanding how to use TypeScript around React environment, handling events and functions, managing state with context and reducer and understanding which react elements are passed as props. Sources I used a part of hours of googling: 
    - [Fernando Herrera's React + TypeScript tutorial](https://youtu.be/dNxaP_BTtwQ) - Free and very much informative. Note: videos are  in *Spanish*
<br>




## What's next?

- Testing in TypeScript
- Scaling to a bigger projects using state management libraries

<br>

  ## Author

- [Sefi Cohen](https://github.com/seficohen1)
