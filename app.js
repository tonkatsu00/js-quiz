const quiz = [
  {
    question: '新撰組局長として活躍し戊辰戦争で敗れ処刑された人物は誰？',
    answers: [
      '土方歳三',
      '近藤勇',
      '永倉新八',
      '沖田総司',
    ],
    correct: '近藤勇'
  }, {
    question: '宮本武蔵と佐々木小次郎が決闘をした島はどこでしょう？',
    answers: [
      '巌流島',
      '沖ノ鳥島',
      'DASH島',
      '利尻島',
    ],
    correct: '巌流島'
  }, {
    question: '「銀閣寺」の名前の由来はどれ？',
    answers: [
      '「金閣寺」に名前を合わせた',
      '建築材料の一部に「銀」が使われていたから',
      '最初は銀ぱくが貼られていたから',
      '銀ぱくを貼る予定で作られたから',
    ],
    correct: '銀ぱくを貼る予定で作られたから'
  }, {
    question: '日本のお金の単位が「円」になったのはいつから？',
    answers: [
      '明治4年',
      '大正4年',
      '昭和4年',
      '平成4年',
    ],
    correct: '明治4年'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は'　+ score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e => {
    clickHandler(e);
  }));
  handlerIndex++;
}