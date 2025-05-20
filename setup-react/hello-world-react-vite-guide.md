# 🚀 Create Your First React App with Vite – "Hello World" Tutorial

This guide walks you through creating a simple **Hello World** app using **React with Vite**. Perfect for beginners!

---

## ✅ Step 1: Install Node.js (Skip if already installed)

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** for your operating system.
3. Install it using default settings.
4. Open a terminal and check installation:
   ```bash
   node -v
   npm -v
   ```

---

## ✅ Step 2: Create the React App Using Vite

In the terminal or command prompt, run:

```bash
npm create vite@latest
```

Follow the prompts:

- **Project name?** → `hello-world`
- **Select a framework:** → `React`
- **Select a variant:** → `JavaScript`

---

## ✅ Step 3: Move Into the Project and Install Dependencies

```bash
cd hello-world
npm install
```

---

## ✅ Step 4: Start the Development Server

```bash
npm run dev
```

The terminal will show a local server URL, such as:

```
Local: http://localhost:5173/
```

Open that in your browser to view the app.

---

## ✅ Step 5: Change the App to Say "Hello World"

1. Open the project in your code editor (e.g., **VS Code**).
2. Find and open the file:
   ```
   src/App.jsx
   ```
3. Replace the content inside the `return()` with:

```jsx
return (
  <div>
    <h1>Hello World</h1>
  </div>
);
```

---

## ✅ Step 6: Remove all the code from the src\app.css and src\index.css

- Remove all the exiting css code from both files.
- and update the app.css as following

```
h1{
  color: blue;
}
```

---

## ✅ Step 7: Save and View in Browser

- Save the file.
- Your browser will automatically refresh (thanks to Vite).
- You should now see:

```
Hello World
```

---

## 🧠 Bonus: Folder Structure Explained

- `src/` → Source code lives here.
- `App.jsx` → Main React component.
- `main.jsx` → Entry point of the app that renders `App.jsx`.

---

## 🎉 Done!

Congratulations! You've built your **first React app using Vite**. 🎊  
Next, you can start learning about components, props, and more!
