const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

const resultsContainer = document.querySelector(".results");

async function getResults() {

    const response = await fetch(url);

    const results = await response.json();

    const breakingbad = results.data;

    for (let i = 0; i < breakingbad.length; i++) {
        console.log(breakingbad[i]);

        resultsContainer.innerHTML += `          
            <div class="card">
                <div class="character ${breakingbad[i].id}">
                    <h3 class="character__name">
                        ${breakingbad[i].name}
                    </h3>
                    <div class="character__birthday">
                    <span class="title"> Birthday: </span> ${breakingbad[i].birthday}
                    </div>
                    <p class="character__nickname">
                    <span class="title"> Nickname: </span> ${breakingbad[i].nickname}    
                    </p>
                    <span class="character__occupation">
                        <span class="title"> Occupation: </span> ${breakingbad[i].occupation}
                    </span>
                </div>
            </div>`;
    }

}

getResults();