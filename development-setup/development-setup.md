# WIN CAPSTONE PROJECT - DEVELOPMENT SETUP
### If you need help at any stage, please contact me: (828)450-4972
## 1) Installing Nodejs and npm

Nodejs is a javascript runtime (i.e. it interprets and executes javascript). Technically we do not need Nodejs to execute a react front end (since that occurs through the browser's javascript runtime), but we will be using npm (Node Packet Manager) to install and build our React app, which requires Nodejs to work.

### To install Nodejs and npm:

#### Windows:
1) Go to https://nodejs.org/en/
2) Click on the download for LTS (long term service)
3) open the .msi file and run the installer

#### macOS:
1) Go to https://nodejs.org/en/download/
2) select the macOS installer
3) run the installer

afterwords open up the command line/terminal and run the following command:

> node -v

you should see a response such as:
> v12.6.0

if not, please contact me.

#### npm
After installing node, run this command:

> npm install -g npm@latest

This will install the latest version of npm on your machine. 
please contact me if you have any  issues.

## 2) Project Setup with Git and Intellij

### Cloning from Github
The project repository can be found here: https://github.com/mgcioce/WIN-capstone

open your command line/terminal and navigate to the directory where you want to keep the project. Then run this command:

> git clone https://github.com/mgcioce/WIN-capstone.git

### Importing Project
Next open up Intellij. If you go straight to a project screen (as in a different project loads automatically), navigate to File => Open and 
navigate to the cloned project folder "WIN-capstone".

From your project view you shouldn't see any projects yet, only "External Libraries" and "Scratches and Consoles". We are going to have to import both the spring-boot and React
"modules" into the project.

1) Go to File => Project Structure
2) For your Project SDK select the JDK installed on your machine
3) On the left under Project Settings select Modules
4) Here you may see the movie-hub and movie-ui modules already there, but obviously
They arent showing up in our project yet. Select each one and click the minus (-) button to remove them. Click "Yes" to remove the module (we are going to add them back).
5) After removing both modules, select the plus (+) sign and click **Import Module**
6) First let's add the spring boot "module". navigate to the **movie-hub** directory
and open it up. Select the pom.xml file in its directory structure and hit OK.
7) On the bottom of the next page, click on the **JDK for importer** dropdown and 
select your java version (e.g. mine just says 11). Then click **Next**.
8) Click **Finish**.
9) Now we should see the movie-hub folder as a module on the list. Let's run the process again to add the movie-ui React "module"
10) Again select the plus (+) button and click **Import Module**
11) This time just click on the **movie-ui** folder itself and click **OK**
12) At the top we will keep **Create module from existing sources** selected and 
click **Next**.
13) Go ahead and click **Finish**
14) On the bottom right click **Apply**. You should now see the two modules in the project navigator on the left. click **OK**.

### Configuration Setup
Now we need to configure the React and Spring Boot modules to run. 

#### Spring Boot
1) In the top right next to the run button you should see a box with the text **Add Configuration**. Click on that
2) In the top left click the plus (+) button navigate down the list to Spring Boot and click on it.
3) In the top of the **Configuration** tab there is a **Main Class** textbox. Click the elipses (...) to the right of the text box. From here IntelliJ should be smart enough to recognize that **MovieHubApplication (org.carolinafintechhub.moviehub)** is the java class with the main method in it. Select that and click **OK**  
4) Up top click in the **Name** textbox and write "MovieHubApplication"
5) Under the **Spring Boot** section click the **On 'Update' action** and select **Update classes and Resources**.
6) Click **Apply** on the bottom right and hit **OK**. Now try running the Spring Boot part of the app by clicking the green play button on the top right. Open your web browser and navigate to **http://localhost:8080/console**. You should see the H2 database console login. 
7) Let's try to connect to the database. Enter this into the **JDBC URL** textbox:

> jdbc:h2:file:./movie-hub/database/database

**User Name**

> root

**Password**

> root

Now hit **Connect**. You should see one table there called TEST_MODEL.

Congrats! Go ahead and stop the Spring Boot app. Now let's do the React one.

#### React
1) Once again go to the dropdown and click on **Edit Configuration**
2) Click the plus button again (+) and select **npm**
3) In the Command dropdown select **start**
4) Repeat step 2 above and in the Command dropdown select **install** 
5) Click **Apply** on the bottom right then hit **OK**
6) Now go ahead and run the **install** command by selecting it from the dropdown menu on the top right and hitting the green play button.
7) afterwords select the **start** command and hit the same green play button. Your browser should open automatically and navigate to **http://localhost:3000**. This is the React development server, where we will run our React app while it is in development. (It will be different once we deploy the app to heroku).

Congrats! You are ready to develop the app. Read the GitWorkflow markdown for an explanation of what to do to create features and add them to the project.


