<html>
    <head>
        <title>Наша первая PHP страница</title>
    </head>
    <body>
        <h1><?php print("Привет!") ?></h1>
    </body>
</html>

<?php 
    # Это комментарий
    echo 'А это рабочий код';

    // Это второй комментарий
    echo 'Это второй вывод на экран';
?>

<?php 
    $_name    // правильно
    $_13      // правильно
    $name_13  // правильно

    $13       // неправильно
    $name-13  // неправильно
?>

<?php 
    $name = 'Алевтина';
    echo $name;
?>

<?php 
    $name = 'Петя';
    $bool = true;
    $num = 15.28;
    echo "Привет, $name";  // Привет, Петя
    echo "Это булевский тип? $bool";  // Это булевский тип? 1
    echo "Это дробь = $num";  // Это дробь = 15.28
?>

<?php 
    echo 6 + 5;  // сложение
    echo 7 - 2;  // вычитание
    echo 3 * 2;  // умножение
    echo 8 / 2;  // деление
    echo 7 % 2;  // отстаток от деления

    //Результат вычислений можно записать в переменную
    $var = 3 + 5;
    echo $var;
?>

<?php 
    $heroes = ['Шварценеггер', 'Сталлоне', 'Джеки Чан'];
?>

<?php 
    class User {
        public $name;
        public $date;

        public function show()
        {
            echo $this->name, ' ', $this->date;
        }
    }

    $alevtina = new User;
    $alevtina->name = 'Алевтина';
    $alevtina->date = 10;

    $alevtina->show();  // Алевтина 10

?>
















<?php ?>