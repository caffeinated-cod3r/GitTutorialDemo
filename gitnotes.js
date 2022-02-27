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




// Too see the changes 
// “git log”

// too see the commits along with differences
// “git log -p”


// too see specific number of commits along with differences
// “git log -p -2 or 3”


// too see the stats of insertions and deletions
// “git log –stat”

// to see all commits each in a single line 
// “git log –pretty=oneline”

// to see commit author and message only
// “git log –pretty=short”


// to see some more info as compared to “git log –pretty=short”, long will show author and  committer both.
// “git log –pretty=long”


// to see commits since certain days
// “git log –since =2.days”
// “git log –since =2.weeks”
// “git log –since =2.months”
// “git log –since =2.years”


// go to scm documentation then go to pretty formats and you can use placeholders as mentioned in that section , like to see the list having hash and author name
// “git log –pretty=format: “%h –%an”


//  to see the list having hash and author email
// “git log –pretty=format: “%h –%ae”





// We can change the old commit also, 
// “git log -p -1” to get a specific commit 

// make some change in the repository, then stage the changed file then
// “git log –amend’

// a vim notepad will open , change or append or amend the commit message in it and thats it,
// now that commit has been amended.
 
// To edit in vim notepad (type I and start typing to change, then press escape then press colon along with shift then pess w and then press q and then enter.



// To unstage a file 
// “git restore –staged filename”



// to revert a specific file of  a repository to previous commit, the new changes will be deleted in that file of the repository.
// “git checkout –filename”


// if you add a file and then do
// “git checkout –filename” 
// then nothing of the file will be deleted, and in git status nothing will be changed, so its kind of safety lock, like the safety of a pistol.



// It will revert all files of a repository to previous commit.
// “git checkout -f”


// making a remote repository out of a local repository
// “git remote add origin(urlname) https://github.com/caffeinated-cod3r/GitTutorialDemo.git (this lin is achieved after creating a repository on Git Hub)


// to get links for push and get
// “git remote -v”


// then create SSH key by going to git hub documentation, and copying first command , no need to copy paste two many commands.
// ssh-keygen -t ed25519 -C "your_email@example.com"


// Add your SSH private key to the ssh-agent
// ssh-add ~/.ssh/id_ed25519



// Copy the SSH public key to your clipboard. 

// cat ~/.ssh/id_ed25519.pub (as per git hub documentation)
// tail ~/.ssh/id_ed25519.pub (as per harry bhai)


// then paste it add SSH key in git hub

// after that generate a Git Hub personal access token that will be used instead of password by following Git Hub documentation

// and thats it, its done.

// And at the end of the procedure, type



// Git hub personal access token
// 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



// Alias
// to choose an alternate code for status as st
// “git config –global alias.st status”


// to remove an alias
// git config --global --unset alias.st



// to choose an alternate code for commit as ci
// “git config –global alias.ci commit”

 



// to config that whenever I write unstage word the following ‘restore –staged –’ should automatically run invisibly
// “git config –global alias.unstage ‘restore –staged –’

// so now I will just type
// “git unstage filename” to unstage a file





















