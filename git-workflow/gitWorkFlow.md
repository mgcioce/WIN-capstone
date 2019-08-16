# Git Work Flow

## Primer: How Git works and the basics of commits

Git is a version control software. What that means is that git is able to save different "instances" of a project and edit them separately from one another. So - for instance - If we wanted to, we could have one version of the project with an Angular front end and one with a React front end and switch between them - all in the same project folder. This is done with branches and commits.

A **branch** is essentially an instance (i.e. copy) of a project made at a certain point in time. We will be using branches to take the current state of the project, make a copy of it, then work on that copy so that the original, working version of the project won't be lost. So when I go to work on a new part of the project or go to change a part of the project, I'm going to make a branch (copy) of the project, work on that branch, then once it is finished merge it back to the original project.

Just as a branch makes a copy of a project, a **commit** acts as a checkpoint on that branch. Commits primarily do two things:
1) They act as documentation for the changes someone is making to a branch of the project
2) They define the "state" of a branch at a certain point in time.

So, for example, when I am on the **master** branch (i.e. the project instance that contains the definitive/original version of the project), and I want to create a new branch because I want to add a feature to the app, the branch I make is going to be a copy of the master branch from the point of the latest commit: whatever the state of the project that is defined by that commit, that is what will be "copied" when I make the branch. This also means that on a branch you can go back and forth between states of the branch by "checking out" different commits on that branch. (NOTE: we won't be doing that unless we absolutely have to, but for the sake of conceptual understanding I wanted to mention it).

Let's go through a quick example:

## Branches and Commits - An Example:


### Making a Commit
So i make a folder and turned it into a git **repo** (which stands for repository). Essentially all that means is that git can be used to control the state of that folder and anything in it.

![example 1](/example1.jpg)

Above you can see the directory structure of my example project. I have one file in it called *file1.txt*. At this point I haven't made the first commit on my repo, So I can't make a branch yet because I haven't established any "state" for my project. 

I ran the "git status" command which gives me some information:

1) which branch I'm on
2) what my commit state is
3) if there are any files that are **staged** or **untracked**.

When you are on a branch, you can choose which files and folders you want git to track changes to. This can get a little complicated but suffice to say there will be times when you don't want to add certain files to the project because they are specific only to your computer or project instance. 

making a git commit consists of two parts:

1) adding files to **stage** them for a commit. This essentially just tells git what files/folders you added or changed you want it to keep track of for a specific "state" definition. In this example, since it's the initial commit I probably want to stage every relevant file on the project to establish an initial state of the project that I can work off of.
2) committing the staged changes. This step essentially just marks the record of the staged files/folders at that instant. 

So in this example I'm going to stage the *file1.txt* to be committed using **git add** and then commit the state of the project using **git commit**.

![example 2](/example2.jpg)

First I ran **git add file1.txt** which staged the file to be committed. Then I attempted to run **git commit -m "my commit message here"** but was yelled at by git for essentially not being signed in. When you commit git needs to have a record of *who* made the commit. After I set my email and username it then allowed me to execute the command. 

Now that I have made a commit I can create a new branch. Let's go ahead with that.

### branching 

So pretend that this example project is our project and it is a working app - not fully functional, but it works. Now let's say we want to add a new feature to the app. As I was saying before, we can use branches to copy the state of the project at a commit point so that we can work on it separately and not mess up the working original. 

to create a branch, use **git branch new-branch-name-here**

![example 3](/example3.jpg)

Above you can see I created a new branch, and then I looked at what branches existed by using the **git branch** command. Now that I created a branch I need to **checkout** that branch in order to work on it: git only allows you to work and commit to one branch at a time. Note that there are ways to move between branches as you are doing work. We will cover that later.

Now I'm going to checkout my new branch so I can work on it.

![example 4](/example4.jpg)

So now that I am on the new branch I'm going to make a couple of changes. I'm going to add a new file and then change text in the other file.

![example 5](/example5.jpg)
![example 6](/example6.jpg)
![example 7](/example7.jpg)

So note that I added a line to *file1.txt*, which is a change from the original. Then I added a new file to the project which git hasn't tracked yet (i.e. it hasn't been a part of any commit). My git status shows this info to me. 

So I've made my changes and now I want to commit them. First I need to stage the changes by using **git add**. In this case I want to include all of the files that have been changed or created. If i am in the root of the project directory structure, then I can do that by using **git add .**, where the period represents the current directory I'm in. Afterwords, I am going to commit those changes using **git commit -m "a message"**, where the -m "flag" is used to specify a message for the commit. **Every commit must have a message** that gives description of what changes/additions have been made.

![example 8](/example8.jpg)

Now let's talk about merging branches

### Merging

So we have our project that is different from the project state it was branched from. What we want to do now is to **merge** "my-branch" back into the "master" branch (in this way we are saying we like the changes we have made and we want that to be a part of the official project now). Note that in essense all we are doing is saying that we want to take the copy branch and it's state and combine it with the original branch and it's state.

![example 9](/example9.jpg)

Now the changes I made to the project have been added to the original and a new commit was made from which another branch can be created. 

## Primer: Final Thoughts
The example we just worked through and everything we have talked about are the basics of git. Things become more complicated when we talk about pushing and pulling commits to a remote repository (e.g. GitHub), but all the principles we have talked about apply: for any git repository, whether locally on your computer or remotely on github, branches act as copies of a project state and commits act as checkpoints on those branches that store the project state. In the next section I am going to introduce a workflow I think works with respect to organizing work and using git's version control capabilities to maintain a coherent state of a project while allowing multiple developers to work on new project features.

## Workflow Sequence

Here is a sequence of steps for using git when working on the project (NOTE: these will be Command Prompt/Terminal statements: I am not as familiar with UI or Intellij workflow for git):


**1) Navigate to the project root directory (Essentially the WIN-capstone folder)**

> cd path\to\WIN-capstone

**2) Run a git status to see what branch you are on and the state of that branch**

> git status

- If you have **modified files** or **files already staged** for commit (i.e. you ran git add on them), you can do one of two things:

A. you can go ahead and stage and commmit these changes using **git commit -m "message here"**

B. you can **git stash** these modified files and/or staged changes to store them, then come back and **git stash apply** them afterwords.

if you are not on the master branch use **git checkout** to move to the master branch

> git checkout master

**3) Pull the latest changes to the master from the remote repository**

> git pull origin master

**4) Now create a new branch with a descriptive name for the feature that is being added. In order to keep naming homogenous use this template:**

> git branch feature/feature-description-here

**5) Checkout that branch**

> git checkout feature/feature-description-here

**6) Create a version of this new branch on the remote repository(github) and link the local and remote branch together**

> git push -u origin feature/feature-description-here

At this point you are ready to start working on the project and pushing your commits to the remote branch using **git push**. Once you are done with the feature and have pushed it to the remote repository, follow these steps:

**7) open your web browser and go to https://github.com/mgcioce/WIN-capstone/**

**8) Scroll down the page and click on the branch dropdown. Select your feature branch (see picture below)**

![example 11](/example11.jpg)

**9) On the feature branch page, click "New Pull Request"**

![example 10](/example10.jpg)

**10) On the compare changes page, select the "master" branch as the base and the feature branch as the compare**

![example 12](/example12.jpg)

**11) Write a message that describes what the feature is and click "Create pull request"**

![example 13](/example13.jpg)

**12) If there are no conflicts go ahead and click "Merge pull request", "Confirm merge" and then "Delete Branch". Otherwise let me know and I'll work through the merge conflicts**

![example 14](/example14.jpg)

**13) Lastly, go back to your local terminal/command prompt and checkout the master branch**

> git checkout master

**14) Now go ahead and delete your local branch**

> git branch -d feature/feature-branch-description

Follow these steps and hopefully we will be victorious!

Mike



