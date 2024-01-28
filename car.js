/* 
+ Создайте класс Машина.
+ Пусть у неё будет цвет, колёса и скорость.
+ Запретите редактирование этих свойств.
+ Напишите функцию покрасить, меняющую цвет машины на выбранный вами.
Напишите функцию "сменить колёса", которые меняют колёса на зимние и обратно.
Сделайте на сайте кнопки "показать машину", "сменить колёса", "покрасить", которая рисует 4 дива.
Нижние два - круглые и чёрные - колёса.
Верхний и средний длинный - тело машины. (кому не лень, сделайте окна).
Бордер точечками - зимние колёса.*/
class Car {
#color;
#wheels;
#speed;
constructor (color, wheels, speed) {
    this.#color=color;
    this.#wheels=wheels;
    this.#speed=speed;
}
changeColor (newcolor, elem){
    elem.style.backgroundColor = newcolor;
}
}

window.addEventListener(
    'load',
    () => { /// безымянную функцию
        var c = new Car();
        roof.addEventListener(
            'click',
            (chosluchilos) => {
                // безымянная функция с параметром, в который будет передано событие
                c.changeColor('#00ff00', chosluchilos.target);
            }
        );
        frame.addEventListener(
            'click',
            (chosluchilos) => {
                c.changeColor('#00ff00', chosluchilos.target);
            }
        );
    }
);