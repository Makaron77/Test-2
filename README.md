fullstack todo-list.

Инструкция по запуску локально:


Запустить фронт:
 - cd Test-2/client
 - npm i
 - npm run dev

Запустить бэк: 
 - cd Test-2/server
 - npm i
 - создать в корне server папку .env и скопировать данные из .env_exaple
 - 
 Создать базу данных:
  - npx sequelize db:create - создание
  - npx sequelize-cli db:migrate - миграция
 - npm run start

![image](https://github.com/user-attachments/assets/c71c7cd6-5604-46a6-a63a-44a7aceefdc5)


Тестовое задание туду лист.
Сделайте ToDo-приложение, позволяющее управлять текущим списком дел
Что должно быть в интерфейсе:
Поле для ввода новой задачи
Списки всех задач, невыполненных и выполненных задач (по отдельности)
Пример внешнего вида приложения
 
Требования к коду:
Приложение создано с использованием TypeScript, React и React Hooks
Библиотеки компонент – на ваше усмотрение
Ключевая на ваш взгляд функциональность обязательно покрыта тестами
Проект должен запускаться командой npm i && npm run start
Проект доступен на GitHub Pages/Vercel/etc.
![image](https://github.com/user-attachments/assets/6241a555-b791-494a-b957-f8f1fe32b79e)
