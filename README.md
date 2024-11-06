fullstack todo-list.

Инструкция по запуску локально:


Запустить фронт:
 - cd Test-2/client
 - npm i && npm run start

Запустить бэк: 
 - cd Test-2/server
 - создать в корне server файл .env и скопировать данные из .env_exaple
  
 Создать базу данных:
  - создание базы данных, зависимости, накатить миграции, запустить сервер локально:
  -  npx sequelize db:create && npm run start && npm i && npx sequelize-cli db:migrate 


(![image](https://github.com/user-attachments/assets/76420a93-16ac-45d9-a4ae-92c15776607a))





Требования к коду:
Приложение создано с использованием TypeScript, React и React Hooks
Библиотеки компонент – на ваше усмотрение
Ключевая на ваш взгляд функциональность обязательно покрыта тестами
Проект должен запускаться командой npm i && npm run start
Проект доступен на GitHub Pages/Vercel/etc.

(![image](https://github.com/user-attachments/assets/efe3bffc-9ee5-4a62-b759-4e0f900a36df))

