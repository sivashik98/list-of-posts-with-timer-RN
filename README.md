# List of posts data from API with timer update

Приложение на React-Native CLI (iOS, Android) 
 
Приложение делает запрос на простейший API выводит список полученных элементов, по нажатию на элемент списка - дополнительная информация об элементе списка отображается на следующем экране. Обновление списка реализованно по времени или по действию пользователя.  

Приложение - прокручиваемый список (экран №1) с элементами,  по нажатию на которые, производиться навигация на экран деталей сущности списка (экран №2). На экране №1 отображено 25 элементов из API которые обновляются каждые 60 секунд. При прокрутке списка - обновление приостанавливается. Пользователь может обновить список на экране №1, если с времени последнего обновления прошло более 15 секунд. При переходе на экран №2, обновление элементов на экране №1 прекращается и отсчет времени до обновления списка сбрасывается. При возвращащении на экран №1 с экрана №2 список обновляется немедленно. Отсчет времени до возможности ручного обновления списка также начинается заново.
