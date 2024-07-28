# Sophisticated Todo List

## Setup
[Download](https://nodejs.org/) Node js (required)

## How to run project ?
### Paste this code in to your terminal 

```cmd
git clone https://github.com/khe4oyan/sophisticated_todo_list.git
cd sophisticated_todo_list
npm i
npm start
```

## Project Structure
```
Sophisticated Todo List
├── .git
├── .vscode
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── AddCustomCategory
│   │   │   ├── AddCustomCategory.jsx
│   │   │   └── index.js
│   │   ├── AddTodoModal
│   │   │   ├── AddTodoModal.jsx
│   │   │   └── index.js
│   │   ├── DragingHere
│   │   │   ├── DragingHere.jsx
│   │   │   └── index.js
│   │   ├── EditTodoModal
│   │   │   ├── EditTodoModal.jsx
│   │   │   └── index.js
│   │   ├── ShowTodosWithFilters
│   │   │   ├── ShowTodosWithFilters.jsx
│   │   │   └── index.js
│   │   ├── TodoCard
│   │   │   ├── TodoCard.jsx
│   │   │   └── index.js
│   ├── data
│   │   ├── priorityOptions.js
│   │   └── statusOptions.js
│   ├── pages
│   │   ├── HomePage
│   │   │   └── HomePage.jsx
│   │   ├── NotFoundPage
│   │   │   └── NotFoundPage.jsx
│   │   ├── SingleTodoPage
│   │   │   └── SingleTodoPage.jsx
│   │   ├── TodosPage
│   │   │   └── TodosPage.jsx
│   ├── routes
│   │   └── routes.js
│   ├── store
│   │   ├── slices
│   │   │   ├── categorySlice.js
│   │   │   ├── filterSlice.js
│   │   │   ├── todoSlice.js
│   │   │   └── store.js
│   ├── tools
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```