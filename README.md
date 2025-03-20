# 🚀 LeetCode User Stats Tracker

## 📌 Overview
This project is a simple web-based **LeetCode User Statistics Tracker**. It fetches a user's problem-solving statistics from the **LeetCode API** and displays them in a user-friendly manner with progress bars and statistics cards.

## 🌟 Features
✔️ **Validate** LeetCode username input  
✔️ **Fetch** user statistics from the LeetCode API  
✔️ **Display** total problems solved, acceptance rate, and ranking  
✔️ **Show** categorized progress for Easy, Medium, and Hard problems using progress bars  
✔️ **Responsive** statistics cards for better user experience  

## 🛠️ Technologies Used
🔹 **HTML**  
🔹 **CSS**  
🔹 **JavaScript (Vanilla JS)**  
🔹 **Fetch API**  

## 🚀 Setup and Usage
1️⃣ **Clone** the repository or download the source code.  
2️⃣ **Open** `index.html` in a browser.  
3️⃣ **Enter** a valid LeetCode username and click the search button.  
4️⃣ **View** the user's statistics and progress.  

## 📂 File Structure
```
|-- index.html
|-- styles.css
|-- script.js
```
📜 **index.html** - Contains the basic structure of the web page.  
🎨 **styles.css** - Includes styling for the progress bars and stat cards.  
🖥️ **script.js** - Handles the logic for fetching and displaying user statistics.  

## 🌐 API Used
This project utilizes the following API endpoint:
```
https://leetcode-stats-api.herokuapp.com/{username}
```

## 🔧 Functions Breakdown
### 🔹 `validateusername(username)`
✔️ Ensures the username is **between 3 to 20 characters**.  
✔️ Allows **only alphanumeric characters and underscores**.  
✔️ Alerts the user if the input is **invalid**.  

### 🔹 `fetchuserdatils(username)`
✔️ **Fetches** user data from the LeetCode API.  
✔️ **Updates** the UI with fetched statistics.  
✔️ **Handles** API errors gracefully.  

### 🔹 `updateProgress(solved, total, label, circle)`
✔️ **Calculates** the progress percentage.  
✔️ **Updates** the circular progress bar.  

### 🔹 `displayuserdata(parsedData)`
✔️ **Parses and updates** the UI with the fetched user data.  
✔️ **Updates** progress bars and statistics cards dynamically.  

## ⚠️ Known Issues
🚨 The API **may sometimes be down** or unavailable.  
🎨 Styling **improvements can be made** for better user experience.  

## 🔮 Future Enhancements
✨ **Improve** UI with animations and better visuals.  
🔄 **Add caching** for previously searched usernames.  
📊 **Include graphs** for more insightful data visualization.  

## 📜 License
This project is **open-source** and available for modification and distribution.  

---

🎯 **Happy coding!** 🚀

