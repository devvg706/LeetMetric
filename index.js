document.addEventListener("DOMContentLoaded",function(){

    const searchbutton = document.getElementById("search-btn");
    const usernameinput = document.getElementById("user-input");
    const statscontainer = document.querySelector(".stats-container");
    const easyprogresscircle = document.querySelector(".easy-progress");
    const mediumprogresscircle = document.querySelector(".medium-progress");
    const hardprogresscircle = document.querySelector(".hard-progress");
    const easylabel = document.getElementById("easy-label");
    const mediumlabel = document.getElementById("medium-label");
    const hardlabel = document.getElementById("hard-label");
    const cardstatscontainer = document.querySelector(".stats-cards");

    function validateusername(username){
        if(username.trim() === ""){
            alert("username should not be empty");
            return false;
        }
        const regex =  /^[a-zA-Z0-9_]{3,20}$/;
        const ismatching = regex.test(username);
        if(!ismatching){
            alert("username should be between 3 to 20 characters and should not contain any special characters");
            
        }
        return ismatching;
    }
    async function fetchuserdatils(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        
        try{
            searchbuttondisabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            const parsedData = await response.json();
            console.log("logging data: ",parsedData);
            displayuserdata(parsedData);
        }
        catch(error){
            // console.error("Invalid API response", parsedData);
            statscontainer.innerHTML = "<h2>There was an error fetching the data</h2>";
            return;
        }
        finally{
            searchbuttondisabled = false;
        }
    }
    function updateProgress(solved, total, label, circle) {
        const percent = total > 0 ? (solved / total) * 100 : 0;
        circle.style.setProperty("--progress-degree", `${percent}%`); // Fixed variable name
        label.textContent = `${solved}/${total}`; // Update label
    }
    
    function displayuserdata(parsedData){
       
        const totalSolvedQues = parsedData.totalSolved;
        const acceptanceRate = parsedData.acceptanceRate;
        const totalSubmissions = parsedData.totalSubmissions;
        const totalEasyQues = parsedData.totalEasy;
        const totalMediumQues = parsedData.totalMedium;
        const totalHardQues = parsedData.totalHard;
        const ranking = parsedData.ranking;
    
        const solvedTotalEasyQues = parsedData.easySolved;
        const solvedTotalMediumQues = parsedData.mediumSolved;
        const solvedTotalHardQues = parsedData.hardSolved;
    
        // Update progress bars
        updateProgress(solvedTotalEasyQues, totalEasyQues, easylabel, easyprogresscircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumlabel, mediumprogresscircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardlabel, hardprogresscircle);
        

        // Update stats cards
        const cardsData = [
            { label: "Easy", solved: solvedTotalEasyQues, total: totalEasyQues },
            { label: "Medium", solved: solvedTotalMediumQues, total: totalMediumQues },
            { label: "Hard", solved: solvedTotalHardQues, total: totalHardQues },
            { label: "Total", solved: totalSolvedQues, total: totalSubmissions },
            { label: "Acceptance Rate", solved: acceptanceRate, total: "%" },
            { label: "Ranking", solved: ranking, total: "LeetCode" }
        ];
        console.log("logging cards data: ",cardsData);
        cardstatscontainer.innerHTML = cardsData.map((card) => {
            return `
                <div class="cards">
                    <h3>${card.label}</h3>
                    <p>${card.solved}/${card.total}</p>
                </div>
            `;
        }).join("");

    }
    searchbutton.addEventListener('click',function(){
        const username = usernameinput.value;
        console.log("logging username: ",username);
        if(validateusername(username)){
            fetchuserdatils(username);
        }
    })



})