var q1a1 = false, q1a2 = false, q2a1 = false, q2a2 = false, q3a1 = false, q3a2 = false, q3a3 = false
var suggestions = ""
var url = "http://localhost:4040/api/questions/add"

function formgroupUpdate(id) {

  document.getElementById(id).style.backgroundColor = "#187DD7"
  document.getElementById(id).style.color = "#fff"

  if (id == "q1a1") {
    q1a1 = true
    q1a2 = false
    document.getElementById("q1a2").style.backgroundColor = "#fff"
    document.getElementById("q1a2").style.color = "#187DD7"
  }

  if (id == "q1a2") {
    q1a1 = false
    q1a2 = true
    document.getElementById("q1a1").style.backgroundColor = "#fff"
    document.getElementById("q1a1").style.color = "#187DD7"
  }

  if (id == "q2a1") {
    q2a1 = true
    q2a2 = false
    document.getElementById("q2a2").style.backgroundColor = "#fff"
    document.getElementById("q2a2").style.color = "#187DD7"
  }

  if (id == "q2a2") {
    q2a1 = false
    q2a2 = true
    document.getElementById("q2a1").style.backgroundColor = "#fff"
    document.getElementById("q2a1").style.color = "#187DD7"
  }

  if (id == "q3a1") {
    q3a1 = true
    q3a2 = false
    q3a3 = false
    document.getElementById("q3a2").style.backgroundColor = "#fff"
    document.getElementById("q3a3").style.backgroundColor = "#fff"
    document.getElementById("q3a2").style.color = "#187DD7"
    document.getElementById("q3a3").style.color = "#187DD7"
  }

  if (id == "q3a2") {
    q3a1 = false
    q3a2 = true
    q3a3 = false
    document.getElementById("q3a1").style.backgroundColor = "#fff"
    document.getElementById("q3a3").style.backgroundColor = "#fff"
    document.getElementById("q3a1").style.color = "#187DD7"
    document.getElementById("q3a3").style.color = "#187DD7"
  }

  if (id == "q3a3") {
    q3a1 = false
    q3a2 = false
    q3a3 = true
    document.getElementById("q3a1").style.backgroundColor = "#fff"
    document.getElementById("q3a2").style.backgroundColor = "#fff"
    document.getElementById("q3a1").style.color = "#187DD7"
    document.getElementById("q3a2").style.color = "#187DD7"
  }

  console.log(q1a1, q1a2, q2a1, q2a2, q3a1, q3a2, q3a3)
}

function onSubmit() {
  suggestions = document.getElementById("q4a1").value
  if ((!q1a1 && !q1a2) || (!q2a1 && !q2a2) || (!q3a1 && !q3a2 && !q3a3)){
    alert("Please choose any one of the options")
  }else{
    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        [
          {
            "question": "Based on your experience, you are happy to recommend others the IPC-App.",
            "question_no": "1",
            "answer": q1a1 ? "yes" : "no",
          },
          {
            "question": "The content was useful to guide on how to put on and removing PPE.",
            "question_no": "2",
            "answer": q2a1 ? "yes" : "no",
          },
          {
            "question": "Overall I am happy using the app",
            "question_no": "3",
            "suggestion": q3a1 ? "Agree" : q3a2 ? "Not Agree" : q3a3 ? "Disagree" : "Agree"
          },
          {
            "question": "Any suggestions welcome",
            "question_no": "4",
            "suggestion": suggestions
          }
        ]),
    })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        alert("Something went wrong, Please try again")
      });
    }
}