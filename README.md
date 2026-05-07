# 🚀 TypeScript Mastery — Apollo Level 2 Web Dev

> **Mission 1: Be a TypeScript Technocrat**
> A complete learning journey through TypeScript — from zero to OOP mastery.

---

## 🗺️ Mission Roadmap

```
Module 1 → Module 2 → Module 3 → Assignment
  Basic      Advanced     OOP        Problem
  Types       Types     Concepts    Solving
```

---

## 📚 Modules

### 🟡 Module 1 — Basic Types of TypeScript

The foundation. Everything you need to write real TypeScript from day one.

| Topic | Description |
|-------|-------------|
| TypeScript Setup | Installing & configuring TypeScript with `tsconfig.json` |
| Basic Data Types | `string`, `number`, `boolean`, `null`, `undefined`, `any`, `unknown` |
| Arrays & Tuples | Typed arrays, tuple types |
| Objects | Typed object structures |
| Functions | Parameter types, return types, arrow functions |
| Optional Types | `?` operator for optional properties and parameters |
| Literal Types | Narrowing values to specific literals |
| Spread Operator | `...` in arrays and objects |
| Rest Operator | `...rest` in function parameters |
| Destructuring | Array and object destructuring with types |
| Type Alias | Creating custom types with `type` keyword |
| Union Types | `type A = string \| number` |
| Intersection Types | `type C = A & B` |

---

### 🟠 Module 2 — Advanced Types of TypeScript

Level up. Covers the TypeScript features that separate beginners from pros.

| Topic | Description |
|-------|-------------|
| Interfaces | Defining contracts for objects and classes |
| Type vs Interface | When to use each and key differences |
| Type Assertion | `as` keyword and `<Type>` casting |
| Type Guards | `typeof`, `instanceof`, `in` narrowing |
| Generics | Reusable typed components `<T>` |
| Constants (`as const`) | Immutable, narrowed literal types |
| Async TypeScript | `Promise<T>`, `async/await` with types |
| Conditional Types | `T extends U ? X : Y` |
| Mapped Types | Transform existing types dynamically |
| Utility Types | `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, `Record` and more |

---

### 🔵 Module 3 — Object Oriented TypeScript

OOP in TypeScript — the complete picture.

| Topic | Description |
|-------|-------------|
| Objects | Typed object creation and usage |
| Classes | Defining classes with typed properties and methods |
| Access Modifiers | `public`, `private`, `protected`, `readonly` |
| Getters & Setters | Controlled property access with `get`/`set` |
| Static Members | `static` properties and methods |
| Inheritance | `extends` keyword, parent/child class hierarchy |
| Polymorphism | Method overriding and dynamic dispatch |
| Abstraction | `abstract` classes and methods |
| Encapsulation | Hiding implementation with access modifiers |

---

## 📝 Assignment (B7A1)

**Assignment Repo → [L2Assignment-01-TypeScript-assignment](https://github.com/parety308/L2Assignment-01-TypeScript-assignment)**

### 💻 Problems (50 Marks)

All solutions are in `solutions.ts`.

| # | Function | Description |
|---|----------|-------------|
| 1 | `filterEvenNumbers()` | Filter even numbers from an array |
| 2 | `reverseString()` | Reverse a given string |
| 3 | `checkType()` | Union type + type guard to detect `string` or `number` |
| 4 | `getProperty()` | Generic function to get a typed property from an object |
| 5 | `toggleReadStatus()` | Add `isRead` boolean property to a `Book` object |
| 6 | `Student` class | OOP — `Person` → `Student` with `getDetails()` method |
| 7 | `getIntersection()` | Return common elements between two number arrays |

### ✍️ Blogs (10 Marks — any 2 of 4 topics)

| File | Topic Options |
|------|--------------|
| `blog-1.md` | `any` vs `unknown` — Type safety and type narrowing |
| `blog-2.md` | `Pick` & `Omit` — DRY code with utility types / Generics for reusable components / Four pillars of OOP |

---

## 📁 Repository Structure

```
TypeScript-Mastery--mission/
│
├── module-1/                  # Basic Types
│   └── *.ts
│
├── module-2/                  # Advanced Types
│   └── *.ts
│
├── module-3/                  # Object Oriented TypeScript
│   └── *.ts
│
├── assignment/                # B7A1 Assignment
│   ├── solutions.ts
│   ├── blog-1.md
│   ├── blog-2.md
│   └── README.md
│
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- TypeScript installed globally

```bash
npm install -g typescript
```

### Clone & Run

```bash
# Clone the repository
git clone https://github.com/parety308/TypeScript-Mastery--mission.git

# Navigate into the project
cd TypeScript-Mastery--mission

# Compile a TypeScript file
tsc filename.ts

# Run the compiled output
node filename.js
```

### With ts-node (run without compiling)

```bash
npm install -g ts-node
ts-node filename.ts
```

---

## ⚙️ tsconfig.json (Recommended)

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 🔗 Links

| Resource | Link |
|----------|------|
| 📦 Assignment Repo | [L2Assignment-01-TypeScript-assignment](https://github.com/parety308/L2Assignment-01-TypeScript-assignment) |
| 📖 TypeScript Docs | [typescriptlang.org](https://www.typescriptlang.org/docs/) |
| 🎓 Apollo Level 2 | Apollo Web Dev Program |

---

## 📅 Assignment Deadlines

| Marks | Deadline |
|-------|----------|
| 60 marks | May 07, 2026 — 11:59 PM |
| 50 marks | May 08, 2026 — 11:59 PM |
| 30 marks | After May 08, 2026 — 11:59 PM |

---

## 👨‍💻 Author

Built with 💛 as part of the **Apollo Level 2 Web Development** program.

> *"The code and content in this repository is original work."*
