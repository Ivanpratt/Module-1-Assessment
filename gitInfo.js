/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a local version control utility toolbox created to track changes in local code, including edits, fork, rollbacks, and branches."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "Github is an online repository and code-sharing site. Developers use it as a way to track changes made to code via Git on the web, and store as a cloud backup of said code in the event that their local repository fails. Since repositories can be made public, programmers also use it as a code sharing hub for peer review and open-source availability."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "Git Init is the command someone runs on their local machine, which creates a local Git repository of the current working directory via the creation of a .git hidden folder. Inside the hidden folder are all of the Logs and configuration data Git uses to keep track of the code. "

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "Git clone is a local command used with a Github URL as an argument, which the tool uses to in order to make a clone or copy of the online repository and store in in the current working directory that Git Clone was run."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let = gitStatusDefinition = "Git status is a local command used to check the status of a local repository inside the current working directory. It prints out if any files have not been added, committed, or pushed."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "Git Add is a local command used to add specified files to the local Git repostory to be tracked."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "Git Commit is a local command used to Commit to file changes of all tracked files in local repository of the current working directory. Changes inside files are not Documented until you use this command."
let gitCommitCode = 'Git commit -m "Initial Commit Example"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "Git Push is a local command that Pushes, or upload, a local repository inside the current workig directory to the cloud (In our case, github). This includes the full Repository + files."