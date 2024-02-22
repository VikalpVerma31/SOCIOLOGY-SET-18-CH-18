const questions = [
    {
        question:"आधुनिक मानव की 'कपालीय-क्षमता' है",
        answers: [
            { text: "1212 CC", correct: false},
            { text: "1568 CC", correct: false},
            { text: "1320 CC", correct: false},
            { text: "1450 CC", correct: true},
        ] 
    },

    {
        question:"भारत की प्रथम प्रवासी कमेटी ने अपनी रिपोर्ट सर्वप्रथम कब दी ?",
        answers: [
            { text: "वर्ष 1870 में", correct: false},
            { text: "वर्ष 1997 में", correct: false},
            { text: "वर्ष 1891 में", correct: false},
            { text: "वर्ष 2000 में", correct: true},
        ] 
    },

    {
        question:"व्यक्ति के सीखे हुए व्यवहार को क्या कहते हैं ?",
        answers: [
            { text: "बाध्यकारी", correct: false},
            { text: "अनिवार्य", correct: false},
            { text: "ऐच्छिक", correct: false},
            { text: "संस्कृति", correct: true},
        ] 
    },

    {
        question:"धर्म क्या है ?",
        answers: [
            { text: "परिवार", correct: false},
            { text: "समुदाय", correct: false},
            { text: "संस्थाएँ", correct: false},
            { text: "संस्था", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी प्रदत्त परिस्थिति नही है ?",
        answers: [
            { text: "आयु", correct: false},
            { text: "लिंग", correct: false},
            { text: "व्यवसाय", correct: true},
            { text: "नातेदारी", correct: false},
        ] 
    },

    {
        question:"आधुनिक मानव की उत्पत्ति किससे मानी गई है ?",
        answers: [
            { text: "होमो सेपीयन्स से", correct: true},
            { text: "हाथी से", correct: false},
            { text: "कुत्ते से", correct: false},
            { text: "बिल्ली से", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्र के प्रथम प्रोफेसर कौन माने जाते हैं ?",
        answers: [
            { text: "स्मॉल", correct: false},
            { text: "डिल्थे", correct: false},
            { text: "टॉवीज", correct: false},
            { text: "स्पेन्सर", correct: true},
        ] 
    },

    {
        question:"भारत में समाजशास्त्र प्रारंभ मे निम्न में से किसम प्रभावित था ?",
        answers: [
            { text: "मंदिर से", correct: false},
            { text: "परिवार से", correct: false},
            { text: "वैज्ञानिक से", correct: false},
            { text: "धर्मशास्त्र से", correct: true},
        ] 
    },

    {
        question:"'आदिम संसार में मानव' किसकी कृति है ?",
        answers: [
            { text: "लेमार्क", correct: false},
            { text: "हॉबल", correct: true},
            { text: "क्रोबर", correct: false},
            { text: "नीग्रो", correct: false},
        ] 
    },

    {
        question:"काकेशियन एक प्रकार का समूह है",
        answers: [
            { text: "धर्म", correct: false},
            { text: "परिवार", correct: false},
            { text: "प्रजाति", correct: true},
            { text: "वर्ग", correct: false},
        ] 
    },

    {
        question:"निएन्डरथल मानव पहली बार कहाँ पाया गया ?",
        answers: [
            { text: "अमेरिका", correct: false},
            { text: "जिब्राल्टर", correct: true},
            { text: "जापान", correct: false},
            { text: "जावा", correct: false},
        ] 
    },

    {
        question:"ब्राउन के अनुसार सामाजिक संरचना के अध्ययन के कितने विभाग हैं ?",
        answers: [
            { text: "तीन विभाग", correct: true},
            { text: "छह विभाग", correct: false},
            { text: "दस विभाग", correct: false},
            { text: " इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"'द सोशल सिस्टम' नामक पुस्तक लिखी गई है -",
        answers: [
            { text: "पेज", correct: false},
            { text: "नाडेल", correct: false},
            { text: "पारसन्स", correct: true},
            { text: "बॉड", correct: false},
        ] 
    },

    {
        question:"क्रोबर तथा क्लूखान ने संस्कृति की कितनी परिभाषाओं का संकल्प किया था ?",
        answers: [
            { text: "80", correct: false},
            { text: "108", correct: true},
            { text: "110", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से उन कारणों को बताइए जो परम्परागत ग्राम व्यवस्था को बदल दिया है -",
        answers: [
            { text: "यातायात एवं संचार के साधन", correct: false},
            { text: "शिक्षा", correct: false},
            { text: "औद्योगिकीकरण", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"नगर के लिए कम-से-कम कितनी जनसंख्या का होना जरूरी है ?",
        answers: [
            { text: "5000", correct: true},
            { text: "8600", correct: false},
            { text: "7500", correct: false},
            { text: "10000", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सी प्रजाति है ?",
        answers: [
            { text: "अमेरिकी", correct: false},
            { text: "पंजाबी", correct: false},
            { text: "बिहारी", correct: false},
            { text: "आर्यन", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा औपचारिक समूह है?",
        answers: [
            { text: "क्षेत्रीय समूह", correct: false},
            { text: "अस्थायी समूह", correct: false},
            { text: "रक्त संबंधी समूह", correct: false},
            { text: "एक व्यापारिक यूनियन", correct: true},
        ] 
    },

    {
        question:"भौतिक संस्कृति में निम्न में से कौन सा गुण पाया जाता है ?",
        answers: [
            { text: "समनर", correct: false},
            { text: "परिवर्तनशीलता", correct: true},
            { text: "स्थिरता", correct: false},
            { text: "(a) और (b) दोनों", correct: false},
        ] 
    },

    {
        question:"मनुष्य के सीखे हुए व्यवहार को कहते हैं-",
        answers: [
            { text: "धर्म", correct: false},
            { text: "संस्कृति", correct: true},
            { text: "समुदाय", correct: false},
            { text: "प्रथाएं", correct: false},
        ] 
    },

    {
        question:"प्राणी संरचना के आधार पर समाज की संरचना को समझाने में प्रमुख विद्वान निम्न में से कौन हैं?",
        answers: [
            { text: "अकार्य", correct: false},
            { text: "मर्टन", correct: false},
            { text: "प्रकार्य", correct: false},
            { text: "स्पेन्सर", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित युग्मों में से कौन एक समरक्त स्वजनों का दृष्टान्त नहीं है?",
        answers: [
            { text: "पुत्री पिता", correct: false},
            { text: "पति पत्नी", correct: true},
            { text: "भाई बहन", correct: false},
            { text: "पिता पुत्र्या", correct: false},
        ] 
    },

    {
        question:"दुर्खीम का सामाजिक तथ्य का विचार के व्यक्तिवादी विचारों से भिन्न है ?",
        answers: [
            { text: "मैक्स", correct: false},
            { text: "कॉम्टे", correct: false},
            { text: "वेबर", correct: false},
            { text: "स्पेन्सर", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से इटली के किस विचारक प्रकार्यात्मक विचारधारा मे योगदान दिया ?",
        answers: [
            { text: "गीर्की", correct: false},
            { text: "विल्फ्रेड पेरेटो", correct: true},
            { text: "दुर्खीम", correct: false},
            { text: "मर्टन", correct: false},
        ] 
    },

    {
        question:"वेबर ने अपने अध्ययन विधि को किस रूप वर्णित किया है ?",
        answers: [
            { text: "सामाजिक", correct: false},
            { text: "तार्किक विधि", correct: false},
            { text: "नैतिक", correct: false},
            { text: "आदर्श विधि", correct: true},
        ] 
    },

    {
        question:"वेबर की सामाजिक संरचना एवं सामाजिक जीन में आर्थिक कारण महत्त्वपूर्ण है, यह किस अर विद्वान के मत से मिलता है ?",
        answers: [
            { text: "काम्ट", correct: false},
            { text: "पारसन्स", correct: false},
            { text: "कार्ल", correct: false},
            { text: "मार्क्स", correct: true},
        ] 
    },

    {
        question:"कार्ल मार्क्स के पूर्ववर्ती किस समाजवादी भा कल्पनामूलक समाजवादी कहा जाता है ?",
        answers: [
            { text: "चार्ल्स लारियर", correct: false},
            { text: "सेपट साइनन", correct: false},
            { text: "राबर्ट ओवेन", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"कल्चरल सोशियोलॉजी नामक पुस्तक किसने लिखी है ?",
        answers: [
            { text: "आर. के. मर्टनआर. के. मर्टन", correct: false},
            { text: "गिलिन एण्ड गिलिन", correct: true},
            { text: "टी. पारसन्स", correct: false},
            { text: "के. डेविस", correct: false},
        ] 
    },

    {
        question:"विसम्बन्धन घटित होने की तब सबसे अधिक संभावना है जब एक व्यक्ति है ?",
        answers: [
            { text: "शारदा", correct: false},
            { text: "बुनकर", correct: true},
            { text: "मजदूर", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन सी जनरूढ़ि है ?",
        answers: [
            { text: "अभिवादन", correct: false},
            { text: "विवाह", correct: false},
            { text: "सर्वेयर", correct: false},
            { text: "सूर्यास्त के पूर्व भोजन करना", correct: true},
        ] 
    },

    {
        question:"समाजशास्त्रीय व्याख्या में सामूहिकता पर किसने बल दिया",
        answers: [
            { text: "रूसो", correct: false},
            { text: "इमाइल दुर्खीम", correct: true},
            { text: "प्लेटो", correct: false},
            { text: "वेबर", correct: false},
        ] 
    },

    {
        question:"समाजमिति पद्धति उपर्युक्त है -",
        answers: [
            { text: "ऐतिहासिक अध्ययन में", correct: false},
            { text: "परिवार अध्ययन में", correct: false},
            { text: "गुणात्मक अध्ययन में ", correct: true},
            { text: " इन तीनों में", correct: false},
        ] 
    },

    {
        question:"आज भारतीय समाज की समस्याओं निम्न में से कौन-सी नहीं है ?",
        answers: [
            { text: "परिवार", correct: false},
            { text: "भाषावाद", correct: false},
            { text: "साम्राज्यवाद", correct: false},
            { text: "प्रजातन्त्रवाद", correct: true},
        ] 
    },

    {
        question:"आश्रम व्यवस्था में मनुष्य की औसत आयु कितनी मानी गयी थी ?",
        answers: [
            { text: "50 वर्ष", correct: false},
            { text: "100 वर्ष", correct: true},
            { text: "65 वर्ष", correct: false},
            { text: "130 वर्ष", correct: false},
        ] 
    },

    {
        question:"'द सोशल स्ट्रक्चर ऑल वेल्यू' के लेखक कौन श्री ?",
        answers: [
            { text: "रामाकृष्ण मुखर्जी", correct: true},
            { text: "राधास्वामी मुखर्जी", correct: false},
            { text: "श्रीनिवास", correct: false},
            { text: "उपर्युक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी समकालीन भारतीय सामाजिक समस्या नहीं है ?",
        answers: [
            { text: "वेदों", correct: false},
            { text: "महाकाव्यों", correct: false},
            { text: "क्षेत्रीयता", correct: false},
            { text: "प्रजातन्त्रवाद", correct: true},
        ] 
    },

    {
        question:"मनुस्मृति के अनुसार क्षत्रियों का धर्म क्या है ?",
        answers: [
            { text: "अपनी शक्ति का पूर्ण उपयोग", correct: false},
            { text: "प्रजा को रक्षा करना", correct: false},
            { text: "दान देना, विषय-भोग से दूर रहना", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"दक्षिण भारत में जाति और जनजातियाँ नामक पुस्तक के लेखक निम्न में से कौन हैं ?",
        answers: [
            { text: "थर्सटन", correct: true},
            { text: "कार्ल", correct: false},
            { text: "मॉकराड", correct: false},
            { text: "मैक्स", correct: false},
        ] 
    },

    {
        question:"ऑल इंडिया सोशियोलॉजीकल कान्फ्रेंस नामक संघ की स्थापना आर. एन. सक्सेना की प्रेरणा से कब हुई ?",
        answers: [
            { text: "1949", correct: false},
            { text: "1956", correct: true},
            { text: "1947", correct: false},
            { text: "2000", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्री व्याख्या में सामूहिकता पर किसने बल दिया ?",
        answers: [
            { text: "मैक्य", correct: false},
            { text: "वेबर", correct: false},
            { text: "कॉर्ल", correct: false},
            { text: "ईमाइल दुखीम", correct: true},
        ] 
    },

    {
        question:"दी स्ट्रक्चर ऑल सोशियल एक्शन' नामक पुस्तक किसने लिखी ?",
        answers: [
            { text: "जार्ज", correct: false},
            { text: "पोम्पर", correct: false},
            { text: "नागौर", correct: false},
            { text: "रोबर्ट के० मर्टन", correct: true},
        ] 
    },

    {
        question:"भारत और पाकिस्तान के बीच वर्तमान संबंध का अर्थ है -",
        answers: [
            { text: "संघर्ष", correct: false},
            { text: "तनाव", correct: false},
            { text: "प्रतियोगिता", correct: true},
            { text: "युद्ध", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन पारिवारिक कानून का अभिन्न भाग है ?",
        answers: [
            { text: "नागरिक", correct: false},
            { text: "घरेलू भागीदारी", correct: false},
            { text: "विवाह", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"सामुदायिक विकास योजनाएँ कब शुरू की गई थी?",
        answers: [
            { text: "15 अगस्त 1947            ", correct: true},
            { text: "15 अगस्त 1949", correct: false},
            { text: "15 अगस्त 1983", correct: false},
            { text: "15 अगस्त 1999", correct: false},
        ] 
    },

    {
        question:"यह किसने कहा है कि 'अछूत' ईश्वर की संतान है ?",
        answers: [
            { text: "जवाहरलाल नेहरू", correct: false},
            { text: "लाल बहादुर शास्त्री", correct: false},
            { text: "दादा भाई नौरोजी", correct: false},
            { text: "डॉ० अंबेडकर            ", correct: true},
        ] 
    },

    {
        question:"सामाजिक प्रगति सदैव होती है - -",
        answers: [
            { text: "इरादतन", correct: false},
            { text: "समानांतर", correct: false},
            { text: "नियोजित", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"वर्ण है -",
        answers: [
            { text: "एक स्थानीय एकक", correct: false},
            { text: "एक क्षेत्रीय विशेषता", correct: false},
            { text: "एक अंतरक्रियात्मक", correct: false},
            { text: "एक अखिल भारतीय स्वरूप", correct: true},
        ] 
    },

    {
        question:"'थरवड' पाया जाता है -",
        answers: [
            { text: "दिल्ली में", correct: false},
            { text: "नालन्दा में", correct: false},
            { text: "पंजाब में", correct: false},
            { text: "केरल में", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा अनुच्छेद संसद तथा विधानमंडल में अनुसूचित जातियों को प्रतिनिधित्व की विशेष सुविधा देता ?        ",
        answers: [
            { text: "334", correct: true},
            { text: "441", correct: false},
            { text: "350", correct: false},
            { text: "510", correct: false},
        ] 
    },

    {
        question:"दहेज के प्रमुख कारण हैं -",
        answers: [
            { text: "कुलीन विवाह", correct: false},
            { text: "सामाजिक प्रतिष्ठा", correct: false},
            { text: "धन का महत्व", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 