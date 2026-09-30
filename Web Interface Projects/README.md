# ⚡ Web Interface Projects — Live Lab Portfolio & Showcase

> **Comprehensive Academic Web Engineering Portfolio**  
> Developed by **Mariyappan** • B.Tech CSE  
> Repository: [mariak146200/WEB_INTERFACE-_PROJECT](https://github.com/mariak146200/WEB_INTERFACE-_PROJECT)  
> 🌐 **Live Showcase Deployment:** [https://mariak146200.github.io/WEB_INTERFACE-_PROJECT/](https://mariak146200.github.io/WEB_INTERFACE-_PROJECT/)

---

## 🎯 Overview

This repository contains a full laboratory suite of **10 web applications** spanning **Units 1 to 5** of the Web Interface Engineering syllabus. It includes foundational DOM manipulations, modular component architectures, interactive state hooks, form validations, routing, and complete productivity apps.

All projects are integrated into a **Unified Showcase Hub** with real-time search, unit categorization, and interactive live previews.

---

## 🚀 Projects Directory

| Unit | Project | Tech Stack | Key Highlights | Live Path |
| :--- | :--- | :--- | :--- | :--- |
| **Unit 1** | **Project 1: Interactive Counter** | HTML5, CSS3, Vanilla JS | Stateful increment, decrement, reset with color feedback | `projects/unit-1-pro-1/` |
| **Unit 1** | **Project 2: Student Profile Card** | HTML5, CSS3, DOM API | Automated grading engine (A/B/C/F) & dynamic card display | `projects/unit-1-pro-2/` |
| **Unit 2** | **Project 1: Developer Portfolio (MARIYAPPAN)** | React 19, Vite, Modular CSS | Decomposed component hierarchy, skill badges, contact flow | `projects/unit-2-pro-1/` |
| **Unit 2** | **Project 2: Hobby Explorer & Gallery** | React 19, Vite, Grid UI | Dynamic media grid for Photography, Music, Travel, Cooking | `projects/unit-2-pro-2/` |
| **Unit 3** | **Project 1: Responsive Calculator** | React 19, `useState`, CSS | Arithmetic operation chaining, clear, decimal precision | `projects/unit-3-pro-1/` |
| **Unit 3** | **Project 2: Student Attendance Tracker**| React 19, State Arrays | 20-student roll call, real-time present/absent stats toggle | `projects/unit-3-pro-2/` |
| **Unit 4** | **Project 1: Form Validation & Auth** | React 19, React Router | Regex field validations, instant error dispatching & redirect | `projects/unit-4-pro-1/` |
| **Unit 4** | **Project 2: Personal Portfolio (Mariyappan)** | React 19, Vite, CSS Animations | Comprehensive personal brand, skill bars, project showcase | `projects/unit-4-pro-2/` |
| **Unit 5** | **Project 1: Student Academic Portal** | React 19, React Router, Data Engine | Multi-semester grade records, SGPA / CGPA computations | `projects/unit-5-pro-1/` |
| **Unit 5** | **Project 2: TaskFlow Productivity Suite** | React 19, LocalStorage, Analytics | Priority tagging, status filters, stats dashboard, toasts | `projects/unit-5-pro-2/` |

---

## 🛠️ Automated Deployment Setup (GitHub Pages)

The repository is equipped with an automated **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) that builds all 10 projects and publishes them to GitHub Pages whenever you push changes.

### Step 1: Enable GitHub Actions on GitHub Pages
1. Go to your repository on GitHub:  
   👉 [https://github.com/mariak146200/WEB_INTERFACE-_PROJECT/settings/pages](https://github.com/mariak146200/WEB_INTERFACE-_PROJECT/settings/pages)
2. Under **Build and deployment > Source**:
   - Change the dropdown from **"Deploy from a branch"** to **"GitHub Actions"**.
3. Save the setting.

### Step 2: Push Your Code
Commit and push the new files to `master`:
```bash
git add .
git commit -m "Add GitHub Pages showcase deployment pipeline"
git push origin master
```

### Step 3: View Your Live Website!
Once the GitHub Action completes (approx. 1 minute):
- Your live showcase portal is available at:  
  **`https://mariak146200.github.io/WEB_INTERFACE-_PROJECT/`**

---

## 🌐 Alternative: Deploying Individual Projects to Vercel / Netlify

If you want to deploy an individual project (e.g., your **Personal Portfolio** or **TaskFlow**) as an independent website:

### On Vercel:
1. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Select your repository: `mariak146200/WEB_INTERFACE-_PROJECT`.
3. In the setup screen, find **Root Directory** and click **Edit**.
4. Select the specific project directory, for example:
   ```text
   Web Interface Projects/unit - 4 - project - 2/unit-4_project-2
   ```
5. Framework preset will automatically detect **Vite**.
6. Click **Deploy**. Your project gets an instant `https://<project-name>.vercel.app` URL!

---

## 💻 Running & Building Locally

To build and preview all projects locally on your computer:

```bash
# 1. Run the unified showcase builder
node build-showcase.js

# 2. Preview the built showcase in your browser
npx serve dist
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in terminal) to interact with the full showcase portal.
