const questions = [
    {
        question : "Audrey memiliki pita sepanjang  m dan Lucky memiliki pita  cm. Perbandingan panjang pita Audrey dan Lucky adalah",
        optionA  : "1 : 3",
        optionB  : "1 : 30",
        optionC  : "1 : 2",
        optionD  : "1 : 45",
        correctOption : "optionB"
    },

    
    
    {
        question : "Sebuah panti asuhan memiliki persediaan beras yang cukup untuk 20 orang selama 15 hari. Jika penghuni panti asuhan bertambah 5 orang, persediaan beras akan habis dalam waktu",
        optionA  : "8",
        optionB  : "10",
        optionC  : "12",
        optionD  : "20",
        correctOption : "optionC"
    },

    {
        question : "Sebuah mobil dengan kecepatan 60 km/jam memerlukan waktu 3 jam 30 menit. Jika kecepatan mobil 90 km/jam, waktu yang diperlukan untuk menempuh jarak yang sama adalah ",
        optionA  : "2 JAM 15 MENIT",
        optionB  : "1 JAM 15 MENIT",
        optionC  : "2 JAM 30 MENIT",
        optionD  : "2 JAM 20 MENIT",
        correctOption : "optionD"
    },

    {
        question : "Suatu pekerjaan dapat diselesaikan oleh 50 orang dalam 8 bulan. Agar pekerjaan tersebut dapat diselesaikan dalam 5 bulan, diperlukan tambahan pekerja sebanyak ",
        optionA  : "80 orang",
        optionB  : "45 orang",
        optionC  : "42 orang",
        optionD  : "30 orang",
        correctOption : "optionD"
    },

    {
        question : "Enam tahun yang lalu, jumlah umur Owen dan ibunya adalah 60 tahun dengan perbandingan 5 : 7 . Umur Owen sekarang adalah ",
        optionA  : "25 tahun",
        optionB  : "32 tahun",
        optionC  : "31 tahun",
        optionD  : "35 tahun",
        correctOption : "optionC"
    },

    {
        question : "Perbandingan uang Verrel, Saffa, dan Mahesa adalah 4 : 3 : 2. Jika jumlah uang Verrel dan uang Saffa Rp42.000,00, maka jumlah uang mereka bertiga adalah ",
        optionA  : "Rp54.000,00",
        optionB  : "Rp60.000,00",
        optionC  : "Rp62.000,00",
        optionD  : "Rp58.000,00",
        correctOption : "optionA"
    },

    {
        question : "Perbandingan panjang dan lebar persegi panjang 8 : 5. Jika kelilingnya 78 m, luasnya adalah",
        optionA  : "180 m2",
        optionB  : "360 m2",
        optionC  : "480 m2",
        optionD  : "720 m2",
        correctOption : "optionB"
    },

    {
        question : "Jika 100 ekor harimau dapat memakan 50 ekor kambing dalam waktu 2 minggu, maka berapa banyak kambing yang dapat dimakan oleh 50 ekor harimau dalam waktu 50 minggu",
        optionA  : "50 ekor",
        optionB  : "250 ekor",
        optionC  : "625 ekor",
        optionD  : "1.250 ekor",
        correctOption : "optionC"
    },

    {
        question : "Jarak dua kota pada peta adalah 20 cm. Jika skala peta 1 : 600.000 , jarak dua kota sebenarnya adalah ",
        optionA  : "1.200 km",
        optionB  : "30 km",
        optionC  : "12 km",
        optionD  : "120 km",
        correctOption : "optionD"
    },

    {
        question : "Sutan dan Tobi akan mengecat rumah orang tua mereka. Sutan dapat menyelesaikan selama 24 hari, sementara Tobi dalam 8 hari. Jika Sutan dan Tobi bekerja bersama, rumah itu akan selesai dicat selama ",
        optionA  : "4 hari",
        optionB  : "6 hari",
        optionC  : "7 hari",
        optionD  : "8 hari",
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



