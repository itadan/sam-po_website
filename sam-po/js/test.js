const questions = [
    {
        question: "В какой день отмечают международный день эскимо? ?",
        optionA: "24 декабря",
        optionB: "24 января",
        optionC: "24 февраля",
        optionD: "24 сентября",
        correctOption: "optionB"
    },


    {
        question: "С какими добавками ел мороженое Кевин Маккаллистер в фильме «Один дома»?",
        optionA: "С коктейльной вишней, зефиром и шоколадным соусом",
        optionB: "С бананом, клубникой и орехами",
        optionC: "С ананасом и шоколадом",
        optionD: "Без дополнительных ингредиентов",
        correctOption: "optionA"
    },

    {
        question: "Как в Японии называют десерт из стружки льда с сиропом?",
        optionA: "Моти",
        optionB: "Сэмбэй",
        optionC: "Какигори",
        optionD: "Мамбао",
        correctOption: "optionC"
    },

    {
        question: "Сколько стоил вафельный рожок в «Макдоналдсе» в Москве десять лет назад?",
        optionA: "13 рублей",
        optionB: "14 рублей",
        optionC: "15 рублей",
        optionD: "16 рублей",
        correctOption: "optionC"
    },

    {
        question: "Какой российской марки мороженого не существует?" ,
        optionA: "«Миссис Айси»",
        optionB: "«Ледяная долина»",
        optionC: "«Отмороженное»",
        optionD: "Гигант",
        correctOption: "optionB"
    },

    {
        question: "Как называют кофейный напиток с шариком ванильного мороженого?",
        optionA: "Флэт-уайт",
        optionB: "Глясе",
        optionC: "Раф",
        optionD: "Бамбл",
        correctOption: "optionB"
    },

    {
        question: "Существует ли формула поедания мороженого?",
        optionA: "Да",
        optionB: "Конечно, нет. Дайте поесть спокойно!",
        optionC: "Я сам её придумал",
        optionD: "Нет,но возможно и да",
        correctOption: "optionA"
    },


    {
        question: "Какую двухметровую фигуру изготовили из мороженого в день нового тысячелетия 31.12.2000 в Москве?",
        optionA: "Снеговик",
        optionB: "Снегурочка",
        optionC: "Кролик",
        optionD: "Медведь",
        correctOption: "optionA"
    },

    {
        question: "Каких вкусов мороженого не существует?",
        optionA: "С гречкой, со свеклой",
        optionB: "С чернилами каракатицы, с вишневым пивом или с белыми грибами",
        optionC: "С бататом",
        optionD: "Все вышеперечисленные ингредиенты могут быть основой мороженого",
        correctOption: "optionD"
    },


    {
        question: "В какой стране едят замороженный десерт кульфи?",
        optionA: "Иран",
        optionB: "Египет",
        optionC: "Индия",
        optionD: "Япония",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
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


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Плохие оценки, продолжай практиковаться."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средние оценки, ты можешь добиться большего."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично, продолжайте в том же духе."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}