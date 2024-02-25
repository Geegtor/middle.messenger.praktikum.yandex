### WebChat 
### TS + Handlebars  + Typescript
### Vite + Ntlify
---

[Макет приложения](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=0-1&mode=design&t=T3LAnzU7jBvkpiMn-0)

---
## Описание

Веб приложение для обмена сообщениями.
Разработка ведётся по спринтам с разделением по этапам:

**Sprint_1**
 - архитектура проекта
 - верстка основных компонентов
 - сборка страниц приложения

 **Sprint_2**
 - добавление утилит (EventBus, HTTP запросы)
 - внедрение базового компонента
 - валидация форм

 **Sprint_3**
 - реализован полноценный роутинг приложения
 - внедрение функционала для HTTP / WS запросов
 - добавлена логика отображения и изменения контента (сообщения, настройки)

 **Sprint_3**
 - проедение актуализации пакетов, скриптов проекта
 - внедрение unit тестов базовых компонентов (Mocha + Chai)

PR: 
 - sprint_1: https://github.com/Geegtor/middle.messenger.praktikum.yandex/pull/1
 - sprint_2: https://github.com/Geegtor/middle.messenger.praktikum.yandex/pull/2
 - sprint_3: https://github.com/Geegtor/middle.messenger.praktikum.yandex/pull/3
 - sprint_4: https://github.com/Geegtor/middle.messenger.praktikum.yandex/pull/4

Netlify: https://deploy--musical-queijadas-33aa37.netlify.app/


## Установка и запуск

- `npm install` — установка пакетов проекта
- `npm run lint` — запуск ESlint и Stylelint с флагом --fix
- `npm run dev` — запуск версии для разработки, http://localhost:5173/
- `npm start` — сборка стабильной версии, http://localhost:3000/



## **Об использовании**

/ —  авторизация
/sign-up — регистрация
/settings — настройки профиля пользователя
/messenger — мессенджер со списком чатов

Реализован функционал:

 - создание нового чата
 - добавление и удаление пользователей из чата
 - изменение данных пользователя с валидацеий данных
 - * удаление чата возможно удалением из чата всех пользователей


## ** TODO LIST **
 - настройка автара чата
 - полноценное удаление чата
