function showSection(id){
    document.querySelectorAll('.section').forEach(sec=>{
        sec.style.display='none';
    });
    document.getElementById(id).style.display='block';
}

function askQuestion(){
    let q=document.getElementById('question').value;
    let ans="I am a demo AI assistant. You asked: " + q;
    document.getElementById('answer').innerText=ans;
}

function checkAnswer(answer){
    let result=document.getElementById('quizResult');

    if(answer==="Water"){
        result.innerText="✅ Correct!";
    }else{
        result.innerText="❌ Wrong!";
    }
}

function saveNotes(){
    localStorage.setItem(
        "studyNotes",
        document.getElementById("notesArea").value
    );

    alert("Notes Saved!");
}

window.onload=function(){
    let notes=localStorage.getItem("studyNotes");
    if(notes){
        document.getElementById("notesArea").value=notes;
    }
}
