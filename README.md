# trello-api-tests
# 🧪 Trello API – Test Suite (Postman / JavaScript)

A collection of automated tests for the [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/), built with **Postman** and written in **JavaScript**.

---

## 📋 What's covered

- ✅ **Boards** — create, read, update, delete
- ✅ **Lists** — create, read, update, archive
- ✅ **Cards** — create, read, update, move, archive

Each collection includes:

- Status code validation
- Response body and schema checks
- Edge cases (invalid IDs, empty fields, special characters)

---

## 🛠️ Requirements

- [Postman](https://www.postman.com/downloads/) (v10 or higher recommended)
- A Trello account with API access
- Your **API Key** and **Token** from https://trello.com/power-ups/admin

---

## ⚙️ Setup

1. Clone this repo

bash

   `git clone https://github.com/TheMartuu/trello-api-tests.git`

1. Import the collection into Postman
    - Open Postman → **Import** → select the `.json` file from this repo
2. Set up your environment variables in Postman:
    
    
    | Variable | Description |
    | --- | --- |
    | `base_url` | `https://api.trello.com/1` |
    | `api_key` | Your Trello API Key |
    | `token` | Your Trello API Token |
    | `board_id` | ID of a board to use in the tests |

---

## 🚀 Running the tests

### In Postman

Open the collection and click **Run collection** using the Collection Runner.

### From the terminal (Newman)

bash

`npm install -g newman

newman run trello-api-tests.json \
  --env-var "api_key=YOUR_KEY" \
  --env-var "token=YOUR_TOKEN" \
  --env-var "board_id=YOUR_BOARD_ID"`

---

## 📁 Project structure

`trello-api-tests/
├── boards/
│   └── boards-crud.postman_collection.json
├── lists/
│   └── lists-crud.postman_collection.json
├── cards/
│   └── cards-crud.postman_collection.json
└── README.md`

---

## 📌 Notes

- Tests are written in JavaScript inside Postman's **Tests** tab
- Sensitive data (API Key, Token) should never be hardcoded — always use environment variables
- This project is part of a broader API testing learning series

---

## 👤 Author: Martuu

