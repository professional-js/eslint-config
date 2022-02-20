Copied for safe-keeping from
https://web.archive.org/web/20090615091848/http://www.nabble.com/-long--Re:-Elastic-tabstops-p20025677.html on 2021-02-06


----

<pre>
On 17/10/2008, at 09:18 , David Tulloh wrote:

> I can see fancy tabs working fairly well in a fancy editor, it sounds
> like how Microsoft Word implemented tabs.  If you just use the tab
> symbol in the ascii files it should be backwards compatible with
> all us
> normal tab users too.

History lesson:

The "Tab" key on a computer keyboard is inherited from the "Tab" key
on a typewriter. the "Tab" key on a typewriter is used to tabulate
data. The full name for that key is "tabulate". In the good old days
when you used to type everything by hand - when an error would cost
you a page of typewriter paper and the time to retype everything up
to that point again - you'd set "Tab stops", which defined the
columns in your tables (and in those days, tables were just rows of
content all lined up neatly, though you could draw lines in by hand
or use some of those fancy letraset things to rub straight, neat
lines onto the page):

  Tab stop bar:   |------V-----------------V------|

  Typing:         Dear Sir,
                  We are pleased to offer:
                         French Vanilla    $12.00
                         English Custard   $ 8.50
                         Irish Whiskey     $22.40

                  Sincerely,
                  Bramble & Botts Dairy

So for example, you'd set the first tab stop at 2", the second at 8"
because those were the two columns - product description & price.
Then as you were typing, you'd type the product description, TAB,
price, then flip the big lever which returned the typing carriage to
the starting position (and would simultaneously roll the paper up by
one line of text, which incidentally is where the idea of "Carriage
Return" and "Line Feed" come from).

Then came the digital electronic computer. People started writing
text editors, and because they had limited resources (a computer
screen has no convenient interface to set tab stops), they took
shortcuts like fixing tablulation stops every 8 columns. Some people
didn't like 8 columns so they started typing four spaces instead.
 From this came the great indent wars.

Real people use real TAB stops for indentation.

Foolish people who don't know enough about recent history (such as,
what a mechanical typewriter is and *how to use one*) use spaces for
indentation.

"TAB" key = "Tabulation". Any data that is tabular in nature will use
TAB STOPS. If your editor can't handle custom tab stops, and defaults
to either moving your virtual typing carriage by a fixed number of
characters, or moving to fixed columns, you just need to get a better
editor.

The use of the "tabulate" key to move between fields in form-based
interfaces is more like what it's supposed to be used for. Do you use
the space bar to move between form fields? No. Why? Because you're
not a primitive ape still smashing rocks together to make fire. If
you were using a mechanical typewriter, you'd set up the form so that
the left hand edge of fields lined up as often as possible, so that
folks filling out the form with a mechanical typewriter could use the
tabulation controls on their typewriter to get the stuff they're
typing into the right boxes on the form.

Oh, and in the good old days, if you didn't set tabulation stops up
on your typewriter, guess what happened when you pressed the Tabulate
key? That's right, the typewriter would tabulate you right off the
page! "Tab" ... whooosh ... *DING*. Always a fun thing to do when the
fancy toff on the other end of the table is trying to write a fancy
letter with his fancy fountain pen on his expensive "my weekly salary
per page" paper.

Fourty years of Unix, and you guys still can't get tab stops right.
WordStar had it, Microsoft Word had it. HTML has it.

So please, it's not a "fancy tab" that is used in "fancy editors".
Unless you consider a mechanical typewriter to be a "fancy editor".
Just because both vi and EMACS don't implement this feature doesn't
mean that the feature is somehow only conceivable by hippies and beat
poets.

For clean code, you end up tabulating your mass-initialisations:

  x                  = 33
  long_variable_name = 'fliggedybloop'

So all this feature is doing is automating the setting of tab stops
for you. Finally computers can do something *at least as well* as a
mechanical typewriter. That way when you add
"even_longer_variable_name = 'blah'" to the code, you don't have to
commit two extraneous lines of change to the code base:

  x                         = 33                # These lines haven't
changed
  long_variable_name        = 'fliggedybloop'
  even_longer_variable_name = 'blah'            # This line was added

When it comes to working with other people's code - just stick to the
whitespace conventions they started with. There's nothing more
annoying than having 148 lines of diff for a 148 line file where some
idiot[1] decided to replace all tabs with 4 spaces. If you demand
compatibility with "cat", "more" and "less", use spaces. Modern
programmers use code editors to read and write source code, so using
TAB to align text to tab stops is a nicer option.

Alex

[1] http://www.jwz.org/doc/tabs-vs-spaces.html

PS: FWIW, my "magic" line of choice is:\
# -*- Mode: Ruby; tab-width: 3; c-basic-offset: 3; coding: ISO-8859-1
-*-
# vi: set tabstop=3 noexpandtab

PPS: Why 8 characters?

PPPS: Do you use "cat" to read HTML? No you don't. Why, then, would
you use "cat" to read source code? Yes, email is a useless medium for
communicating tabular data - you have to lay things out with SPACES
and ASSume that the reader is using a monospace font!

--
linux mailing list
linux@...
https://lists.samba.org/mailman/listinfo/linux

</pre>
