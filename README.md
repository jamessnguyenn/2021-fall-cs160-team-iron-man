# EZ Apply :briefcase:
EZ Apply is a web-based MERN stack application which allows job seekers to quickly apply with a simple click and for recruiters to find the best talent possible.

## Developers :man_technologist:
This project was developed by [Basmah Altimimi](https://github.com/basmahaltimimi), [Bijayata Gurung](https://github.com/gurungbjta), [Christopher Tran](https://github.com/Christophervtran92), [James Nguyen](https://github.com/jamessnguyenn), and [Smriti Gurung](https://github.com/smritigurung).

## Vision
**FOR** job seekers **WHO** need a quick way to seek jobs, The EZ Apply is a Web-based service **THAT** simplifies and streamlines the application process. **UNLIKE** other job application services, **OUR PRODUCT** allows people to quickly apply for multiple jobs. 

## Contents

This document contains several information about the project, setting up developer/test environement, and how a new internal member can get started and contribute to the vision. Click on any of the following links to jump to a specific section:

- [Project Directory](#project-directory)
- [Getting Started](#getting-started)
- [Set Up & Run Developer Environment](#set-up--run-developer-environment)
- [Set Up & Run Test Environment](#set-up--run-test-environment)
- [Docker](#docker)
- [Creating & Merging Branches](#creating--merging-branches)
- [Code Reviews](#code-reviews)

## How to Use
If you would like to learn how to the app, you can view the User Guide [here](https://docs.google.com/document/d/1pbvR7PQ5qWxPG6Tp5O8iflqnk7TtAvFhV7A_3stWE2c/edit?usp=sharing).

# Project Directory

Our Project consists of 5 main directories. Each directory has a specific duty as explained below : <br>
`/fontend` :  the source code for our frontend component which is written in REACT.js <br> 
`/backend` : the source code for the backend component which is written in Node.js/ JavaScript<br>
`/database` : information about the database such as the database key. Although these files will not be used, they are here for your refrence<br>
`/docker` : contains docker files which can be utilized to run your the backend and frontend in seperate containers. See the Docker section for more details<br>
`/test-automation`: source code for test automation scripts to test our backend and frontend components written in Java and POSTMAN<br>

# Getting Started

Before setting up and running the enviroments, you will need to download a few dependencies and clone the repository.

## Installing Dependencies

The following will need to be installed for you to run the application/scripts. Click on each item to learn more or download. 
- [NodeJS](https://nodejs.org/en/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [Java](https://www.oracle.com/java/technologies/downloads/)
- [JUnit](https://junit.org/junit4/)
- [Selenium](https://www.selenium.dev/downloads/)
- [Chome Driver](https://chromedriver.storage.googleapis.com/index.html)
- [Postman](https://www.postman.com/downloads/)
- [Google Chorome](https://www.google.com/chrome/)
- Any Java IDE

## Cloning the Repository

To clone the repository, open your Git Bash in the folder you would like the repository to be in and type in the following command
```
git clone https://github.com/jamessnguyenn/2021-fall-cs160-team-iron-man.git 
```

The repository should be cloned onto your local desktop and you should be ready to setup and run the application.

# Set Up & Run Developer Environment

## Frontend

To set up the frontend, open a terminal from VSCode with the local repository and if you're not in the fontend folder do:

```
cd frontend
```
Next, enter the following command to install any node modules that are missing. You should see a folder called `node_modules` created:
```
npm install
```
Finally, enter this command to start the development environment for the REACT App.
```
npm start
```
A window from your default browser should open taking you to https://localhost:3000/ if the port is available. If the port is not available the browser will find another available port.

When you create new changes to the frontend code, the browser will automatically be updated to new code changes.

To stop the development environemnt, press <kbd>Ctrl-C</kbd> or <kbd>⌘C</kbd> in the terminal running the development environment.

## Backend
To set up the backend, open a terminal from VSCode with the local repository and if you're not in the backend folder do:

```
cd backend
```
Next, enter the following command to install any node modules that are missing. You should see a folder called `node_modules` created:
```
npm install
```
Finally, enter this command to start the development environment for the NODE backend.
```
nodemon
```
Unlike the REACT frontend, you must ensure that the port 5000 is open. Otherwise, you will experience poor behvavior.

To ensure the app is running correctly, navigate to https://localhost:5000/. You should see a page that saids **"Welcome to the EZ Apply API"**

When you create new changes to the backend code, the backend will automatically be updated to new code changes.

To stop the development environemnt, press <kbd>Ctrl-C</kbd> or <kbd>⌘C</kbd> in the terminal running the development environment.

# Set Up & Run Test Environment

For information about how our test scripts work, click [here](https://github.com/jamessnguyenn/2021-fall-cs160-team-iron-man/tree/master/test-automation#team-iron-man---test-automation).

## Frontend Scripts

Before setting up, make sure you have the frontend development envrionment running.

To set up the test environment for the frontend, open your Java IDE, and then choose to open the ``test-automation/EZApply_Frontend_Tests`` folder.

Next, ensure the **Selenium** jar file & **Chrome Driver** is in the ``src/Selenium`` folder. Also, make sure you have **JUNIT** added as a libary for your IDE.

Finally, open any of the scripts, and click the **Run** button in your IDE. Your Chrome Browser should open and start executing the script.

You can now add your own scripts and begin testing!

## Backend Scripts

Before setting up, make sure you have the backend development envrionment running.

To set up the test environment for the backend, browse to the [Postman website](https://www.postman.com/), and create and login to your account.

Ensure your postman agent is running or the following steps will not work.

Create a workspace and then in that work space click on **Collections** on the sidebar. Once  you are there, click on **Import**, navigate to the folder ``test-automation/Postman-Backend-Tests``, and choose any of the scripts to run.

Once the scripts are imported, click on the **three dots** next to the collection and press **Run collection**. This will run the backend script.

You can also add your own collection by pressing the **add icon** and inputting a set of requests you want that collection to do and check.

# Docker

If you want to run the backend and frontend components in a seperate container, you can execute our docker files in the ``docker`` directory.

To run the docker files, you have two options: 

## Using docker-compose
From the terminal opened from the docker folder, enter the following to run both the frontend and backend
```
docker-compose -p EZ-Apply up
```
## Without docker-compose
From the terminal opened from the folder, enter the following to run the frontend
```
docker build -f '../docker/frontend.dockerfile' -t ez-apply_frontend ../frontend
docker run --name ez-apply_frontend -d -p 3000:3000 ez-apply_frontend
```
To run the backend
```
docker build -f '../docker/backend.dockerfile' -t ez-apply_backend ../backend  
docker run --name ez-apply_backend -d -p 5000:5000 ez-apply_backend
```
# Creating & Merging Branches

## Creating Branches

So you want to add a new feature to our codebase or want to work on one of our backlog tasks? This section will discuss how to exactly do so.

When you're ready to get started on a new tasks, you will have to first create a branch. First enter the following commands to ensure you're in the lastest master branch when you create the branch.
```
git checkout master
git pull
```
Next enter the following to create your branch. Make sure the branch name is relevant and matches the tasks you're working on
```
git branch <branch-name>
```
You can also create the branch in the GitHub, but you will have to do ``git pull`` on your local repositroy to see the branch.

Next, enter the following to go the branch:
```
git checkout <branch-name>
```
Now you can start working on the branch and add the code changes to finish the task or feature. Here are a few more useful comamnds that may help you while you are working:

### Commiting and Pushing to your Branch
```
git add .
git commit -m <message>
git push -u origin <branch-name>
```
### Go back to master branch
```
git checkout master
```
### See what branch you're currently on
```
git branch --show-current
```
## Merging the Branch
Before you can merge the branch, you will need to create a pull request. But before then, you will need to merge any changes from the master branch that may have occured while you were working on the task.

Enter the following to merge those changes locally to your branch:
```
git checkout master
git pull
git checkout <branch-name>
git merge origin master
```
Fix any merge conflicts and commit and push to your branch if needed.

Now that your branch is ready, navigate to the [repository](https://github.com/jamessnguyenn/2021-fall-cs160-team-iron-man).

Go to your branch and under **Contribute** press **Open pull request**. This will create a request which will needs to be approved by a developer before it can be merged into the main branch.

You will need to request a review by any of the developers which will then either approve the pull request or request you to fix some issues.  If your code needs fixed, you can directly commit and push to the branch and it will show up in the pull request.

Once your pull request is ready to be merged, you can scroll to the bottom of the PR and press **Merge pull request**.

Now you're all set to creating new features.

# Code Reviews

You may be requested to review someones request. Go to the pull request that you were asked to review. You can go **Files changed** and review the users code by adding comments.

For our team here are a best pratices we look for in code reviews:
- Branch that is merging is buildable. Development Branch should always be working.
- Readiblity and Understandable. Code should contain good variable names, clear & concise comments, and code should be cleanly formatted.
- Code being merged should actually meet the task/feature it was set out to do.

Once you a done reviewing the code, under **Files changed**, press **Review Changes** and choose an option. Remember, once you approve the branch, the PR owner will be able to merge the branch. 

# Contribute Now

Ready to start? Check our backlog for details for any new tasks or contact any of the specified developers above for more help. :facepunch:


