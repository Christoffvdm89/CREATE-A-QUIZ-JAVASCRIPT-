let questions = [ // Array of objects for quiz questions & answers
  ["1. How many stars are there on the flag of China?", "2", "5", "7", "1", "B"],
  ["2. What is the currency of Mongolia?", "Yena", "Kirgin", "Topchok", "Tugrik", "D"],
  ["3. In which country is there a natural gas pit nicknamed the ‘Door to Hell’ that has been on fire since 1971?", "Turkmenistan", "Azerbaijan", "Bulgaria", "Iceland", "A"],
  ["4. In 2013 which two airlines merged to become the world’s largest airline?", "Air France and KLM", "American Airlines and US Airways", "British Airways and Iberia", "Lufthansa and Germanwings", "B"],
  ["5. Jaktogos went on sale in 2013. What are they?","A hot potato snack, served with cheese and chilli, popular in Mexico","Raincoats that tourists can buy from vending machines across the London Underground","A jacket covered in pockets allowing passengers to pack everything into their coats","A fashionable take on the plastic poncho originally from Tokyo","C"],
  ["6. Which celebrity was carried by their minders along the Great Wall of China?","Lady Gaga","Justin Bieber","Harry Styles","Daniel Radcliffe","B"],
  ["7. In 1976, Saigon changed its name to …?","Ho Chi Minh City","Pattaya","Saigon City","Hanoi","A"],
  ["8. Which country has more lakes than the rest of the world combined?","Finland","China","Norway","Canada","D"],
  ["9. Which country has the world's highest waterfall?","America","Japan","Venezuela","Uganda","C"],
  ["10. Persepolis FC is a football club of which country?","Turkey","Greece","Iran","Egypt","C"],
  ["11. What year did Albert Einstein die","1954","1949","1960","1955","D"],
  ["12. Which is the largest planet in the solar system?","Jupiter","Neptune","Eart","Mars","A"], 
  ["13. How many Presidents have there been of the USA?","36","29","46","44","D"],
  ["14. What colour is Cerulean?","Red","Blue","Yellow","Green","B"],
  ["15. What are a group of Dolphins called?","School","Herd","Pod","Pool","C"],
  ["16. Who discovered Penicillin","Alexander Fleming","Thomas Edison","Marie Curie","George Orwell","A"],
  ["17. What date was President John F Kennedy assassinated","November 22 1962","November 22 1963","October 29 1964","November 24 1962","B"],
  ["18. How many men have walked on the moon","10","5","12","9","C"],
  ["19. Who has won the most Academy Awards","James Cameron","Walt Disney","Katherine Hepburn","Steven Spielberg","B"],
  ["20. What is the currency of Brazil?","Dollar","The Bhat","Real","Krona","C"]
];

let currentQuestion = 0
let choices = []
let correct = 0
function formFiller(currentQuestion) {
  document.getElementById("quiz").innerHTML = questions[currentQuestion][0];
  document.getElementById("choice1").innerHTML = questions[currentQuestion][1];
  document.getElementById("choice2").innerHTML = questions[currentQuestion][2];
  document.getElementById("choice3").innerHTML = questions[currentQuestion][3];
  document.getElementById("choice4").innerHTML = questions[currentQuestion][4];

}

function nextQuestion(){
  
  choices.push(document.querySelector(":checked").value)
  document.querySelector(":checked").checked = false
   currentQuestion++
   formFiller(currentQuestion)
   console.log(choices)
   
}

function checkAnswers() {

  mark()
  alert("You got "+correct+" correct")
 


 var messages = ["Great job!", "That's just okay", "Think it will be great if you tried it again"]
        var range;

if (correct < 10){
    range=2;
}
else if (correct > 9 && correct <15){
    range=1;
}
else if (correct >14){
    range=0;
}
else{
  "null";
}

alert(messages[range])
console.log(messages)  
}

formFiller(currentQuestion)

function mark() {
for (let i = 0; i<questions.length; i++ ) {
  if (choices[i] == questions[i][5]) {
    correct ++
  }
}
}


//net die ingesit om message te gee.