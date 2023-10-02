const App = {
    data() {
        return {
            numRnd: 0,
            card: [
                {
                    id: 0
                    ,path : "src/img/cards/0.png"
                    ,name : "Выберите карту"
                    ,description: 'На время представьте, что ваше сознание — это большой и таинственный лес\n' +
                        '                    <br><br>1. Какую пользу вам может принести выбранное существо?\n' +
                        '                    <br>2. Назовите причину, по которой данному существу не место в вашем лесу. Кто они?  В чем его опасность? Что в нем отталкивающего?\n' +
                        '                    <br>3. Чем оно отличаются от жителей вашего леса?\n' +
                        '                    <br>4. Как оградить свой лес от его присутствия?\n' +
                        '                    <br>5. При каких условиях нежеланный гость, смогут стать обитателями?'
                }
                ,{
                    id: 1
                    ,path : "src/img/cards/1.png"
                    ,name : "Собака"
                    ,description: ""
                }
                ,{
                    id: 2
                    ,path : "src/img/cards/2.png"
                    ,name : "Хомяк"
                    ,description: "Карта дня 2"
                }
                ,{
                    id: 3
                    ,path : "src/img/cards/3.png"
                    ,name : "Змея"
                    ,description: "Карта дня 3"
                }
                ,{
                    id: 4
                    ,path : "src/img/cards/4.png"
                    ,name : "Бабочка"
                    ,description: "Карта дня 4"
                }
                ,{
                    id: 5
                    ,path : "src/img/cards/5.png"
                    ,name : "Носорог"
                    ,description: "Время удовлетворить потребность быть верным тому, кто вы есть на самом деле. Все может быть не так, как кажется, и из-за этого вы можете представлять себя в ложном свете. Копайте глубже в свое внутреннее существо. Это поможет вам понять свои истинные мотивы. Таким образом, вы можете знать, как лучше всего взаимодействовать с окружающим миром."
                }
                ,{
                    id: 6
                    ,path : "src/img/cards/6.png"
                    ,name : "Цапля"
                    ,description: "Цапля просит вас быть бдительным и хранить спокойствие. Сделайте вдох и выдох, возвысьтесь на мгновение над жизненными ненастьями подобно этой птице, преодолевающей дождевые облака."
                }
                ,{
                    id: 7
                    ,path : "src/img/cards/7.png"
                    ,name : "Лисица"
                    ,description: "Настал момент включить любопытство и изобретательность. При этом вы можете оставаться достаточно недоверчивыми и осторожными в своем поведении. Доверяйте собственным органам чувств и интуиции, слушайте свой внутренний голос."
                }
                ,{
                    id: 8
                    ,path : "src/img/cards/8.png"
                    ,name : "Орёл"
                    ,description: "Если ты устал и выгорел обратись к мудрости своей души чтоб почувствовать обновление. Орел учит, что важно познать жизнь со всеми ее светлыми и темными сторонами. Как негативные, так и позитивные события служат высшей цели и помогают развивать собственное Я. В сложных ситуациях, необходимо помнить, что только опираясь на свою духовность (крылья) можно подняться над ситуацией (взлететь) и расширить Ваш смысл существования (горизонт) до гораздо больших пределов, чем он был до этого (духовный рост)."
                }
                ,{
                    id: 9
                    ,path : "src/img/cards/9.png"
                    ,name : "Крокодил"
                    ,description: '<p>Привет</p>'
                }
                ,{
                    id: 10
                    ,path : "src/img/cards/10.png"
                    ,name : "Олень"
                    ,description: "Верьте в свою цель, интуицию и способность сделать решающий шаг. Подобно оленю не принимайте поспешных решений; олень замирает, оценивая новую обстановку всеми своими чувствами и затем ступает вперед грациозно и и уверенно – чтобы не ждало его дальше."
                }
                ,{
                    id: 11
                    ,path : "src/img/cards/11.png"
                    ,name : "Слон"
                    ,description: "Слон втягивает запахи хоботом и таким образом оценивает ситуацию. Уделите внимание тому, что пахнет хорошо, а что имеет неприятный «душок». Достаточно ли вы разборчивы? Замечаете ли вы, что некоторые вещи пахнут не так, как должны пахнуть? "
                }
                ,{
                    id: 12
                    ,path : "src/img/cards/12.png"
                    ,name : "Полярный медведь"
                    ,description: "Необходимо периодически погружаться в глубины своего 'я' и пробуждать внутреннюю силу, однако вкус к жизни вы сможете почувствовать лишь после того, как выведете эту силу на свет и найдете ей практическое применение."
                }
                ,{
                    id: 13
                    ,path : "src/img/cards/13.png"
                    ,name : "Паук"
                    ,description: "Паук, предлагает остановиться и взвесить: вы действительно готовы встретиться с тем, что находиться дальше? С вашим страхом, стыдом или может быть болью? Готовы ли вы сами плести свою судьбы?"
                }
                ,{
                    id: 14
                    ,path : "src/img/cards/14.png"
                    ,name : "Медведь"
                    ,description: "Необходимо периодически погружаться в глубины своего 'я' и пробуждать внутреннюю силу, однако вкус к жизни вы сможете почувствовать лишь после того, как выведете эту силу на свет и найдете ей практическое применение."
                }
                ,{
                    id: 15
                    ,path : "src/img/cards/15.png"
                    ,name : "Тигр"
                    ,description: '<p>Тигр расскажет вам как быть в уединении с собой, научит медитации, покажет вам внутри вас ваше сокровенное место, где вы всегда на связи с самим собой и можете увидеть ответы на все ваши жизненные вопросы. </p><br>' +
                        '<p>Тигр советует вам никогда не идти на компромисс, не предавать себя и не идти ни у кого на поводу</p>'
                }
                ,{
                    id: 16
                    ,path : "src/img/cards/16.png"
                    ,name : "Конь"
                    ,description: '<p>Солнце совершает круг, погружая мир в темноту и вновь освещая все вокруг в дневное время суток.</p><br>' +
                        '<p>Конь – солнце несет своего всадника сквозь смерть к новому рождению. Что-то в вашей жизни требует трансформации или возможно перемены уже проникли в вашу жизнь.</p><br>'+
                        '<p>Проверьте – может быть в вашей жизни накопились факторы, которые не позволяют вашей силе течь легко и свободно. Осознайте их, освободитесь от тех, которые уже не работают на вас. Не ограничивайте себя убеждениями и ожиданиями других людей</p>'
                }
                ,{
                    id: 17
                    ,path : "src/img/cards/17.png"
                    ,name : "Леопард"
                    ,description: '<p>Леопард, напоминает, сколько ресурсов у вас есть. </p><br>' +
                        '<p>Вы, как и леопард, можете выбирать из множества ресурсов, потому что у вас есть на это полномочия. </p><br>' +
                        '<p>Леопард хочет, чтобы вы поняли силу, которая скрывается в тени вашей жизни. Обладая этим знанием, вы сможете использовать благость этой силы</p>'
                }
                ,{
                    id: 18
                    ,path : "src/img/cards/18.png"
                    ,name : "Волк"
                    ,description: '<p>У вас есть идеальный союзник, преданный партнёру, любящий, заботливый по отношению к своим. </p> <br>'+
                        '<p>Однако, его природа двойственна – он агрессивный, кровожадный, жестокий, хитрый, сильный и подчас непобедимый зверь. Какая сторона волчьей сущности актуальна сейчас в вашей жизни?</p>'
                }
                ,{
                    id: 19
                    ,path : "src/img/cards/19.png"
                    ,name : "Кот"
                    ,description: "Карта дня 2"
                }
            ]
        }
    },
    created(){
        const cookies = document.cookie.split(";").map(cookie => cookie.split("="));
        const myCookie = cookies.find(cookie => cookie[0].trim() === "dayCard");
        if (myCookie != undefined) {
            // Если кука найдена, получаем значение
            this.numRnd = myCookie[1];
            console.log("Значение myCookie:", this.numRnd);
        } else {
            console.log("Кука myCookie не найдена.");
        }
    },
    methods:{
        getRandomInt(min, max) {
            let expirationDate = new Date();
            if(this.numRnd == 0) {
                min = Math.ceil(min);
                max = Math.floor(max);
                this.numRnd = Math.floor(Math.random() * (max - min + 1)) + min;
                expirationDate.setDate(expirationDate.getDate() + 1);
                document.cookie = "dayCard=" + this.numRnd + "; expires=" + expirationDate.toUTCString() + "; path=/";
                return this.numRnd
            }else return this.numRnd
        }
    },
}
Vue.createApp(App).mount('#app')