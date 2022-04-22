const { SlashCommandBuilder } = require('@discordjs/builders');
const utilities = require('../utilities.js');

module.exports = {
    phrases:
    [
        "You all have decision to make, drop class and be happy or stay in class and suffer. Your choice.",
        "You are lucky people. No pen, no book, no knowledge, and you are happy.",
        "Everyone with the code",
        "It is not a problem with the server it is a problem with the Monday",
        "Now I will show you the face of the person who is responsible for all this trouble, at least you will have the enemy in front of you.",
        "I will wait for you to log in and then we will do the blah blah blah",
        "If you make decision to be in my class, be strong, drink milk, take the vitamins",
        "International students, if you are traveling home, do your best not to fail the class",
        "Welcome to the new trouble in your life",
        "Try to smile, don't cry",
        "Wait for me. I will bring the person who is responsible.",
        "You can leave your phones behind, there is no emergency. If there is, we will all die together",
        "You are all students, so you deserve to suffer",
        "Lovely company. Wake up. I know its brutal 3 hour class",
        "Well, you tried and it looks horrible but mostly works. You all get A\'s, congratulations.",
        "I have too many candies. Take a candy or I will throw them at you",
        "Your site\'s design looks like it was made by a computer scientist, which is to say it is very bad, but that is what I expected.",
        "If you do not properly explain final project, you will have beautiful zero *hand gesure* for final project grade",
        "If you are computer science students, you have no life. So this Thanksgiving weekend start studying for exam.",
        "You have the book for PHP. I am absolutely certain you will not read it",
        "In the method called \"wake up or I will kill you all\"",
        "You will not share work, or you will die peacefully in my class.",
        "That's all for your torture today. We will proceed next class on Wednesday",
        "It is possible too",
        "After.....psh",
        "Another story...remember the story with constructor?",
        "Remote students wake up!",
        "Or another story, reference data types",
        "It is nothing special, same thing with Java",
        "Java, nothing special!",
        "It is a simulation!",
        "And now we will start with the c++",
        "Again, question for the exam!",
        "One second...",
        "This is the story of copy and paste.",
        "If you have exception handling In the language you are lucky",
        "Survive until the end of the PowerPoint because we have exam",
        "We will have a quiz over break",
        "You are students you should suffer",
        "The work of art from graders. I will close and then grade myself.",
        "This is the story with grading. It is very difficult to ask our graders to do their job properly."
    ],
    data: new SlashCommandBuilder()
        .setName('oksana')
        .setDescription('Quotes Oksana'),
    async execute(interaction) {
        await interaction.send(utilities.choose(phrases));
    },
};