---
layout: post
title: Private Vim
---

Recently one of my specific Vim need had surprisingly no simple enough solution.

The need I had is very simple: I needed a setting/flag to open Vim/Neovim in
private mode. This was so that the cirtical files I opened left no traces to be
recovered by a malicious program. I wanted the editor to open without any
plugins, swapfiles, or backup so that it exited without a trace when its closed.
Not even ability for the process to connect to Internet.

I wanted this to be a temporary setup for critical files alone. This can be
acheived by explictly disabling `swapfile`, `backup` and `undofile`. It turns
out that Vim/Neovim can accept commands via flags. Now, in addition to these I
also wanted Vim to not load any plugins. Beyond the complexity that gets
introduced via plugins, there is a real security aspect in today's plugins as a
bunch of them can & do send the contents of the file to external server. For
example TabNine & Github Copilot.

I have packed all these settings into an alias that can easily invoke a private
session of Neovim:

``` zsh
alias np='unshare -rn nvim --clean -n -c "set nobackup noswapfile noundofile"'
```

![Private Vim]({{ site.baseurl }}/assets/private_vim.png)

In addition to privacy, I am loving the speed of startup. Its makes one think,
how much the plugins affect the startup time. Perhaps I need to review my vimrc
and prune somethings to improve the speed. But thats for another post.
