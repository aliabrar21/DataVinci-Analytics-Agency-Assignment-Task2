Here’s a clean **README.md** file for your **Nested Checkbox Component** project in React:

```markdown
# Nested Checkbox Component

This is a React project demonstrating a **nested checkbox component** with the following intended behavior:

- Selecting **"Select All"** should check/uncheck every node (all categories and items).
- Selecting **"Fruits"** should check/uncheck all individual fruits.
- Selecting **"Vegetables"** should check/uncheck all individual vegetables.
- Individual selections update parent checkboxes accordingly (checked, unchecked, or indeterminate).

---

## 🚀 Features

- Fully nested checkbox structure
- Parent-child relationship management
- **Indeterminate** state support (when some children are selected, but not all)
- Clean UI with CSS styling

---

## 📂 Project Structure

```

nested-checkbox/
│── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│── package.json
│── README.md

````

---

## ⚡ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/aliabrar21/DataVinci-Analytics-Agency-Assignment-Task2
   cd nested-checkbox
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. Open in your browser:

   ```
   http://localhost:3000
   ```

---

## 🛠️ Dependencies

This project uses:

* **React** (UI Library)
* **React DOM** (Rendering)
* **CSS** for styling

Installed automatically with:

```bash
npm install react react-dom
```

---

## 📖 Explanation

* **State Management (`checkedItems`)**
  Keeps track of which items are checked in an object:

  ```js
  {
    fruits: { apple: false, banana: false, orange: false },
    vegetables: { carrot: false, potato: false, tomato: false }
  }
  ```

* **Toggle Logic (`handleChange`)**

  * If **"Select All"** → Updates all nodes to match checked state.
  * If **"Fruits" or "Vegetables"** → Updates all related items.
  * If **individual items** → Updates just that item.

* **Indeterminate Handling**
  Uses:

  ```js
  ref.current.indeterminate = true;
  ```

  when **some** children are selected but not all.

---

## 🎨 UI Preview

✅ Select All → Checks everything
✅ Fruits → Checks all fruits
✅ Vegetables → Checks all vegetables
✅ Individual item updates parent states accordingly

---

## 📜 License

This project is open-source and available under the **MIT License**.

```

---

👉 Do you want me to also create a **demo GIF / screenshot section** inside the README so you can directly show the nested checkbox behavior?
```
