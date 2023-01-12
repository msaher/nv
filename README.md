# nv: a notebook viewer

An app that hooks into a directory consisting of plain text notes (various
formats are supported), it then launches a local server that allows you to
browse through your notes in an interactive manner.

# Motivation

In recent years many note taking applications have appeared, and while these
projects are amazing, they usually require you to use either their in-house
format or their in-house text editor. This is not ideal for certain people as
they'd rrather keep using their preferred format combined with their favorite
editor. `nv` functions as a generic note viewer allowing you to use any
supported format and it doesn't care about your editor.


![Viewing my old stat notes in `nv`](/img/nv.png)

# Supported formats

Since `nv` is powered by `pandoc`, it supports a wide range of formats including:

-  `.docx`
-  `.epub`
-  `.fb2`
-  `.gfm`
-  `.haddock`
-  `.html`
-  `.jats`
-  `.json`
-  `.tex`
-  `.man`
-  `.md`
-  `.markdown`
-  `.odt`
-  `.opml`
-  `.org`
-  `.rst`
-  `.t2t`
-  `.wiki`
