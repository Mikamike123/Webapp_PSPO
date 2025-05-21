// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const modeSelectionDiv = document.getElementById('mode-selection');
    const quizAreaDiv = document.getElementById('quiz-area');
    const resultsAreaDiv = document.getElementById('results-area');
    const reviewAreaDiv = document.getElementById('review-area');

    console.log("modeSelectionDiv:", modeSelectionDiv);
    console.log("quizAreaDiv:", quizAreaDiv);
    console.log("resultsAreaDiv:", resultsAreaDiv);
    console.log("reviewAreaDiv:", reviewAreaDiv);

    const practiceQuestionCountSelect = document.getElementById('practice-question-count');
    const startPracticeBtn = document.getElementById('start-practice-btn');
    
    const examQuestionCountSelect = document.getElementById('exam-question-count');
    const examDurationSelect = document.getElementById('exam-duration');
    const startExamBtn = document.getElementById('start-exam-btn');

    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const explanationTextEl = document.getElementById('explanation-text');
    
    const prevQuestionBtn = document.getElementById('prev-question-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const submitExamBtn = document.getElementById('submit-exam-btn');

    const scoreTextEl = document.getElementById('score-text');
    const passFailTextEl = document.getElementById('pass-fail-text');
    const reviewSummaryEl = document.getElementById('review-summary');
    const reviewAnswersBtn = document.getElementById('review-answers-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    const reviewContentEl = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results-btn');
    const restartFromReviewBtn = document.getElementById('restart-from-review-btn');

    const timerDisplaySpan = document.getElementById('time');
    const timerDisplayContainer = document.getElementById('timer-display'); 
    const currentQNumEl = document.getElementById('current-q-num');
    const totalQNumEl = document.getElementById('total-q-num');
    const progressBar = document.getElementById('progress-bar');
    const exitQuizBtn = document.getElementById('exit-quiz-btn'); 
    const quizHeaderControls = document.querySelector('.quiz-header-controls'); 

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
        if (modeSelectionDiv) modeSelectionDiv.classList.remove('hidden'); else console.error("modeSelectionDiv not found for initial state");
        if (quizAreaDiv) quizAreaDiv.classList.add('hidden'); else console.error("quizAreaDiv not found for initial state");
        if (resultsAreaDiv) resultsAreaDiv.classList.add('hidden'); else console.error("resultsAreaDiv not found for initial state");
        if (reviewAreaDiv) reviewAreaDiv.classList.add('hidden'); else console.error("reviewAreaDiv not found for initial state");
        
        if (quizHeaderControls) {
            // console.log("Hiding quizHeaderControls initially via setInitialUIState");
            quizHeaderControls.classList.add('hidden'); 
        } else {
            console.warn("quizHeaderControls not found initially for setInitialUIState");
        }
        if (timerDisplayContainer) {
            // console.log("Hiding timerDisplayContainer initially via setInitialUIState");
            timerDisplayContainer.classList.add('hidden');
        } else {
             console.warn("timerDisplayContainer not found initially for setInitialUIState");
        }
        console.log("Initial UI state set (from setInitialUIState).");
    }
    
    // --- Event Listeners ---
    // On s'assure que les éléments existent avant d'attacher les listeners
    if (startPracticeBtn) startPracticeBtn.addEventListener('click', () => startQuiz('practice')); else console.error("startPracticeBtn not found for listener");
    if (startExamBtn) startExamBtn.addEventListener('click', () => startQuiz('exam')); else console.error("startExamBtn not found for listener");
    
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
    } else {
        // Ce log ne devrait pas apparaître si l'ID est correct dans l'HTML
        console.warn("exitQuizBtn (ID: exit-quiz-btn) not found in DOM when attaching listener.");
    }

    // APPEL INITIAL pour mettre l'UI dans le bon état
    setInitialUIState(); 


    function startQuiz(mode) {
        console.log(`Starting quiz in ${mode} mode`);
        quizMode = mode;
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        
        let selectedCountInput;
        if (mode === 'practice') {
            selectedCountInput = practiceQuestionCountSelect;
        } else { 
            selectedCountInput = examQuestionCountSelect;
        }

        if (!selectedCountInput) {
            alert(`Error: Count selection input for ${mode} mode not found.`);
            return;
        }
        const selectedQuestionCount = parseInt(selectedCountInput.value);

        if (isNaN(selectedQuestionCount) || selectedQuestionCount < 0) {
            alert("Please select a valid number of questions.");
            return;
        }
        
        let questionsToUse = [...ALL_QUESTIONS]; 

        if (selectedQuestionCount === 0) { 
            currentQuestions = shuffleArray(questionsToUse);
        } else {
            currentQuestions = shuffleArray(questionsToUse).slice(0, selectedQuestionCount);
        }

        if (ALL_QUESTIONS.length === 0) {
            alert("No questions loaded. Please check questions.js.");
            resetQuiz(); 
            return;
        }
        if (currentQuestions.length === 0 && selectedQuestionCount !== 0 && ALL_QUESTIONS.length > 0) {
            alert(`Not enough questions available for the selected count (${selectedQuestionCount}). Starting with all ${ALL_QUESTIONS.length} available questions.`);
            currentQuestions = shuffleArray([...ALL_QUESTIONS]);
        }
        if (currentQuestions.length === 0 ) { 
             alert("No questions available to start the quiz based on your selection or data.");
             resetQuiz();
             return;
        }

        if(totalQNumEl) totalQNumEl.textContent = currentQuestions.length;

        if(modeSelectionDiv) modeSelectionDiv.classList.add('hidden');
        if(resultsAreaDiv) resultsAreaDiv.classList.add('hidden');
        if(reviewAreaDiv) reviewAreaDiv.classList.add('hidden');
        if(quizAreaDiv) quizAreaDiv.classList.remove('hidden'); 
        if(feedbackContainerEl) feedbackContainerEl.classList.add('hidden');
        if(nextQuestionBtn) nextQuestionBtn.textContent = "Next Question"; 

        if(quizHeaderControls) quizHeaderControls.classList.remove('hidden'); 
        updateProgressBar(); 

        if (quizMode === 'exam') {
            const selectedDuration = parseInt(examDurationSelect.value);
            if (isNaN(selectedDuration) || selectedDuration <= 0) {
                alert("Please select a valid exam duration.");
                resetQuiz(); 
                return;
            }
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
        // console.log(`Displaying question: index ${currentQuestionIndex}`);
        if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) {
            updateProgressBar(); 
            return;
        }
        const question = currentQuestions[currentQuestionIndex];
        if(!question) {
            console.error(`Question at index ${currentQuestionIndex} is undefined.`);
            return;
        }

        if(questionTextEl) questionTextEl.textContent = question.text;
        if(optionsContainerEl) optionsContainerEl.innerHTML = ''; 
        if(feedbackContainerEl) feedbackContainerEl.classList.add('hidden'); 
        if(currentQNumEl) currentQNumEl.textContent = currentQuestionIndex + 1;

        if (quizMode === 'practice') {
            if (feedbackContainerEl && feedbackContainerEl.classList.contains('hidden')) { 
                if(submitAnswerBtn) submitAnswerBtn.classList.remove('hidden');
                if(nextQuestionBtn) nextQuestionBtn.classList.add('hidden');
            } else { 
                if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden');
                if(nextQuestionBtn) nextQuestionBtn.classList.remove('hidden');
            }
        } else { 
            if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden');
        }

        question.options.forEach((option, index) => {
            const optionId = `q${currentQuestionIndex}_option${index}`;
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option-div'); 
            
            const input = document.createElement('input');
            input.id = optionId;
            input.name = `q${currentQuestionIndex}_options`;
            input.value = option.text; 
            input.disabled = false; 

            if (question.type === 'mcq-multiple') {
                input.type = 'checkbox';
            } else { 
                input.type = 'radio';
            }
            
            const label = document.createElement('label');
            label.htmlFor = optionId;
            label.textContent = option.text;

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            const feedbackIconSpan = document.createElement('span');
            feedbackIconSpan.classList.add('feedback-icon');
            optionDiv.appendChild(feedbackIconSpan);

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
        updateProgressBar(); 
        updateNavigationButtons(); 
    }
    
    function updateNavigationButtons() {
        // console.log("Updating navigation buttons");
        if(currentQuestions.length === 0) { 
            if(prevQuestionBtn) prevQuestionBtn.classList.add('hidden');
            if(nextQuestionBtn) nextQuestionBtn.classList.add('hidden');
            if(submitExamBtn) submitExamBtn.classList.add('hidden');
            if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden');
            return;
        }

        const isLastQuestion = currentQuestionIndex >= currentQuestions.length - 1;

        if (quizMode === 'exam') {
            if(prevQuestionBtn) prevQuestionBtn.classList.toggle('hidden', currentQuestionIndex === 0);
            if(nextQuestionBtn) nextQuestionBtn.classList.toggle('hidden', isLastQuestion);
            if(submitExamBtn) submitExamBtn.classList.toggle('hidden', !isLastQuestion);
            if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden'); 
        } else { // Practice mode
            if(prevQuestionBtn) prevQuestionBtn.classList.add('hidden'); 
            if(submitExamBtn) submitExamBtn.classList.add('hidden'); 
            // Géré par displayQuestion et handleSubmitAnswerPractice
        }
    }
    
    function updateProgressBar() {
        if (!progressBar) return;
        if (currentQuestions.length > 0) {
            const progress = (currentQuestionIndex) / currentQuestions.length; 
            progressBar.style.width = `${progress * 100}%`;
        } else {
            progressBar.style.width = '0%';
        }
    }

    function handleNextQuestion() {
        // console.log("Next question clicked");
        if (quizMode === 'exam') {
            saveCurrentAnswer(); 
        }

        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(); 
        } else if (quizMode === 'practice' && currentQuestionIndex === currentQuestions.length - 1) {
            if(progressBar) progressBar.style.width = '100%'; 
            showResults();
        }
    }

    function handlePreviousQuestion() { 
        // console.log("Previous question clicked");
        if (quizMode === 'exam') { 
            saveCurrentAnswer(); 
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion(); 
            }
        }
    }

    function saveCurrentAnswer() { 
        // console.log("Saving current answer");
        if (currentQuestionIndex >= currentQuestions.length || !currentQuestions[currentQuestionIndex]) return;
        const question = currentQuestions[currentQuestionIndex];
        const selectedOptionValues = getSelectedOptionsValues();
        
        let existingAnswer = userAnswers.find(ua => ua.questionId === question.id && (!ua.mode || ua.mode !== 'practice_submission'));
        if (existingAnswer) {
            existingAnswer.selectedOptions = selectedOptionValues;
        } else { 
            userAnswers.push({
                questionId: question.id,
                selectedOptions: selectedOptionValues, 
                isCorrect: null 
            });
        }
    }

    function handleSubmitAnswerPractice() {
        // console.log("Submit answer (practice) clicked");
        const question = currentQuestions[currentQuestionIndex];
        const selectedOptionValues = getSelectedOptionsValues();

        if (selectedOptionValues.length === 0 && (question.type === 'mcq-single' || question.type === 'mcq-multiple')) {
            alert("Please select an answer.");
            return;
        }

        const isCorrectOverall = checkAnswer(question, selectedOptionValues);
        
        let practiceAnswer = userAnswers.find(ua => ua.questionId === question.id && ua.mode === 'practice_submission');
        if (practiceAnswer) {
            practiceAnswer.selectedOptions = selectedOptionValues;
            practiceAnswer.isCorrect = isCorrectOverall;
        } else {
             userAnswers.push({
                questionId: question.id,
                selectedOptions: selectedOptionValues,
                isCorrect: isCorrectOverall,
                mode: 'practice_submission' 
            });
        }

        if(feedbackContainerEl && explanationTextEl) {
            if (isCorrectOverall) {
                feedbackContainerEl.classList.remove('incorrect');
                feedbackContainerEl.classList.add('correct');
            } else {
                feedbackContainerEl.classList.remove('correct');
                feedbackContainerEl.classList.add('incorrect');
            }
            explanationTextEl.innerHTML = `<strong>Explanation:</strong><br>${question.explanation}`;
            feedbackContainerEl.classList.remove('hidden');
        }
        
        if(optionsContainerEl) {
            const optionDivs = optionsContainerEl.querySelectorAll('.option-div');
            optionDivs.forEach((div) => {
                const input = div.querySelector('input');
                const optionText = input.value;
                const isThisOptionCorrect = question.options.find(opt => opt.text === optionText)?.correct;
                const feedbackIcon = div.querySelector('.feedback-icon');
                if(feedbackIcon) feedbackIcon.textContent = ''; 

                div.classList.add('disabled-option'); 
                input.disabled = true; 

                if (input.checked) { 
                    div.classList.add('user-selected');
                    if (isThisOptionCorrect) {
                        div.classList.add('correct-choice');
                        if(feedbackIcon) feedbackIcon.textContent = '✓'; 
                    } else {
                        div.classList.add('incorrect-choice');
                        if(feedbackIcon) feedbackIcon.textContent = '✗'; 
                    }
                }
                
                if (isThisOptionCorrect) {
                    div.classList.add('actual-correct');
                    if (!input.checked && feedbackIcon && feedbackIcon.textContent === '') { 
                        feedbackIcon.textContent = '✓';
                    }
                }
            });
        }
        
        if(submitAnswerBtn) submitAnswerBtn.classList.add('hidden'); 
        if(nextQuestionBtn) {
            nextQuestionBtn.classList.remove('hidden'); 
            if (currentQuestionIndex >= currentQuestions.length - 1) {
                nextQuestionBtn.textContent = "Show Results";
            } else {
                nextQuestionBtn.textContent = "Next Question";
            }
        }
        if(progressBar) progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`; 
    }
    
    function getSelectedOptionsValues() {
        const selected = [];
        if(optionsContainerEl) {
            optionsContainerEl.querySelectorAll('input:checked').forEach(input => {
                selected.push(input.value); 
            });
        }
        return selected;
    }

    function checkAnswer(question, selectedOptionTexts) {
        if (!question || !question.options) return false; 
        const correctOptionTexts = question.options.filter(opt => opt.correct).map(opt => opt.text);
        
        if (question.type === 'mcq-multiple') {
            return selectedOptionTexts.length === correctOptionTexts.length &&
                   selectedOptionTexts.every(optText => correctOptionTexts.includes(optText)) &&
                   correctOptionTexts.every(optText => selectedOptionTexts.includes(optText));
        } else { 
            return selectedOptionTexts.length === 1 && correctOptionTexts.includes(selectedOptionTexts[0]);
        }
    }

    function submitExam() {
        console.log("Submit exam clicked");
        clearInterval(timerInterval);
        saveCurrentAnswer(); 
        if(progressBar) progressBar.style.width = '100%'; 

        score = 0; 
        const examModeAnswersFromUser = userAnswers.filter(ua => !ua.mode || ua.mode !== 'practice_submission');

        currentQuestions.forEach(q => { 
            const answerForThisQ = examModeAnswersFromUser.find(a => a.questionId === q.id);
            const selectedOps = answerForThisQ ? (answerForThisQ.selectedOptions || []) : [];
            const isQCorrect = checkAnswer(q, selectedOps);

            if (isQCorrect) {
                score++;
            }
            
            if(answerForThisQ) {
                answerForThisQ.isCorrect = isQCorrect;
            } else { 
                userAnswers.push({
                    questionId: q.id, 
                    selectedOptions: [], 
                    isCorrect: isQCorrect, 
                    mode: 'exam_implicit_submission' 
                });
            }
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
                if (!answeredQuestionIds.has(ps.questionId)) {
                    if (ps.isCorrect) finalScoreToShow++;
                    answeredQuestionIds.add(ps.questionId);
                }
            });
        } else { 
            finalScoreToShow = score; 
        }
        
        const percentage = totalQuestionsForDisplay > 0 ? Math.round((finalScoreToShow / totalQuestionsForDisplay) * 100) : 0;
        if(scoreTextEl) scoreTextEl.textContent = `Your Score: ${finalScoreToShow} out of ${totalQuestionsForDisplay} (${percentage}%)`;

        if(passFailTextEl) {
            if (percentage >= PASS_PERCENTAGE) {
                passFailTextEl.textContent = "Congratulations! You Passed!";
                passFailTextEl.className = 'pass';
            } else {
                passFailTextEl.textContent = "Keep Practicing! You Did Not Pass.";
                passFailTextEl.className = 'fail';
            }
        }
        populateReviewSummary();
    }

    function populateReviewSummary() {
        if(!reviewSummaryEl) return;
        reviewSummaryEl.innerHTML = ''; 
        currentQuestions.forEach((q, index) => {
            const userAnswer = userAnswers.find(ua => ua.questionId === q.id && 
                ( (quizMode === 'exam' && (!ua.mode || ua.mode.startsWith('exam_'))) || (quizMode === 'practice' && ua.mode === 'practice_submission') ) );

            const item = document.createElement('div');
            item.classList.add('summary-item');
            
            let correctnessText = 'Not Answered';
            let correctnessClass = 'not-answered';

            if (userAnswer && typeof userAnswer.isCorrect === 'boolean') {
                correctnessText = userAnswer.isCorrect ? 'Correct' : 'Incorrect';
                correctnessClass = userAnswer.isCorrect ? 'correct' : 'incorrect';
            } else if (quizMode === 'practice' && !userAnswer) { 
                correctnessText = 'Skipped';
            }

            item.textContent = `Q${index + 1}: ${q.text.substring(0,50)}... - ${correctnessText}`;
            item.classList.add(correctnessClass);
            reviewSummaryEl.appendChild(item);
        });
    }

    function showReviewArea() {
        console.log("Showing review area");
        if(resultsAreaDiv) resultsAreaDiv.classList.add('hidden');
        if(reviewAreaDiv) reviewAreaDiv.classList.remove('hidden');
        if(!reviewContentEl) return;
        reviewContentEl.innerHTML = ''; 

        currentQuestions.forEach((question, index) => {
            const userAnswerData = userAnswers.find(ua => ua.questionId === question.id && 
                ( (quizMode === 'exam' && (!ua.mode || ua.mode.startsWith('exam_'))) || (quizMode === 'practice' && ua.mode === 'practice_submission') ) );
            const selectedOptsInReview = (userAnswerData && userAnswerData.selectedOptions) ? userAnswerData.selectedOptions : [];
            
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('review-question-block');

            const questionTitle = document.createElement('h4');
            questionTitle.textContent = `Question ${index + 1}: ${question.text}`;
            questionBlock.appendChild(questionTitle);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('review-options');
            question.options.forEach(opt => {
                const optionItem = document.createElement('div');
                optionItem.classList.add('option-item');
                optionItem.textContent = opt.text;

                if (opt.correct) {
                    optionItem.classList.add('correct-answer');
                }
                if (selectedOptsInReview.includes(opt.text)) {
                    optionItem.classList.add('user-selected');
                    if (!opt.correct) {
                        optionItem.classList.add('incorrect-selection');
                    }
                }
                optionsDiv.appendChild(optionItem);
            });
            questionBlock.appendChild(optionsDiv);

            const explanationDiv = document.createElement('div');
            explanationDiv.classList.add('review-explanation');
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            questionBlock.appendChild(explanationDiv);

            reviewContentEl.appendChild(questionBlock);
        });
    }

    function resetQuiz() {
        console.log("Resetting quiz (called from resetQuiz function)");
        clearInterval(timerInterval);
        setInitialUIState(); 
        if(timerDisplaySpan) timerDisplaySpan.textContent = '--:--'; 
        if(progressBar) progressBar.style.width = '0%';
        if(nextQuestionBtn) nextQuestionBtn.textContent = "Next Question"; 
    }

    function startTimer() {
        console.log("Starting timer");
        clearInterval(timerInterval); 
        updateTimerDisplay(); 
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                submitExam(); 
            }
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
		// console.log('ServiceWorker registration failed: ', err);
    });
  });
}
});