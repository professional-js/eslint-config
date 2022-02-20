[linebreak-style](https://eslint.org/docs/rules/linebreak-style)
================================================================
As with [`TABS VERSUS SPACES`™](no-mixed-spaces-and-tabs.md), linebreak styles should not be mixed.

The times when Unix line ending would cause trouble on Windows have long been over.
These days, there's no real need for the Carriage Return, [unless…](https://stackoverflow.com/a/22878533)

But since this is about `eslint`, it means, we are in the context of web development,
where the actual character sequence matter only for version control, which generally means `git`.

When working in mixed-platform teams, I've encountered linebreak-style issues despite `git` defaulting to `autocrlf`.
Therefore, my recommendation to anyone in this area is to set this in their `.gitconfig`:
```ini
[core]
	autocrlf = false
	eol = lf
```

The repositories themselves should be setup in a way that ensures the correct line endings for the repo's purpose.
Could be something lazy like this:
```ini
* text eol=lf
*.snap -text
```

In the end, this rule is basically active as a reminder to get this sorted on the git level.
