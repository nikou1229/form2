const question = [];
const questionId = [];
const qtype = [];
const check = {}

question.pop();


function addQuestion(q , id ,type,choice =[]  ){
    question.push(q);
    if (questionId.includes(id)){
        questionId.push(id+' copy');
    } else {
        questionId.push(id);
    }
    qtype.push(type);
    if (type !=  'text'){
        let i = 0;
        
        while (check.hasOwnProperty(id+i)){
            i++;
        }
        for (let i_ = 0;i_ < choice.length;i_++){
            check[`${id}${i+i_}`] = choice[i_];
        }
    }
}

addQuestion('誕生日は？','a','date');
    
/*
console.log(question);
console.log(questionId);
console.log(qtype);
console.log(check);
*/