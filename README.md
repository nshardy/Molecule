> This is inspired by [Atom](https://atom.io), which sadly was archived on December 15, 2022. More can be learned from their [official announcement](https://github.blog/2022-06-08-sunsetting-atom/), and their [GitHub Page](https://github.com/atom/atom)

## Hello, World!
This is a side project I'm making while I'm in school, for my AAS-T in Software Development, which means that this project may not be updated frequently. If there are any issues, please submit them to [Issue Tracker](https://github.com/nshardy/Molecule/issues), if you want to create a pull request, you can find that in [Pull Requests](https://github.com/nshardy/Molecule/pulls).


## Table of Contents
- [Install](#install)
- [Running](#running)
	- [Developer](#developer)
	- [Production](#production)
- [Building](#building)



### Install
Run ** npm install** to install all dependencies
```terminal
npm install
```

If for some reason it doesn't install the dev-dependencies, run **npm install --save-dev**
```terminal
npm install --save-dev
```


### Running
##### Developer
If you want to run it in developer mode, run **npm run devtest**
```terminal
npm run devtest
```

##### Production
If you want to run it in developer mode, run **npm run prodtest**
```terminal
npm run prodtest
```


### Building
To try to build a working application, this project uses electron-forge
```terminal
npm run make
```