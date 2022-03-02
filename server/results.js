const games = [
	{title: "Riven: The Sequel to Myst", desc: "A really good point and click adventure game, and the Sequel to Myst", url: "https://www.gog.com/en/game/riven_the_sequel_to_myst"},
	{title: "Team Fortress 2", desc: "Valve's 2007 class-based shooter. 9 classes to play from!", url: "https://store.steampowered.com/app/440/Team_Fortress_2/"},
	{title: "HunniePop", desc: "👀", url: "https://en.wikipedia.org/wiki/HuniePop"},
	{title: "OMORI", desc: "Upbeat escapist RPG with dark twists", url: "https://store.steampowered.com/app/1150690/OMORI/"},
	{title: "Yume Nikki", desc: "RPGMaker game classic from 2004 made by a mysterious Japanese guy. I'm dead serious anyone reading this should play it, it's free on Steam but maybe not for everyone because it's basically a walking simulator", url: "https://store.steampowered.com/app/650700/Yume_Nikki/"},
	{title: "Factorio", desc: "Factory automation building game", url: "https://store.steampowered.com/app/427520/Factorio/"},
	{title: "Metal Gear Solid", desc: "Stealth game with more cutscenes than gameplay. Directed by Hideo Kojima", url: "https://en.wikipedia.org/wiki/Metal_Gear_Solid_(1998_video_game)"},
	{title: "Half Life 3", desc: "It's right here boys", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
	{title: "Sunset Overdrive", desc: "Most underrated game ever, this game slaps so hard. The movement in this game is insane", url: "https://www.youtube.com/watch?v=4e3nojPqK0E"},
	{title: "Vim", desc: "Wait that's not a game that's a text editor. Oh well Vim is awesome", url: "https://www.youtube.com/watch?v=bshMXXX40_4"},
]

const programmingConcepts = [
	{title: "Technical Debt", desc: "The debt of time where you have to go back and rewrite loads of code because you didn't do it right the first time", url: "https://en.wikipedia.org/wiki/Technical_debt"},
	{title: "Functions", desc: "Reusable pieces of code that can be called from other areas of a program", url: "https://www.cs.utah.edu/~germain/PPS/Topics/functions.html"},
	{title: "API", desc: "Application Programming Interface. Allows different programs to communicate with each other", url: "https://en.wikipedia.org/wiki/API"},
	{title: "camelCase", desc: "whereYouWriteWordsLikeThis", url: "https://en.wikipedia.org/wiki/Camel_case"},
	{title: "PascalCase", desc: "DifferentFromCamelCaseCapitaliseTheFirstLetterToo", url: "https://techterms.com/definition/pascalcase"},
	{title: "Compiling", desc: "Converting code in a high level language to lower level code that sometimes runs natively on the machine", url: "https://en.wikipedia.org/wiki/Compiler"},
	{title: "Bug", desc: "The name for errors in computer software. Named because an insect got trapped in a punchcard once making the computer not work", url: "https://en.wikipedia.org/wiki/Software_bug"},
	{title: "Git", desc: "Most popular version control system. Made by Linus Torvalds, who also made Linux. He called it git for many different reasons (see link)", url: "https://en.wikipedia.org/wiki/Git#Naming"},
	{title: "Data Types", desc: "Types of data. Important because computers need to know how to interpret bits in memory in a program. Examples include integers, floats, doubles, strings, booleans", url: "https://en.wikipedia.org/wiki/Data_type"},
	{title: "Memory management", desc: "Managing memory of a computer either manually (C, C++, Rust) or automatically (every other language basically)", url: "https://en.wikipedia.org/wiki/Memory_management"},
]

const colors = [
	{title: "Blue", desc: "Very calming color and technically the worlds most popular. 8/10", url: "https://en.wikipedia.org/wiki/Blue"},
	{title: "Green", desc: "Different color, quite positive 7/10", url: "https://en.wikipedia.org/wiki/Green"},
	{title: "Yellow", desc: "Bright attention grabbing color. Kind of looks crap most of the time 3/10", url: "https://en.wikipedia.org/wiki/Yellow"},
	{title: "Pink", desc: "Girly girl color for girls 3/10", url: "https://en.wikipedia.org/wiki/Pink"},
	{title: "Purple", desc: "Sort of emo color. Bright purple can be nice though 5/10", url: "https://en.wikipedia.org/wiki/Purple"},
	{title: "Magenta", desc: "PRINTER NEEDS MORE MAGENTA 0/10", url: "https://en.wikipedia.org/wiki/Magenta"},
	{title: "Cyan", desc: "PRINTER NEEDS MORE CYAN, but I actually love this color 10/10", url: "https://en.wikipedia.org/wiki/Cyan"},
	{title: "Black", desc: "Very eye pleasing, great for darkmode. Solid default color for loads of things 10/10", url: "https://en.wikipedia.org/wiki/Black"},
	{title: "White", desc: "Ow my eyes. But otherwise kinda pure and nice 7/10", url: "https://en.wikipedia.org/wiki/White"},
	{title: "Red", desc: "Kind of negative, very attention grabbing 4/10", url: "https://en.wikipedia.org/wiki/Red"},
]

const fruits = [
	{title: "Apple", desc: "Sweet, colorful fruit", url: "https://en.wikipedia.org/wiki/Apple"},
	{title: "Pear", desc: "Mellow, green fruit", url: "https://en.wikipedia.org/wiki/Pear"},
	{title: "Tomato", desc: "Technically a fruit. Used in savoury dishes", url: "https://en.wikipedia.org/wiki/Tomato"},
	{title: "Banana", desc: "Yellow sweet long fruit. High In Potassium", url: "https://en.wikipedia.org/wiki/Banana"},
	{title: "Pineapple", desc: "Sour and sweet giant fruit that will hurt your tongue if you eat too much", url: "https://en.wikipedia.org/wiki/Pineapple"},
	{title: "Orange", desc: "Very sweet juicy fruit.", url: "https://en.wikipedia.org/wiki/Orange_(fruit)"},
	{title: "Kiwi", desc: "Sour and sweet fruit with plenty of pips", url: "https://en.wikipedia.org/wiki/Kiwi"},
	{title: "Grapefruit", desc: "Tastes horrible 0/10 don't eat this crap", url: "https://en.wikipedia.org/wiki/Grapefruit"},
	{title: "Grapes", desc: "Can be used to make wine 🍷. Also some people eat them???", url: "https://en.wikipedia.org/wiki/Grapes"},
	{title: "Watermelon", desc: "Full of water. Can be very sweet, can be very underwhelming", url: "https://en.wikipedia.org/wiki/Watermelon"},
]

const results = {games: games, programmingConcepts: programmingConcepts, colors: colors, fruits: fruits};

module.exports = results;