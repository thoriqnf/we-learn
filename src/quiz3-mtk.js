const questions = [
    {
        question : "Rumus umum suku ke-n untuk barisan aritmetika -1, 1, 3, 5, 7 adalah",
        optionA  : "Un = n + 2",
        optionB  : "Un = 2n - 1",
        optionC  : "Un = 2n - 3",
        optionD  : "Un = 3n - 2",
        correctOption : "optionD"
    },

    
    
    {
        question : "Rumus umum dari barisan aritmetika -8, 0, 8, 16 adalah ",
        optionA  : "Un = 2n",
        optionB  : "Un = 2n + 2",
        optionC  : "Un = 4n - 6",
        optionD  : "Un = 8n - 16",
        correctOption : "optionD"
    },

    {
        question : "Rumus suku ke-n dari barisan aritmetika -18, -15, -12, -9 adalah",
        optionA  : "Un = -3n + 15",
        optionB  : "Un = -3n + 15",
        optionC  : "Un = 3n - 21",
        optionD  : "Un = 3n + 21",
        correctOption : "optionC"
    },

    {
        question : "Rumus suku ke-n dari barisan aritmetika 5, 2, -1, -4, ... adalah ",
        optionA  : "Un = 5n - 3",
        optionB  : "Un = 3n + 2",
        optionC  : "Un = -3n + 8",
        optionD  : "Un = -3n - 8",
        correctOption : "optionC"
    },

    {
        question : "Diketahui suku ke-5 dan suku ke-9 dari suatu barisan bilangan aritmetika adalah 18 dan 6. Suku ke-3 barisan tersebut adalah ",
        optionA  : "24",
        optionB  : "21",
        optionC  : "15",
        optionD  : "12",
        correctOption : "optionA"
    },

    {
        question : "Diketahui suatu barisan aritmetika dengan U4 = 17 dan U9 = 37. Suku ketujuh barisan tersebut adalah ",
        optionA  : "29",
        optionB  : "25",
        optionC  : "40",
        optionD  : "44",
        correctOption : "optionA"
    },

    {
        question : "Diketahui barisan aritmetika dengan U5 = 17 dan U10 = 32. Suku ke-20 adalah",
        optionA  : "72",
        optionB  : "77",
        optionC  : "62",
        optionD  : "67",
        correctOption : "optionC"
    },

    {
        question : "Suku ketiga suatu deret aritmetika adalah 11. Jumlah suku keenam hingga suku kesembilan ialah 134. Suku pertama dan beda deret itu berturut-turut adalah ",
        optionA  : "2 dan 5",
        optionB  : "3 dan 5",
        optionC  : "1 dan 3",
        optionD  : "1 dan 5",
        correctOption : "optionD"
    },

    {
        question : "Jumlah n suku pertama deret aritmetika dinyatakan dengan Sn = 2n = 2n2 + 4n. Suku ke-9 dari deret aritmetika tersebut adalah ",
        optionA  : "38",
        optionB  : "34",
        optionC  : "42",
        optionD  : "46",
        correctOption : "optionA"
    },

    {
        question : "Jumlah 20 suku pertama suatu deret aritmetika ialah 500. Jika suku pertama ialah 5, maka suku terakhir deret itu adalah ",
        optionA  : "48",
        optionB  : "45",
        optionC  : "39",
        optionD  : "35",
        correctOption : "optionB"
    }



]

let shuffledQuestions = []

function handleQuestions(){

    while (shuffledQuestions.length <= 9){
        const random = questions[Math.floor(Math.random() * questions.length)]
        if(!shuffledQuestions.includes(random)){
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index){
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

function checkForAnswer(){
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption= null

    options.forEach((option) => {
if(option.value === currentQuestionAnswer){

    correctOption = option.labels[0].id
    }
})

if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false){
    document.getElementById('option-modal').style.display= "flex"
}

options.forEach((option) => {
    if (option.checked=== true && option.value === currentQuestionAnswer){
        document.getElementById(correctOption).style.backgroundColor ="green"
        playerScore++
        indexNumber++

    setTimeout(() => {
        questionNumber++
    },1000)
}

    else if (option.checked && option.value !== currentQuestionAnswer){
        const wrongLabelId = option.labels[0].id
        document.getElementById(wrongLabelId).style.backgroundColor ="red"
        document.getElementById(correctOption).style.backgroundColor="green"
        wrongAttempt++
        indexNumber++

    setTimeout(() => {
        questionNumber++
    },1000)
  }
})
}

function handleNextQuestion(){
    checkForAnswer()
    unCheckRadioButtons()

    setTimeout(() => {
        if(indexNumber <= 9){
           NextQuestion(indexNumber)
        }
        else{
            handleEndGame()
        }
        resetOptionBackground()
    },1000);
}

function resetOptionBackground(){
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons(){
    const options =document.getElementsByName("option");
    for (let i=0;i < options.length; i++){
        options[i].checked = false;
    }
}


function handleEndGame(){
    let remark = null
    let remarkColor=null

    if (playerScore <=3 ){
        remark="Bad Grades,Keep Practicing"
        remarkColor="red"
    }
    else if (playerScore >=4 && playerScore < 7){
        remark ="Good Joob"
        remarkColor="orange"
    }
    else if (playerScore >=7) {
        remark="Excellent"
        remarkColor="green"
    }
    const playerGrade= (playerScore/10)*100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML=playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal(){
    questionNumber=1
    playerScore=0
    wrongAttempt=0
    indexNumber=0
    shuffledQuestions=[]
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display="none"
}

function closeOptionModal(){
    document.getElementById('option-modal').style.display="none"
}



