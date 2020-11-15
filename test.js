
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        newTodo: "",
        symbol: "+",
        todos: [
            {
                text: "Comprare il latte"
            },
            {
                text: "Comprare le uova"
            },
            {
                text: "Comprare la farina"
            }
        ],
        visible: false
    },
    methods: {
        addTodo: function () {
            var newTodo = {
                text: this.newTodo
            }
            this.todos.push(newTodo);
        },
        eraseToDo: function (i) {
            this.todos.splice(i, 1);
        },
        toggleV: function () {
            this.visible = !this.visible;
            this.symbol == "+" ? this.symbol = "-" : this.symbol = "+";
        }
    }
});