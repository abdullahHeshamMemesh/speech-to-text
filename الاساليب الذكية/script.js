var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()


var textbox = $("#textbox")
var instructions = $("#instructions")

var Content = ''

recognition.continuous = true

recognition.onstart = function () {
  instructions.text("voice recognition is on ")
};

recognition.onspeechend = function() {

instructions.text("no activity")
}
recognition.onerror = function() {
  instructions.text("try again")
}

recognition.onresult = function (event) {
var current = event.resultIndex;

var transcript = event.results[current][0].transcript

Content += transcript

textbox.val(Content)

}

$("#start-btn").click( function (event) {
  if (Content.length) {
    Content += ''
  }
  recognition.start()
})
