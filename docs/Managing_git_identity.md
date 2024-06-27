# How to manage git with multiple keys

To clone a repository fresh and specify a key:

`git clone -c core.sshCommand="/usr/bin/ssh -i $HOME/.ssh/id_rsa" git@github.com:username/repo.git`

Then to configure the repository to look for a specific key:

`git config --local core.sshCommand "/usr/bin/ssh -i $HOME/.ssh/id_rsa"`

This is useful for making use of the free codespace time.
