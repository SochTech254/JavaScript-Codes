// Regular expressions are a way to describe patterns in string data
// They are a powerful tool for inspecting and processing strings.
// A regular expression is a type of object. It can be either constructed 
// with the RegExp constructor or written as a literal value by enclosing a 
// pattern in forward slash(/) characters.

let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(/abc/.test("abcde"));    // -> true
console.log(/abc/.test("abxde"));    // -> false

let eighteenPlus = "/eighteen\+ /";
console.log(eighteenPlus);

/* 
Within square brackets, a hyphen ( - ) between two characters can be used
to indicate a range of characters, where the ordering is determined by the
character’s Unicode number.
*/
console.log(/[0123456789]/.test("in 1992"));    // -> true
console.log(/[0-9]/.test("in 1992"));    // -> test

/* 
A number of common character groups have their own built-in shortcuts.
Digits are one of them: \d means the same thing as [0-9] .
\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
Any character except for newline
So you could match a date and time format like 01-30-2003 15:20 with the
following expression:
*/

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));    // -> true
console.log(dateTime.test("30-jan-2003 15:20"));    // -> false

/* 
These backslash codes can also be used inside square brackets. For example,
[\d.] means any digit or a period character. But the period itself, between
square brackets, loses its special meaning. The same goes for other special
characters, such as + .

To invert a set of characters—that is, to express that you want to match any
character except the ones in the set—you can write a caret ( ^ ) character after the opening bracket.
*/
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));    // -> false
console.log(notBinary.test("1100100010200110"));    // -> true
// When you put a plus sign(+) after something in a regular expression,
// it indicates that the element may be repeated nore than once. Thus, /\d+/
// matches one or more digit characters.
console.log(/'\d+'/.test("'123'"));    // -> true
console.log(/'\d+'/.test("''"));    // -> false
console.log(/'\d*'/.test("'123'"));    // -> true
console.log(/'\d*'/.test("''"));    // -> true
// The star(*) has a similar meaning but also allows the pattern to match 
// zero times
// A question mark makes a part of a pattern optional, meaning it may occur
// zero times or one time. In the following example, the u character is 
// allowed to occur, but the pattern also matches when it is missing.
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));    // -> true
console.log(neighbor.test("neighbor"));    // -> true
/* 
To indicate that a pattern should occur a precise number of times, use braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times.
    Here is another version of the date and time pattern that allows both
single-and double-digit days, months, and hours. It is also slightly easier to decipher.
*/
let dateAndTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateAndTime.test("1-30-2003 8:45"));    // -> true
// You can also specify open-ended ranges when using braces by omitting the
// number after the comma. So, {5,} means five or more times.

/* 
To use an operator like * or + on more than one element at a time, you have to use parentheses. A part of a regular expression that is enclosed in parentheses counts as a single element as far as the operators following it are concerned
*/
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));    // -> true
/* 
The first and second + characters apply only to the second o in boo and hoo,
respectively. The third + applies to the whole group (hoo+) , matching one or
more sequences like that.
The i at the end of the expression in the example makes this regular expres-
sion case insensitive, allowing it to match the uppercase B in the input string, even though the pattern is itself all lowercase.
*/

// Regular expressions also have an exec (execute) method that will return 
// null if no match was found and return an object with information about 
// the match otherwise.
let match = /\d+/.exec("one two 100");
console.log(match);    // -> ["100"]
console.log(match.index);    // -> 8

/* 
When the regular expression contains subexpressions grouped with paren-
theses, the text that matched those groups will also show up in the array.
The whole match is always the first element. The next element is the part
matched by the first group (the one whose opening parenthesis comes first in
the expression), then the second group, and so on.
*/
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));    // -> ["'hello'","hello"]

/* 
When a group does not end up being matched at all (for example, when fol-
lowed by a question mark), its position in the output array will hold undefined .
Similarly, when a group is matched multiple times, only the last match ends
up in the array.
*/
console.log(/bad(ly)?/.exec("bad"));    // -> ["bad", undefined]
console.log(/(\d)+/.exec("123"));    // -> ["123", "3"]

/* 
Say we want to know whether a piece of text contains not only a number but a
number followed by one of the words pig, cow, or chicken, or any of their plural forms.
The pipe character ( | ) denotes a choice between the pattern to its
left and the pattern to its right. So I can say this:
*/
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));    // -> true
console.log(animalCount.test("15 pigchickens"));    // -> false

// String values have a replace method that can be used to replace part of
// the string with another string.
console.log("papa".replace("p", "m"));    // -> mapa

// When a g option (for global) is added to the regular expression, all 
// matches in the string will be replaced, not just the first.
console.log("Borobudur".replace(/[ou]/, "a"));    // -> Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));    // -> Barabadar

/* 
The real power of using regular expressions with replace comes from the fact
that we can refer to matched groups in the replacement string. For example,
say we have a big string containing the names of people, one name per line, in the format Lastname, Firstname . If we want to swap these names and remove
the comma to get a Firstname Lastname format, we can use the following code:
*/
console.log("Liskov, Barbara\nMcCarthy, John\nWalder, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));    // -> Barbara Liskov  John McCarthy  Philip Walder
/* 
The $1 and $2 in the replacement string refer to the parenthesized groups in
the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9 . The whole match can be referred to with
$& .
*/

/* 
It is possible to pass a function—rather than a string—as the second argu-
ment to replace . For each replacement, the function will be called with the
matched groups (as well as the whole match) as arguments, and its return value will be inserted into the new string.
Here’s a small example:
*/
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));    // -> the CIA and FBI
// Here's a more interesting one:
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) 
    {    // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0)
    {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));    // -> no lemon, 1 cabbage, and 100 eggs
/* 
This takes a string, finds all occurrences of a number followed by an alphanumeric word, and returns a string wherein every such occurrence is decremented by one.
The (\d+) group ends up as the amount argument to the function, and the
(\w+) group gets bound to unit . The function converts amount to a number—
which always works since it matched \d+ —and makes some adjustments in case
there is only one or zero left.
*/

/* 
It is possible to use replace to write a function that removes all comments
from a piece of JavaScript code. Here is a first attempt:
*/
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));    // -> 1 + 3
console.log(stripComments("x = 10; // ten!"));    // -> x = 10;
console.log(stripComments("1 /* a */ + /* b */ 1"));    // -> 1 1
/* 
The part before the or operator matches two slash characters followed by any
number of non-newline characters. The part for multiline comments is more
involved. We use [^] (any character that is not in the empty set of characters) as a way to match any character. We cannot just use a period here because block comments can continue on a new line, and the period character does not match newline characters.
*/

/* 
There are cases where you might not know the exact pattern you need to match
against when you are writing your code. Say you want to look for the user’s
name in a piece of text and enclose it in underscore characters to make it stand out. Since you will know the name only once the program is actually running, you can’t use the slash-based notation.
But you can build up a string and use the RegExp constructor on that. Here’s
an example:
*/
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));    // -> _Harry_ is a suspicious character.
/* 
When creating the \b boundary markers, we have to use two backslashes
because we are writing them in a normal string, not a slash-enclosed regu-
lar expression. The second argument to the RegExp constructor contains the
options for the regular expression—in this case, "gi" for global and case insensitive.
*/

/* 
But what if the name is "dea+hl[]rd" because our user is a nerdy teenager?
That would result in a nonsensical regular expression that won’t actually match the user’s name.To work around this, we can add backslashes before any character that has a special meaning.
*/
let name1 = "dea+h1[]rd";
let text1 = "This dea+h1[]rd guy is super annoying.";
let escaped = name1.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp1 = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text1.replace(regexp1, "_$&_"));    // -> This _dea+hl[]rd_ guy is super annoying.

/* 
The indexOf method on strings cannot be called with a regular expression. But
there is another method, search , that does expect a regular expression. Like
indexOf , it returns the first index on which the expression was found, or -1
when it wasn’t found.
*/
console.log("    word".search(/\S/));    // -> 4
console.log("    ".search(/\S/));    // -> -1
