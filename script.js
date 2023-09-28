const App = {
    data() {
        return {
            numRnd: 0,
            card: [
                {
                    id: 0
                    ,path : "src/img/cards/0.png"
                    ,description: "Выберите карту дня"
                }
                ,{
                    id: 1
                    ,path : "src/img/cards/1.png"
                    ,description: "Карта дня 1"
                }
                ,{
                    id: 2
                    ,path : "src/img/cards/2.png"
                    ,description: "Карта дня 2"
                }
                ,{
                    id: 3
                    ,path : "src/img/cards/3.png"
                    ,description: "Карта дня 3"
                }
                ,{
                    id: 4
                    ,path : "src/img/cards/4.png"
                    ,description: "Карта дня 4"
                }
                ,{
                    id: 5
                    ,path : "src/img/cards/5.png"
                    ,description: "Карта дня 5"
                }
                ,{
                    id: 6
                    ,path : "src/img/cards/6.png"
                    ,description: "Карта дня 6"
                }
                ,{
                    id: 7
                    ,path : "src/img/cards/7.png"
                    ,description: "Карта дня 7"
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
    }
}
Vue.createApp(App).mount('#app')