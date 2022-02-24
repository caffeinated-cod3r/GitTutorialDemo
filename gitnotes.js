// to check wether git is installed on system or not open terminal and hit
// git


// to install git go to gitscm official website, and then donwload for windows or follow instructions for linux.
// after installation type git in the terminal to see if it is installed.


// after that you need to config your git , give your email in it, so that who did which change in the git repository can be
// tracked with the help of username and emails respectively. And someone can contact you on your email.
// right click and open terminal in the project folder in linux, and right click and open bash in windows for linux like experience.


// to configure username
// git config --global user.name "Arslan"

// then
// to configure email
// git config --global user.email "arslanahmad2009@gmail.com"

// to see your username and email
// git config --list

// to see your username
// git config user.name

// to see your email
// git config user.email


// to check that the folder in which we are going to work may be is already a git repository.
// git status

// to add all files in the tracking of the git (to put all files of the folder in staging area)
// git add --a

// now we need to commit these files (to make a snap of these staged files) -m means message and after that it is the message
// git commit -m "Initial Commit"


// to see all the commits
// git log


// to add a new created file or to stage an already added file
// git add filename


// if you will do gitinit in an git repository, then the git repository will be reinitialised
// gitinit (to reinitialize a git repository)


// to delete the git folder from the repository / to delete the repository from git ("rm -rf" deletes the content of any folder in linux)
// rm -rf .git


// clone a repository from github
// git clone url

// clone a repository from github with another name
// git clone url foldername(folder name is optional to download the repository in to folder other than the repository name)


// To check present working director
// “pwd”


// to list the contents of a folder 
// “ls”


// to change directory
// “cd name of foler where you want to go”


// to quit a git operation in terminal
// “q”

// to generate empty log files
// “touch error.log”


// to ingore files in git
// “touch .gitignore”

// then open gitignore file and write error.log in it to put error.log file in it


// then stage gitignore and commit it by saying added git ingore


// to ignore all files of a certain type, lets say .log files, go to .gitignore file and write
// *.log


// to ignore a folder/directory inside a git respository, write in .gitignore
// “foldername/”

// dir/


// to ignore just outer folder not folder inside other folders, write below code in .gitignore file
// “/dir/”

// we can give big addresses also in .gitignore, by writing below in .gitignore
// “foldername/foldername”


// git diff will compare working directory with staging area
// “git diff”


// git diff –staged will compare your current staging area with previous commmit
// git diff – staged will compare last commit with 



// this will stage all the tracked files and make their commit, and it will not let the untracked file to go in to commit.
// “git commit -a -m “direct commit” ”


// to professionally delete a file from git repository, so that this change will be staged also automatically
// “git rm filename”


// to professionally rename a file in git repository, so that , that file will be staged also automatically
// “git mv first.txt first_renamed.txt”


// to untrack a file that was previously was in tracking but now moved to .gitignore
// “git rm --cached filenamewithextention”

// to delete .git folder/directory or to delete a git repository from a folder.
// “rm -rf .git”





















