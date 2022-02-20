Tabs versus Spaces
=================
Many things have been said on this topic, and regrettably most discussions devolve into a religious arguments over personal preferences. This document is intended as an objective investigation of the subject, so far as the author is capable of that.


First principles: a glossary of terms
-------------------------------------
Let's start with a look at what we are talking about, in order to better be able to spot and take into account facts, preferences, and assumptions, hidden or not. To do that, a viable option is to setup a glossary.

The following will be as precise as feasible while keeping in mind that it is meant as a foundation for resolving the issue of using tabs versus spaces. For instance, word wrap will be ignored here for simplicity. Also, all terms will be used and discussed in the context of code editors, applicability beyond that will vary and is of no concern here. Where editors differ, this will go with the labelling found in VScode, just because it's the author's editor of choice.

+	**Character**\
	An item of type, usually some kind of symbol.
+	**White space (character)**\
	Characters that do not print but horizontally offset the following characters by some distance, called its width.
	+	`White space character` denominates a single such character.
	+	`White space` denominates an inderterminate amount of such characters.
+	**Space**\
	A `white space character` of a small variable, but consistent, width. The width usually depends on the chosen font, but may be changed by the editor.
+	**Tab**\
	A term that is variously used to mean one of three related but different things:
	+	**Tab character**\
		A `white space character` of variable width. The width is always the distance to the next `Tab stop`.
	+	**Tab stop**\
		A point in a line of text that is at a variable distance from the beginning of the line. The distance depends on the settings and capabilities of the editor in use. The distance of any single `Tab stop` can vary between editors, between machines, between users. `Tab stop`s are most often set at consistent intervals of multiples of a `space`.
	+	**Tab key**\
		A key on a keyboard (or typewriter) that used to “skip ahead” in some manner dependent on context and configuration.
	+	[There is some history to the concepts here.](no-mixed-spaces-and-tabs.tab-history.md)
+	**Tab width / tab size**\
	The width of a `tab character`. Usually given as a multiple of `space`.
+	**Column**\
	A variable unit of horizontal distance. The distance depends on the settings and capabilities of the editor in use. It is usually equal to the current character. The editor may be setup to fix the width of a column, so that all columns are of equal width.
+	**Formatting**\
	Setting up pieces of text on different lines in such a way that related elements are at the same horizontal distance from the beginning of each line. This takes two main forms:
	+	**Indentation / Indent** 
		1.	White space at the beginning of a line of code used to visualize some logical structure, e.g. different levels of nested block scopes, parent/child-relationships.
		2.	The act of adding or setting such white space.
	+	**Alignment / Tabulation**\
		1.	White space beyond `indentation` used to arrange related pieces of data on multiple consecutive lines into vertical sections with shared horizontal boundaries.
		2.	The act of adding, or editing such white space.
+	**Cursor**\
	Insertion point for text, often visualized as a vertical line. Has a location at any character in any line of text.


### Code samples
In the code samples following later, Tab characters will be visualized by character sequences such as `--->`. The number of characters will be employed according to each sample's intended tab width.


Why use X
---------
Reasons in favor of tabs:
+	Less disk space
+	Semantically the most appropriate character
+	Every user can have their individual settings regarding tab width

Reasons in favor of spaces:
+	Visual appearance is kept more faithfully

First off, the disk space argument is just about irrelevant today, so we will ignore that.


### Semantics
The tab character signifies “tabulation”, arranging text in rows and columns. Obviously, when indenting, we are not meaning to jump to a completely different column in a table, but rather to visualize some kind of hierarchy. Therefore, there is some difference in meaning.

However, much of the alignment done beyond the beginning of the line is actually intended to tabulate. That means we have a middling semantic match for indentation and a good match for alignment.


### Visual fidelity vs Individual configuration
To reiterate:
+	Tabs: Every user can have their individual settings regarding tab width
+	Spaces: Visual appearance is kept more faithfully

Both are true, and both have some merit. That begs the question how valuable the two qualities of visual fidelity and individual configuration are, relative to each other.

Obviously, there's a lot of personal preference to that. And that is probably one of the main reasons why this debate is as fierce as it is. Still, let's see what we can find objectively.

#### Individual configuration
Are individual settings relevant? Yes. Of course, we could all use the same hardware and software with the same configuration, but nobody actually advocates that as the ideal way forward. The simple fact is that humans are too different individually for any single configuration to be ideal, or even appropriate, for everybody. Even for one individual, the ideal configuration will usually change over time. Eyes usually deteriorate over time, so generally, people will benefit from larger font sizes the older they become. Hence, individual settings are a goode thing.

But does that mean that tab widths should be configurable? Not necessarily. However, without configuration, there would need to be a definitive size, and that just does not exist. Also, configurable tabstops enable you to have comfortable spacious indentation on a 4k desktop screen while using tight utilitarian tabstops on your ultra-mobile device.

In short: tabs enable device-appropriate settings, which is definitely a win.

#### Visual fidelity
Generally, when people espouse the visual fidelity of spaces over tabs, they think about aligning pieces of code over multiple lines.

Let's examine a code snippet with different alignments:
```js
// 4-columns tabstops
/**
 * @param-->{string}--->name
 * @param-->{boolean}-->count
 * @returns>{number}
 */
function go (name, count) {
--->/**
---> * @param-->{string}--->name
---> * @param-->{boolean}-->count
---> * @returns>{number}
---> */
--->function go (name, count) {…
```
```js
// 8-columns tabstops
/**
 * @param------>{string}------->name
 * @param------>{boolean}------>count
 * @returns---->{number}
 */
function go (name, count) {
------->/**
-------> * @param------>{string}------->name
-------> * @param------>{boolean}------>count
-------> * @returns---->{number}
-------> */
------->function go (name, count) {…
```
```js
// 2-columns tabstops
/**
 * @param>{string}->name
 * @param>{boolean}>count
 * @returns>{number}
 */
function go (name, count) {
->/**
-> * @param>{string}->name
-> * @param>{boolean}>count
-> * @returns>{number}
-> */
->function go (name, count) {…
```
Looking at, it as obvious that with normal, equal-width tabstops, there can be readability issues.

#### A mixed strategy to the rescue
Note, that the issues in the previous examples are detrimental only within the comment blocks while the indentation tab characters do not hamper readability. Therefore, it is recommended to use [tabs for indentation, spaces for alignment](https://www.emacswiki.org/emacs/SmartTabs) in order to achieve a good tradeoff between semantic correctness and visual fidelity.

#### A better way
There is, however, a far superior approach: [Elastic tabstops](indent.elastic-tabstops.md)

Editor support is still in its infancy, unfortunately. Still, sufficiently modern teams and projects are invited to give it a go because it enables a developer experience that combines:
+	ease of use: one tab and you're good
+	configurability: set tab stops as appropriate for *your* use-case
+	robustness: no forgetting to update spaces when word lengths change
+	proper semantics: again, tabs
+	no more columns: see below

##### Columns
Much of the thought that goes into this debate is directly tied to the idea of arranging code in character-wide columns, thereby putting the monospace constraint of fonts. That is somewhat of a vicious circle. Combining elastic tabstops with proportional type is a way out of that boxy thinking.

There is very little practical value in having fixed-width columns. Multi-line selections are easier for columnar data, but 1) if it's intentionally columnar, elastic tabstops solve that problem at least as well, and 2) if accidentally columnar, it's usually of no value to do a column-constrained multi-line selection. In practice, word-constrained selections are far more common, and require good editor support anyway.

On the other hand, centuries of type-setting tell us that when given the choice, people prefer reading proportional fonts over monospace. The two basic reasons for the fact that monospace is the standard in coding are habit and developer resources for editor software. Habit, because people are lazy and afraid of change. Resources because beautiful typography is far more difficult than tabular arrangement of characters.


----


> [WIP]\
> The rest of this document is still somewhat unorganized and more or less a braindump.


Common misconceptions
---------------------
Merely reading through the glossary terms above, one can see some potential for misunderstandings. Let's look at some of the most important issues.


### Fonts
Often overlooked, the font used is one of the primary factors in how tabs and spaces work, and consequently have great impact on the validity of many assumptions and recommendations.

Fonts can be grouped according to several metrics. For this discussion, the main differentiator is whether the font is `proportional` or `monotype`:
+	Monospace fonts are made so that almost all characters have the exact same width.
+	Proportional fonts have character widths as most people expect them, with “M” being significantly wider than “i”.

In the early years of computer technology, available resources were far more constrained than today. Monospace fonts require substantially less computation to display. Consequently, monospace fonts were used everywhere, and many conventions and assumptions come from that time although the constraints have loosened or disappeared.

One such assumption is that in a code editor, a monospace font is used. That assumption is a fair assumption, for the most part.

What's important for this discussion is the fact that **modern code editors allow you to use proportional fonts**. That has important implications for many aspects of the debate.


### “A Tab is a multiple of a space”
Some people arguing against tabs point out the apparent problem of alignments breaking when someone uses tab widths other than what the original author used.

That argument implicitly assumes that a tab character represents multiple space characters, effectively being some kind of compression mechanism. That way of using tabs is obviously problematic and should be avoided.


### Columns, Characters, Spaces, Tab widths
When talking about cursor location as an offset from the beginning of the line, this columns are almost synonymous with characters, which are almost synonymous with spaces. That is one reason why those terms are frequently conflated in this context. When indentation is set to use tab characters, and `tabstop`s are set as multiples of space, the distinctions become relevant.

Given a tab width of 4 spaces, consider this code:
```js
1 if (condition) {
2 --->return result
3 }
```
The `return` keyword is indented one level, with one tab character, but the offset is 4 columns, which is the same width as 4 space characters.
