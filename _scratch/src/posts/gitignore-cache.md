---
title: .gitignore fo sho
template: posts.hbt
date: 2015-08-07
description: Misc notes for using QGIS
author: Michael Pereira
tags: git, development
---



.gitignore doesn't apply to previously tracked files.



##### Single file####
Untrack a previously added file from your repository. This stops tracking the file but it remains in your local.
``` git rm --cached <filename>```

##### Multiple files####
Untrack everything that is now in .gitignore. Commit outstanding code changes to ensure they remain tracked before clearing the git cache.

``` git rm -r --cached .```


This removes your changed files from git's index or staging area. Added them back.

```git add .```

Commit.

```git commit -m "Updated repo for .gitignore"```

 Carry on as usual.
