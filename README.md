fullstack todo-list.

Инструкция по запуску локально:
[Ссылка на видео-инструкцию][https://youtu.be/KFRDjYg_Vx8?si=gv-MjtZejM7l8bDV](https://rutube.ru/video/private/88a286ebe687a65859dd4d3fd293da65/?p=g5xO-gEDJAebOt0vtVlz4Q)

Запустить фронт:
 - cd Test-2/client
 - npm i && npm run start

Запустить бэк: 
 - cd Test-2/server
 - создать в корне server файл .env и скопировать данные из .env_exaple
  
 Создать базу данных:
  - создание базы данных, зависимости, накатить миграции, запустить сервер локально:
  -  npm install && npx sequelize db:create && npx sequelize-cli db:migrate && npm run start



(![image](https://github.com/user-attachments/assets/76420a93-16ac-45d9-a4ae-92c15776607a))





Требования к коду:
Приложение создано с использованием TypeScript, React и React Hooks
Библиотеки компонент – на ваше усмотрение
Ключевая на ваш взгляд функциональность обязательно покрыта тестами
Проект должен запускаться командой npm i && npm run start
Проект доступен на GitHub Pages/Vercel/etc.

(![image](https://github.com/user-attachments/assets/efe3bffc-9ee5-4a62-b759-4e0f900a36df))

