# sorry_my_friend
A little website to say sorry to a special friend ❤️🥹 A small apology, a genuine friendship, and a hope to bring back that beautiful smile. 🤝✨


A little website to say sorry to a special friend. A small apology, a genuine friendship, and a hope to bring back that beautiful smile. 🤝✨

## ✨ Features

- Animated character entrance
- Personal apology message
- Floating hearts and animations
- Responsive design for mobile and desktop
- Easy to share through WhatsApp using GitHub Pages

---

# 💻 1. Run on Windows using VS Code

### Prerequisites
- Windows 10/11
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Steps

1. **Download the project**
   - Download or clone this repository.
   - If downloaded as a ZIP, right-click it and select **Extract All**.

2. **Open the project in VS Code**
   - Open VS Code.
   - Select **File → Open Folder**.
   - Choose the extracted project folder.

3. **Check the project structure**

   ```text
   roshu-says-sorry/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       ├── avatar.png
       └── walking.mp4
   ```

   The exact asset filenames may differ. Keep the filenames and folder structure consistent with the references in your code.

4. **Install Live Server**
   - Click the Extensions icon in VS Code.
   - Search for `Live Server`.
   - Install the extension.

5. **Run the website**
   - Open `index.html`.
   - Right-click inside the file.
   - Select **Open with Live Server**.

6. Your browser will open the website, usually at:

   `http://127.0.0.1:5500`

---



# 🐉 2. Run on Kali Linux

### Prerequisites

- Kali Linux
- Python 3
- A web browser

### Steps

1. **Extract the project**

   Open Terminal and navigate to the folder where you downloaded the ZIP:

   ```bash
   cd ~/Downloads
   ```

   Extract it:

   ```bash
   unzip roshu-says-sorry.zip
   ```

   Replace the ZIP filename with the actual filename you downloaded.

2. **Enter the project folder**

   ```bash
   cd roshu-says-sorry
   ```

3. **Check the files**

   ```bash
   ls
   ```

   Make sure `index.html` is present.

4. **Check Python 3**

   ```bash
   python3 --version
   ```

5. **Start the local web server**

   ```bash
   python3 -m http.server 8000
   ```

6. **Open the website**

   Open your browser and visit:

   `http://127.0.0.1:8000`

7. **Stop the server**

   Return to Terminal and press `Ctrl + C`.

### Optional: Run using VS Code on Kali Linux

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.





# 🛠️ Troubleshooting

- **Website is blank:** Check that `index.html` exists in the root folder.
- **CSS is missing:** Check the stylesheet filename and its path in `index.html`.
- **Character or video is missing:** Check the asset filename, path, and capitalization.
- **Video does not play:** Use a browser-supported video format such as MP4 with H.264 encoding.
- **GitHub Pages shows 404:** Verify the Pages settings and ensure `index.html` is in the selected publishing folder.

---

Made with ❤️ for friendship, apologies, and second chances. 🥹🤝
