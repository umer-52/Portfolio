# 🚀 Deployment Guide

This guide explains how to deploy your Shopify Developer Portfolio to the web. We recommend **Vercel** for the best performance and ease of use.

## Option 1: Vercel for Git (Recommended) ⭐️

The easiest way to deploy is to connect your Git repository (GitHub, GitLab, or Bitbucket) to Vercel.

### Steps:
1.  **Push your code to GitHub** (or other provider):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    # Replace with your actual repo URL
    git remote add origin https://github.com/yourusername/shopify-portfolio.git
    git push -u origin main
    ```

2.  **Sign up/Login to Vercel**:
    *   Go to [vercel.com](https://vercel.com/signup)
    *   Continue with GitHub (or your Git provider).

3.  **Import Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   Find your repository in the list and click **"Import"**.

4.  **Configure & Deploy**:
    *   **Framework Preset**: Leave as "Other" (since this is a static site).
    *   **Root Directory**: Leave as `./`.
    *   Click **"Deploy"**.

5.  **Done!** 🎉
    *   Vercel will build your site and give you a live URL (e.g., `shopify-portfolio.vercel.app`).
    *   Every time you push changes to GitHub, Vercel will automatically redeploy your site!

---

## Option 2: Vercel CLI (Command Line)

If you don't want to use Git, you can deploy directly from your terminal.

### Steps:
1.  **Install Vercel CLI**:
    You need Node.js installed. Then run:
    ```bash
    npm i -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```
    Follow the prompts to log in via your browser.

3.  **Deploy**:
    Run this command in your project folder:
    ```bash
    vercel
    ```

4.  **Follow the Prompts**:
    *   Set up and deploy? **Y**
    *   Which scope? (Select your name)
    *   Link to existing project? **N**
    *   Project name? (Press Enter for default)
    *   In which directory? (Press Enter for `./`)

5.  **Production Deployment**:
    The command above creates a *preview* deployment. To deploy to production:
    ```bash
    vercel --prod
    ```

---

## Option 3: Drag & Drop (Netlify)

If Vercel isn't working for you, Netlify is a great alternative.

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Drag your entire project folder onto the page.
3.  Your site goes live instantly!

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you have:
1.  [ ] **Updated all links**: Check your social media and email links in `contact.html`.
2.  [ ] **Added your resume**: Ensure `resume/Umer-Khan-Resume.pdf` exists.
3.  [ ] **Checked images**: Make sure all project screenshots are accurate.
4.  [ ] **Tested Contact Form**: Remember, the static form doesn't send emails by default.
    *   **Fix**: Sign up for [Formspree](https://formspree.io/) and update the `<form action="...">` URL in `contact.html`.

## 🌐 Custom Domain (Optional)

Once deployed on Vercel:
1.  Go to your Project Dashboard.
2.  Click **Settings** -> **Domains**.
3.  Enter your custom domain (e.g., `umerkhan.com`).
4.  Follow the instructions to update your DNS records.
