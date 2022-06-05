
class resume {
    constructor(uid, title, startdate, enddate, description) {
        this.uid = uid;
        this.title = title;
        this.startdate = startdate;
        this.enddate = enddate;
        this.description = description;
        this.lines = this.description.toString().split("|");
    }
}

const table = document.getElementById("WorkExperience");
let body = table.getElementsByTagName('tbody')[0];
fetch("https://main-api.azurewebsites.net/api/bu/getresume")
    .then(res => res.json())
    .then(jsonData => {
        for (let i = 0; i < jsonData.length; i++) {
            let rowData = new resume(jsonData[i].Uid, jsonData[i].Title, jsonData[i].StartDate, jsonData[i].EndDate, jsonData[i].Description)
            let firstRow = body.insertRow();
            let startCell;
            let endCell;
            let titleCell;                    
            let text;
            //---------------add the start date
            startCell = firstRow.insertCell();
            text = document.createTextNode(rowData.startdate);
            startCell.appendChild(text);

            //---------------add the end date
            endCell = firstRow.insertCell();
            text = document.createTextNode(rowData.enddate);
            endCell.appendChild(text);

            //---------------add the title
            titleCell = firstRow.insertCell();
            text = document.createTextNode(rowData.title);
            titleCell.appendChild(text);

            //--------add second row
            let secondRow = body.insertRow();
            let descriptionCell;   

            //---------------add the second row and the description
            descriptionCell = secondRow.insertCell();
            descriptionCell.colSpan = "3";
            let ul = document.createElement("ul");
            descriptionCell.appendChild(ul);   
            
            for (let i = 0; i < rowData.lines.length; i++) {                
                let line = document.createElement("li");
                text = document.createTextNode(rowData.lines[i]);
                line.appendChild(text);
                ul.appendChild(line);
            }            
        }
    }
)
const printResumeBtn = document.getElementById("resumePrint");
const printResume = () => {
    window.open('assets/docs/resume.pdf', '_blank');
}

printResumeBtn.addEventListener("click", printResume, false);


const getLangText = (event) => {
    let id = event.target.id;    
    const params = {
        Id: id,
        Description: ""
    };
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(params)
    };
    fetch('https://main-api.azurewebsites.net/api/bu/GetLanguage', options)       
        .then(response => response.json())
            .then(response => {
                let descDiv = document.getElementById("languageDiv");                
                let descHeader = document.getElementById("languageHeader");
                descHeader.innerHTML = id.toString().toUpperCase();
                let desc = document.querySelector("#languageDescription");                
                desc.innerHTML = JSON.parse(response);   
                descDiv.style.display = "block";
        });


}
const langSlider = document.getElementById("langSlider");
langSlider.addEventListener('click', getLangText, false);