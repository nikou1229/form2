const questionDiv = document.querySelector('#questions');
const questionTimes = 10;
const questionNum = [];
let stop = 0;

for(let i = 1;i < questionTimes;i++){
    let Id = Math.floor(Math.random() * question.length);
    while (questionNum.includes(Id) ){
        Id = Math.floor(Math.random() * question.length);
        if (questionNum.length >= question.length){
            break;
            stop = 1;
        }
    }
    if (stop == 1){
        break;
    }
    questionNum.push(Id);
    let questionElement = document.createElement('div');
    questionDiv.append(questionElement);
    questionElement.classList.add(`question${i}`);
    questionElement.innerHTML = question[Id];

    if (Id > qtype.length){
        questionElement = document.createElement('textarea');
        questionDiv.append(questionElement);
        questionElement.classList.add(`inputQuestion${i}`);
    } else {
        const notText = ["radio","checkbox"];
        if (qtype[Id] == "text"){
                questionElement = document.createElement('textarea');
                questionElement.placeholder = "回答を入力";
                questionElement.name = questionId[Id];
                questionElement.classList.add(`inputQuestion${i}`);
                questionDiv.append(questionElement);
        } else if (notText.includes(qtype[Id]) ) {
                let times = 0;
                while (check.hasOwnProperty(`${questionId[Id]}${times}`) ){
                    const key = `${questionId[Id]}${times}`;
                    questionElement = document.createElement('input');
                    questionElement.type = qtype[Id];
                    questionElement.name = questionId[Id];
                    questionElement.classList.add = key;
                    questionElement.name = questionId[Id];
                    questionDiv.append(questionElement);
                    
                    questionElement = document.createElement('label');
                    questionElement.textContent = check[key] ;
                    questionElement.htmlFor = questionId[Id];
                    questionElement.id = key;
                    questionDiv.append(questionElement);
                    questionElement = document.createElement('br');
                    questionDiv.append(questionElement);                    
                    times++;
                }
        } else if (qtype[Id] == "date") {
                questionElement = document.createElement('input');
                questionElement.type = "date";
                questionElement.name = questionId[Id];
                questionElement.classList.add(`inputQuestion${i}`);
                questionDiv.append(questionElement);
        
        } else {
                questionElement = document.createElement('textarea');
                questionElement.placeholder = "回答を入力";
                questionElement.name = questionId[Id];
                questionElement.classList.add(`inputQuestion${i}`);
                questionDiv.append(questionElement);
        }
    }
}



/*
constant→定数
let


*/