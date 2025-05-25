// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Sections principales de l'UI
    const modeSelectionDiv = document.getElementById('mode-selection');
    const quizAreaDiv = document.getElementById('quiz-area');
    const resultsAreaDiv = document.getElementById('results-area');
    const reviewAreaDiv = document.getElementById('review-area');
    const podcastSectionDiv = document.getElementById('podcast-section'); 

    // Éléments de la sélection de mode
    const practiceQuestionCountSelect = document.getElementById('practice-question-count');
    const startPracticeBtn = document.getElementById('start-practice-btn');
    const examQuestionCountSelect = document.getElementById('exam-question-count');
    const examDurationSelect = document.getElementById('exam-duration');
    const startExamBtn = document.getElementById('start-exam-btn');

    // Éléments de la zone de quiz
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const explanationTextEl = document.getElementById('explanation-text');
    const prevQuestionBtn = document.getElementById('prev-question-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const submitExamBtn = document.getElementById('submit-exam-btn');
    const timerDisplaySpan = document.getElementById('time');
    const timerDisplayContainer = document.getElementById('timer-display'); 
    const currentQNumEl = document.getElementById('current-q-num');
    const totalQNumEl = document.getElementById('total-q-num');
    const progressBar = document.getElementById('progress-bar');
    const exitQuizBtn = document.getElementById('exit-quiz-btn'); 
    const quizHeaderControls = document.querySelector('.quiz-header-controls'); 

    // Éléments de la zone de résultats
    const scoreTextEl = document.getElementById('score-text');
    const passFailTextEl = document.getElementById('pass-fail-text');
    const reviewSummaryEl = document.getElementById('review-summary');
    const reviewAnswersBtn = document.getElementById('review-answers-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    // Éléments de la zone de revue
    const reviewContentEl = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results-btn');
    const restartFromReviewBtn = document.getElementById('restart-from-review-btn');

    // Éléments de la navigation principale et podcast
    const mainNav = document.getElementById('main-nav');
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const podcastPlayer = document.getElementById('podcast-player');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = []; 
    let quizMode = ''; 
    let timerInterval;
    let timeLeft = 0; 
    const PASS_PERCENTAGE = 85;

    function setInitialUIState() {
        console.log("Setting initial UI state...");
        contentSections.forEach(section => {
            if(section) section.classList.add('hidden');
        });
        if (modeSelectionDiv) modeSelectionDiv.classList.remove('hidden');
        
        if(navButtons) {
            navButtons.forEach(btn => {
                if (btn.dataset.section === "mode-selection") {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        if (quizHeaderControls) quizHeaderControls.classList.add('hidden'); 
        if (timerDisplayContainer) timerDisplayContainer.classList.add('hidden');
        if (podcastPlayer && !podcastPlayer.paused) podcastPlayer.pause();
        console.log("Initial UI state set.");
    }
    
    if (startPracticeBtn) startPracticeBtn.addEventListener('click', () => startQuiz('practice'));
    if (startExamBtn) startExamBtn.addEventListener('click', () => startQuiz('exam'));
    if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', handleNextQuestion);
    if (prevQuestionBtn) prevQuestionBtn.addEventListener('click', handlePreviousQuestion);
    if (submitAnswerBtn) submitAnswerBtn.addEventListener('click', handleSubmitAnswerPractice);
    if (submitExamBtn) submitExamBtn.addEventListener('click', submitExam);
    if (restartQuizBtn) restartQuizBtn.addEventListener('click', resetQuiz);
    if (reviewAnswersBtn) reviewAnswersBtn.addEventListener('click', showReviewArea);
    if (backToResultsBtn) {
        backToResultsBtn.addEventListener('click', () => {
            if(reviewAreaDiv) reviewAreaDiv.classList.add('hidden');
            if(resultsAreaDiv) resultsAreaDiv.classList.remove('hidden');
        });
    }
    if (restartFromReviewBtn) restartFromReviewBtn.addEventListener('click', resetQuiz);
    if(exitQuizBtn) { 
        exitQuizBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to exit? Your current progress will be lost.")) {
                resetQuiz(); 
            }
        });
    }

    if (mainNav && navButtons.length > 0 && contentSections.length > 0) {
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetSectionId = button.dataset.section;
                console.log("Navigating to section:", targetSectionId);
                let confirmExitQuiz = true;
                if (quizMode && quizAreaDiv && !quizAreaDiv.classList.contains('hidden') && 
                    targetSectionId !== 'quiz-area' && targetSectionId !== 'results-area' && targetSectionId !== 'review-area') {
                    confirmExitQuiz = confirm("Exiting the current quiz will stop it and your progress will be lost. Are you sure?");
                }

                if (confirmExitQuiz) {
                    contentSections.forEach(section => {
                        if(section) section.classList.add('hidden');
                    });
                    const targetSection = document.getElementById(targetSectionId);
                    if (targetSection) targetSection.classList.remove('hidden');
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    if (quizMode && quizAreaDiv && !quizAreaDiv.classList.contains('hidden') && targetSectionId !== 'quiz-area') {
                         clearInterval(timerInterval);
                         if (targetSectionId === 'podcast-section' || targetSectionId === 'mode-selection') { // Si on quitte vraiment le quiz
                            quizMode = ''; 
                            if (quizHeaderControls) quizHeaderControls.classList.add('hidden');
                         }
                    }
                    if (podcastPlayer && !podcastPlayer.paused && targetSectionId !== 'podcast-section') {
                        podcastPlayer.pause();
                    }
                } else {
                     navButtons.forEach(btn => { if(btn.dataset.section === 'mode-selection' || (quizMode && btn.dataset.section === 'quiz-area')) btn.classList.add('active'); else btn.classList.remove('active'); });
                    return; 
                }
            });
        });
    }
    
    setInitialUIState();

    function startQuiz(mode) {
        console.log(`Starting quiz in ${mode} mode`);
        quizMode = mode; currentQuestionIndex = 0; score = 0; userAnswers = [];
        let selectedCountInput = (mode === 'practice') ? practiceQuestionCountSelect : examQuestionCountSelect;
        if (!selectedCountInput) { alert(`Error: Count selection input for ${mode} mode not found.`); resetQuiz(); return; }
        const selectedQuestionCount = parseInt(selectedCountInput.value);
        if (isNaN(selectedQuestionCount) || selectedQuestionCount < 0) { alert("Please select a valid number of questions."); resetQuiz(); return; }
        
        let questionsToUse = [...ALL_QUESTIONS]; 
        currentQuestions = (selectedQuestionCount === 0) ? shuffleArray(questionsToUse) : shuffleArray(questionsToUse).slice(0, selectedQuestionCount);

        if (ALL_QUESTIONS.length === 0) { alert("No questions loaded. Please check questions.js."); resetQuiz(); return; }
        if (currentQuestions.length === 0 && selectedQuestionCount !== 0 ) {
             alert(`Not enough questions for selection (${selectedQuestionCount}). Starting with all ${ALL_QUESTIONS.length} available questions or check data.`);
            currentQuestions = shuffleArray([...ALL_QUESTIONS]);
             if (currentQuestions.length === 0) { alert("No questions available at all."); resetQuiz(); return; }
        }
        if (currentQuestions.length === 0 ) { alert("No questions available to start the quiz."); resetQuiz(); return; }

        if(totalQNumEl) totalQNumEl.textContent = currentQuestions.length;
        contentSections.forEach(section => {if(section) section.classList.add('hidden');});
        if(quizAreaDiv) quizAreaDiv.classList.remove('hidden'); 
        if(feedbackContainerEl) feedbackContainerEl.classList.add('hidden');
        if(nextQuestionBtn) nextQuestionBtn.textContent = "Next Question"; 
        if(quizHeaderControls) quizHeaderControls.classList.remove('hidden'); 
        updateProgressBar(); 

        if (quizMode === 'exam') {
            const selectedDuration = parseInt(examDurationSelect.value);
            if (isNaN(selectedDuration) || selectedDuration <= 0) { alert("Please select a valid exam duration."); resetQuiz(); return; }
            timeLeft = selectedDuration * 60;
            startTimer();
            if(timerDisplayContainer) timerDisplayContainer.classList.remove('hidden'); 
            if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden');
        } else { 
            if(timerDisplayContainer) timerDisplayContainer.classList.add('hidden'); 
            if(submitAnswerBtn) submitAnswerBtn.classList.remove('hidden'); 
            if(nextQuestionBtn) nextQuestionBtn.classList.add('hidden'); 
            if(prevQuestionBtn) prevQuestionBtn.classList.add('hidden'); 
            if(submitExamBtn) submitExamBtn.classList.add('hidden');
        }
        displayQuestion(); 
    }

    function displayQuestion() {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) { updateProgressBar(); return; }
        const question = currentQuestions[currentQuestionIndex];
        if(!question) { console.error(`Question at index ${currentQuestionIndex} is undefined.`); return; }

        if(questionTextEl) questionTextEl.textContent = question.text;
        if(optionsContainerEl) optionsContainerEl.innerHTML = ''; 
        if(feedbackContainerEl) feedbackContainerEl.classList.add('hidden'); 
        if(currentQNumEl) currentQNumEl.textContent = currentQuestionIndex + 1;

        if (quizMode === 'practice') {
            const isFeedbackVisible = feedbackContainerEl && !feedbackContainerEl.classList.contains('hidden');
            if(submitAnswerBtn) submitAnswerBtn.classList.toggle('hidden', isFeedbackVisible);
            if(nextQuestionBtn) nextQuestionBtn.classList.toggle('hidden', !isFeedbackVisible);
        } else { 
            if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden');
        }

        question.options.forEach((option, index) => {
            const optionId = `q${currentQuestionIndex}_option${index}`;
            const optionDiv = document.createElement('div'); optionDiv.classList.add('option-div'); 
            const input = document.createElement('input'); input.id = optionId; input.name = `q${currentQuestionIndex}_options`; input.value = option.text; input.disabled = false; 
            input.type = (question.type === 'mcq-multiple') ? 'checkbox' : 'radio';
            const label = document.createElement('label'); label.htmlFor = optionId; label.textContent = option.text;
            const feedbackIconSpan = document.createElement('span'); feedbackIconSpan.classList.add('feedback-icon');
            optionDiv.appendChild(input); optionDiv.appendChild(label); optionDiv.appendChild(feedbackIconSpan);
            if(optionsContainerEl) optionsContainerEl.appendChild(optionDiv);
        });
        
        const userAnswerForExam = userAnswers.find(ua => ua.questionId === question.id && quizMode === 'exam' && (!ua.mode || ua.mode !== 'practice_submission'));
        if (userAnswerForExam && userAnswerForExam.selectedOptions) {
            userAnswerForExam.selectedOptions.forEach(value => {
                if(optionsContainerEl) {
                    const inputElement = optionsContainerEl.querySelector(`input[value="${CSS.escape(value)}"]`);
                    if (inputElement) inputElement.checked = true;
                }
            });
        }
        updateProgressBar(); updateNavigationButtons(); 
    }
    
    function updateNavigationButtons() {
        if(!prevQuestionBtn || !nextQuestionBtn || !submitExamBtn || !submitAnswerBtn) return;
        if(currentQuestions.length === 0) { 
            prevQuestionBtn.classList.add('hidden'); nextQuestionBtn.classList.add('hidden');
            submitExamBtn.classList.add('hidden'); submitAnswerBtn.classList.add('hidden');
            return;
        }
        const isLastQuestion = currentQuestionIndex >= currentQuestions.length - 1;

        if (quizMode === 'exam') {
            prevQuestionBtn.classList.toggle('hidden', currentQuestionIndex === 0);
            nextQuestionBtn.classList.toggle('hidden', isLastQuestion);
            submitExamBtn.classList.toggle('hidden', !isLastQuestion);
            submitAnswerBtn.classList.add('hidden'); 
        } else { 
            prevQuestionBtn.classList.add('hidden'); 
            submitExamBtn.classList.add('hidden'); 
        }
    }
    
    function updateProgressBar() {
        if (!progressBar) return;
        progressBar.style.width = (currentQuestions.length > 0) ? `${(currentQuestionIndex / currentQuestions.length) * 100}%` : '0%';
    }

    function handleNextQuestion() {
        if (quizMode === 'exam') saveCurrentAnswer(); 
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++; displayQuestion(); 
        } else if (quizMode === 'practice' && currentQuestionIndex === currentQuestions.length - 1) {
            if(progressBar) progressBar.style.width = '100%'; showResults();
        }
    }

    function handlePreviousQuestion() { 
        if (quizMode === 'exam') { 
            saveCurrentAnswer(); 
            if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(); }
        }
    }

    function saveCurrentAnswer() { 
        if (currentQuestionIndex >= currentQuestions.length || !currentQuestions[currentQuestionIndex]) return;
        const question = currentQuestions[currentQuestionIndex];
        const selectedOptionValues = getSelectedOptionsValues();
        let existingAnswer = userAnswers.find(ua => ua.questionId === question.id && (!ua.mode || ua.mode !== 'practice_submission'));
        if (existingAnswer) existingAnswer.selectedOptions = selectedOptionValues;
        else userAnswers.push({ questionId: question.id, selectedOptions: selectedOptionValues, isCorrect: null });
    }

    function handleSubmitAnswerPractice() {
        const question = currentQuestions[currentQuestionIndex];
        const selectedOptionValues = getSelectedOptionsValues();
        if (selectedOptionValues.length === 0 && (question.type === 'mcq-single' || question.type === 'mcq-multiple')) {
            alert("Please select an answer."); return;
        }
        const isCorrectOverall = checkAnswer(question, selectedOptionValues);
        let practiceAnswer = userAnswers.find(ua => ua.questionId === question.id && ua.mode === 'practice_submission');
        if (practiceAnswer) { practiceAnswer.selectedOptions = selectedOptionValues; practiceAnswer.isCorrect = isCorrectOverall; }
        else userAnswers.push({ questionId: question.id, selectedOptions: selectedOptionValues, isCorrect: isCorrectOverall, mode: 'practice_submission' });

        if(feedbackContainerEl && explanationTextEl) {
            feedbackContainerEl.className = 'feedback-container ' + (isCorrectOverall ? 'correct' : 'incorrect');
            explanationTextEl.innerHTML = `<strong>Explanation:</strong><br>${question.explanation}`;
        }
        if(optionsContainerEl) {
            optionsContainerEl.querySelectorAll('.option-div').forEach(div => {
                const input = div.querySelector('input');
                const optionText = input.value;
                const isThisOptionCorrect = question.options.find(opt => opt.text === optionText)?.correct;
                const feedbackIcon = div.querySelector('.feedback-icon');
                if(feedbackIcon) feedbackIcon.textContent = ''; 
                div.classList.add('disabled-option'); input.disabled = true; 
                if (input.checked) { 
                    div.classList.add('user-selected');
                    div.classList.toggle('correct-choice', isThisOptionCorrect);
                    div.classList.toggle('incorrect-choice', !isThisOptionCorrect);
                    if(feedbackIcon) feedbackIcon.textContent = isThisOptionCorrect ? '✓' : '✗'; 
                }
                if (isThisOptionCorrect) {
                    div.classList.add('actual-correct');
                    if (!input.checked && feedbackIcon && feedbackIcon.textContent === '') feedbackIcon.textContent = '✓';
                }
            });
        }
        if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden'); 
        if(nextQuestionBtn) {
            nextQuestionBtn.classList.remove('hidden'); 
            nextQuestionBtn.textContent = (currentQuestionIndex >= currentQuestions.length - 1) ? "Show Results" : "Next Question";
        }
        if(progressBar) progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`; 
    }
    
    function getSelectedOptionsValues() {
        const selected = [];
        if(optionsContainerEl) optionsContainerEl.querySelectorAll('input:checked').forEach(input => selected.push(input.value));
        return selected;
    }

    function checkAnswer(question, selectedOptionTexts) {
        if (!question || !question.options) return false; 
        const correctOptionTexts = question.options.filter(opt => opt.correct).map(opt => opt.text);
        if (question.type === 'mcq-multiple') {
            return selectedOptionTexts.length === correctOptionTexts.length &&
                   selectedOptionTexts.every(optText => correctOptionTexts.includes(optText)) &&
                   correctOptionTexts.every(optText => selectedOptionTexts.includes(optText));
        }
        return selectedOptionTexts.length === 1 && correctOptionTexts.includes(selectedOptionTexts[0]);
    }

    function submitExam() {
        console.log("Submit exam clicked");
        clearInterval(timerInterval); saveCurrentAnswer(); 
        if(progressBar) progressBar.style.width = '100%'; 
        score = 0; 
        const examModeAnswersFromUser = userAnswers.filter(ua => !ua.mode || ua.mode !== 'practice_submission');
        currentQuestions.forEach(q => { 
            const answerForThisQ = examModeAnswersFromUser.find(a => a.questionId === q.id);
            const selectedOps = answerForThisQ ? (answerForThisQ.selectedOptions || []) : [];
            const isQCorrect = checkAnswer(q, selectedOps);
            if (isQCorrect) score++;
            if(answerForThisQ) answerForThisQ.isCorrect = isQCorrect;
            else userAnswers.push({ questionId: q.id, selectedOptions: [], isCorrect: isQCorrect, mode: 'exam_implicit_submission' });
        });
        showResults();
    }
    
    function showResults() {
        console.log("Showing results");
        if(quizAreaDiv) quizAreaDiv.classList.add('hidden');
        if(resultsAreaDiv) resultsAreaDiv.classList.remove('hidden');
        if(feedbackContainerEl) feedbackContainerEl.classList.add('hidden'); 

        let finalScoreToShow = 0;
        let totalQuestionsForDisplay = currentQuestions.length;
        if (quizMode === 'practice') {
            finalScoreToShow = 0; 
            const practiceSubmissions = userAnswers.filter(ua => ua.mode === 'practice_submission');
            const answeredQuestionIds = new Set();
            practiceSubmissions.forEach(ps => {
                if (!answeredQuestionIds.has(ps.questionId)) { if (ps.isCorrect) finalScoreToShow++; answeredQuestionIds.add(ps.questionId); }
            });
        } else finalScoreToShow = score; 
        
        const percentage = totalQuestionsForDisplay > 0 ? Math.round((finalScoreToShow / totalQuestionsForDisplay) * 100) : 0;
        if(scoreTextEl) scoreTextEl.textContent = `Your Score: ${finalScoreToShow} out of ${totalQuestionsForDisplay} (${percentage}%)`;
		if(passFailTextEl) {
            if (percentage === 100) { 
                passFailTextEl.textContent = "💯 PERFECT SCORE! L'équipe ROSA a bien de la chance d'avoir un PO comme toi! 🧠✨";
                passFailTextEl.className = 'pass-fail-text pass easter-egg'; 
            } else if (percentage >= 95) { 
                 passFailTextEl.textContent = "🎉 Outstanding! You've truly mastered this! Almost perfect! 🚀";
                 passFailTextEl.className = 'pass-fail-text pass excellent-score';
            } else if (percentage >= PASS_PERCENTAGE) { 
                passFailTextEl.textContent = "Congratulations! You Passed!";
                passFailTextEl.className = 'pass-fail-text pass';
            } else {
                passFailTextEl.textContent = "Keep Practicing! You Did Not Pass.";
                passFailTextEl.className = 'pass-fail-text fail';
            }
        }
        populateReviewSummary();
        // quizMode = ''; // Ne pas réinitialiser quizMode ici, car on peut vouloir revoir les réponses du même quiz
    }

    function populateReviewSummary() {
        if(!reviewSummaryEl) return;
        reviewSummaryEl.innerHTML = ''; 
        currentQuestions.forEach((q, index) => {
            // Pour le résumé, on veut la dernière réponse soumise pour cette question, quel que soit le mode exact de soumission
            const userAnswer = userAnswers.slice().reverse().find(ua => ua.questionId === q.id);

            const item = document.createElement('div'); item.classList.add('summary-item');
            let correctnessText = 'Not Answered / Skipped';
            let correctnessClass = 'not-answered';

            if (userAnswer && typeof userAnswer.isCorrect === 'boolean') {
                correctnessText = userAnswer.isCorrect ? 'Correct' : 'Incorrect';
                correctnessClass = userAnswer.isCorrect ? 'correct' : 'incorrect';
            }
            item.textContent = `Q${index + 1}: ${q.text.substring(0,50)}... - ${correctnessText}`;
            item.classList.add(correctnessClass); reviewSummaryEl.appendChild(item);
        });
    }

    function showReviewArea() {
        console.log("Showing review area");
        if(resultsAreaDiv) resultsAreaDiv.classList.add('hidden');
        if(reviewAreaDiv) reviewAreaDiv.classList.remove('hidden');
        if(!reviewContentEl) return; reviewContentEl.innerHTML = ''; 

        currentQuestions.forEach((question, index) => {
            // Pour la revue, on utilise la même logique que pour le résumé pour trouver la réponse de l'utilisateur
            const userAnswerData = userAnswers.slice().reverse().find(ua => ua.questionId === question.id);
            const selectedOptsInReview = (userAnswerData && userAnswerData.selectedOptions) ? userAnswerData.selectedOptions : [];
            
            const questionBlock = document.createElement('div'); questionBlock.classList.add('review-question-block');
            const questionTitle = document.createElement('h4'); questionTitle.textContent = `Question ${index + 1}: ${question.text}`; questionBlock.appendChild(questionTitle);
            const optionsDiv = document.createElement('div'); optionsDiv.classList.add('review-options');
            
            question.options.forEach(opt => {
                const optionItem = document.createElement('div'); 
                optionItem.classList.add('option-div'); // Utiliser .option-div pour un style cohérent
                
                const input = document.createElement('input');
                input.type = (question.type === 'mcq-multiple') ? 'checkbox' : 'radio';
                input.name = `review_q${index}_option_${opt.text.replace(/\s+/g, '')}`; // Nom unique pour les radios
                input.disabled = true;
                
                const label = document.createElement('label');
                label.textContent = " " + opt.text; // Espace pour le style

                const feedbackIcon = document.createElement('span');
                feedbackIcon.classList.add('feedback-icon');

                optionItem.appendChild(input);
                optionItem.appendChild(label);
                optionItem.appendChild(feedbackIcon);

                if (opt.correct) {
                    optionItem.classList.add('actual-correct');
                    feedbackIcon.textContent = '✓';
                }
                if (selectedOptsInReview.includes(opt.text)) {
                    input.checked = true;
                    optionItem.classList.add('user-selected');
                    if (opt.correct) {
                        optionItem.classList.add('correct-choice');
                    } else {
                        optionItem.classList.add('incorrect-choice');
                        feedbackIcon.textContent = '✗'; 
                    }
                }
                optionsDiv.appendChild(optionItem);
            });
            questionBlock.appendChild(optionsDiv);
            const explanationDiv = document.createElement('div'); explanationDiv.classList.add('review-explanation');
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            questionBlock.appendChild(explanationDiv); reviewContentEl.appendChild(questionBlock);
        });
    }

    function resetQuiz() { 
        console.log("Resetting quiz to mode selection");
        clearInterval(timerInterval);
        quizMode = ''; 
        setInitialUIState(); 
        if(timerDisplaySpan) timerDisplaySpan.textContent = '--:--'; 
        if(progressBar) progressBar.style.width = '0%';
        if(nextQuestionBtn) nextQuestionBtn.textContent = "Next Question"; 
    }

    function startTimer() {
        clearInterval(timerInterval); updateTimerDisplay(); 
        timerInterval = setInterval(() => {
            timeLeft--; updateTimerDisplay();
            if (timeLeft <= 0) { clearInterval(timerInterval); alert("Time's up!"); submitExam(); }
        }, 1000);
    }

    function updateTimerDisplay() {
        if(!timerDisplaySpan) return;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplaySpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    if (typeof ALL_QUESTIONS === 'undefined' || ALL_QUESTIONS.length === 0) {
        alert("No questions found. Please ensure questions.js is loaded and contains questions.");
        if(startPracticeBtn) startPracticeBtn.disabled = true;
        if(startExamBtn) startExamBtn.disabled = true;
    }

	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
		navigator.serviceWorker.register('./sw.js').then(registration => {
		// console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, err => {
		    console.error('ServiceWorker registration failed: ', err);
    });
  });
}
});