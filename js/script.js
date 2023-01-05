const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box")
const exit_btn = info_box.querySelector(".buttons .quit")
const continue_btn = document.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")
// if Start quiz button clcked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo")// show info box
}
// if exit button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo")//hide info box
}
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo")//hide quiz_box box
    quiz_box.classList.add("activeQuiz")//show quiz_box box
    showQuestions(0);
}
//getting question and options from array
let que_count = 0;
let next_btn = quiz_box.querySelector(".next_btn")
next_btn.onclick = () => {
    console.log(questions.length)
    if (que_count < questions.length) {
        que_count++;
        showQuestions(que_count);
    }
}
function showQuestions(index) {
    console.log()
    const que_text = document.querySelector(".que_text");
    const options_list = document.querySelector(".option_list");
    let que_tag = "<span>" + questions[index].question + "</span>";
    let option_tag = "<div class='option'>" + questions[index].options[0] + "<span></span></div>"
        + "<div class='option'>" + questions[index].options[1] + "<span></span></div>"
        + "<div class='option'>" + questions[index].options[2] + "<span></span></div>"
        + "<div class='option'>" + questions[index].options[3] + "<span></span></div>"
    que_text.innerHTML = que_tag
    options_list.innerHTML = option_tag;
}