const questions = [
    {
        question : "Terdapat persegi dengan panjang sisi (3x - 2)cm Luas persegi tersebut adalah cm2 ",
        optionA  : "(9x2 - 12x - 4)",
        optionB  : "(9x2 - 4)",
        optionC  : "(9x2 + 4)",
        optionD  : "(9x2 - 12x + 4)",
        correctOption : "optionD"
    },

    
    
    {
        question : "Sebuah persegi panjang mempunyai panjang (2x - 1)m dan lebar (x + 3)m Luas persegi panjang tersebut adalah .. m2.",
        optionA  : "(2x2 - 3)",
        optionB  : "(2x2 + 5x + 3)",
        optionC  : "(2x2 - 5x - 3)",
        optionD  : "(2x2 + 5x - 3)",
        correctOption : "optionD"
    },

    {
        question : "Sebuah segitiga memiliki panjang sisi (2x + 1)m, (3x - 5)m, dan (x + 3)m dan  Keliling segitiga tersebut adalah ... m",
        optionA  : "(6x - 4)",
        optionB  : "(6x - 1)",
        optionC  : "(6x + 1)",
        optionD  : "(6x + 2)",
        correctOption : "optionB"
    },

    {
        question : "Jumlah dari enam bilangan bulat genap berurutan adalah c. Berapakah bilangan bulat terkecilnya",
        optionA  : "c - 6 / 5",
        optionB  : "c - 3 / 6",
        optionC  : "c - 60 / 6",
        optionD  : "c - 30 / 5",
        correctOption : "optionD"
    },

    {
        question : "Pada tahun ini, umur seorang adik 5 tahun kurangnya dari umur kakak. Lima tahun kemudian, jumlah umur kakak dan adik menjadi 35 tahun. Tentukanlah masing-masing umur mereka saat ini.",
        optionA  : "umur kakak 10 tahun, umur adik 5 tahun",
        optionB  : "umur kakak 15 tahun, umur adik 10 tahun",
        optionC  : "umur adik 10 tahun, umur kakak 20 tahun",
        optionD  : "umur adik 15 tahun, umur kakak 20 tahun",
        correctOption : "optionB"
    },

    {
        question : "Diketahui dua bilangan berselisih 48. Bilangan yang satu sebesar lima kali dari bilangan yang lain. Jika a adalah banyak provinsi di Indonesia saat ini, berapa nilai a ditambah dengan kedua bilangan tersebut",
        optionA  : "103",
        optionB  : "104",
        optionC  : "108",
        optionD  : "106",
        correctOption : "optionD"
    },

    {
        question : "Umur seorang ibu saat ini sama dengan tiga kali umur anaknya. Selisih umur mereka saat ini adalah 26 tahun. Tentukanlah jumlah umur mereka 5 tahun mendatang.",
        optionA  : "60 tahun",
        optionB  : "62 tahun",
        optionC  : "64 tahun",
        optionD  : "66 tahun",
        correctOption : "optionB"
    },

    {
        question : "Jumlah dua bilangan adalah 25. Tiga kali bilangan yang lebih kecil dikurangi bilangan yang lebih besar adalah 3. Bilangan berapakah itu",
        optionA  : "14",
        optionB  : "16",
        optionC  : "20",
        optionD  : "18",
        correctOption : "optionD"
    },

    {
        question : "Harga 3 buah buku dan 5 pensil adalah Rp 42.000. Jika harga sebuah buku adalah 3 kali harga sebuah pensil, tentukanlah harga masing-masing pensil dan buku.",
        optionA  : "Pensil Rp3.000,00, Buku Rp9.000,00",
        optionB  : "Pensil Rp2.000,00, Buku Rp7.000,00",
        optionC  : "Pensil Rp2.500,00, Buku Rp5.000,00",
        optionD  : "Pensil Rp3.500,00, Buku Rp9.000,00",
        correctOption : "optionA"
    },

    {
        question : "Jumlah tiga bilangan ganjil positif yang berurutan adalah 21. Tentukanlah tiga bilangan tersebut. ",
        optionA  : "3, 7, 11",
        optionB  : "1, 9, 11",
        optionC  : "5, 7, 9",
        optionD  : "3, 7, 9",
        correctOption : "optionC"
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



