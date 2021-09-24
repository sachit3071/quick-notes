console.log("hello")
showNotes();

let create_note = document.getElementById('create-note');
create_note.addEventListener('click', function (e) {
    let title = document.getElementById('input-title');
    let content = document.getElementById('input-content');
    let  notesTitle = localStorage.getItem('title');
    let notesContent = localStorage.getItem('content');
    let star = localStorage.getItem('star');
    if (notesContent == null) {
        titleObj = [];
        contentObj = [];
        starObj = [];
    }
    else {
        titleObj = JSON.parse(notesTitle);
        contentObj = JSON.parse(notesContent);
        starObj = JSON.parse(star);
    }
    titleObj.push(title.value);
    contentObj.push(content.value);
    starObj.push(0);
    localStorage.setItem("title", JSON.stringify(titleObj));
    localStorage.setItem("content", JSON.stringify(contentObj));
    localStorage.setItem("star", JSON.stringify(starObj));

    title.value = "";
    content.value = "";
    // console.log(titleObj, contentObj);
    showNotes();
});

let clr = document.getElementById("clear");
clr.addEventListener('click', function () {
    let title = document.getElementById('input-title');
    let content = document.getElementById('input-content');
    title.value = "";
    content.value = "";
})

function showNotes() {
    let  notesTitle = localStorage.getItem('title');
    let notesContent = localStorage.getItem('content');
    let star = localStorage.getItem('star');
    if (notesContent == null && notesTitle == null) {
        titleObj = [];
        contentObj = [];
        starObj = [];
    }
    else {
        titleObj = JSON.parse(notesTitle);
        contentObj = JSON.parse(notesContent);
        starObj = JSON.parse(star);
    }
    let = html = "";
    contentObj.forEach(function (element, index) {
        if (starObj[index] == '0') {
            html +=`<div class="noteCard col">
                        <div class="card border-primary  mb-1" style="font-size:15px;">
                            <div class="card-header text-light bg-primary" style="height:35px">Note ${index + 1}
                                <svg xmlns="http://www.w3.org/2000/svg" id="s${index}" class="mb-1" onclick="toggleStar(${index})" width="16" height="16" fill="currentcolor" class="bi bi-star " viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </div>
                            <div class="card-body text-primary">
                                <p class="fw-bold" style="font-size:15px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; width:25vw; height:20px;">${titleObj[index]}</p>
                                <p class="card-text lh-sm overflow-auto" style="height:100px; font-size:1vw">${element}</p>
                            </div>
                            <div class="card-footer bg-transparent text-end border-dark">
                                <button onclick="deleteNote(${index})" type="button" class="btn btn-outline-danger start-0 btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </button>
                            </div>
                        </div>
                    </div>`
        }
        else {
            html += `<div class="noteCard col">
                        <div class="card border-primary mb-1" style="font-size:15px;">
                            <div class="card-header text-light bg-primary" style="height:35px">Note ${index + 1}
                                <svg xmlns="http://www.w3.org/2000/svg" id="s${index}" class="mb-1" onclick="toggleStar(${index})" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </div>
                            <div class="card-body text-primary">
                                <p class="fw-bold" style="font-size:15px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;width:auto; height:20px;">${titleObj[index]}</p>
                                <p class="card-text lh-sm overflow-auto" style="height:100px; font-size:1vw">${element}</p>
                            </div>
                            <div class="card-footer bg-transparent text-end border-dark">
                                <button onclick="deleteNote(${index})" type="button" class="btn btn-outline-danger btn-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </button>
                            </div>
                        </div>
                    </div>`
        }
    });
    let notesElm = document.getElementById('notes');
    if (notesContent != null) {
        if (notesContent.length != 0) {
            notesElm.innerHTML = html;
        }
        else {
            notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
        }
    }
    localStorage.setItem("title", JSON.stringify(titleObj));
    localStorage.setItem("content", JSON.stringify(contentObj));
    localStorage.setItem("star", JSON.stringify(starObj));
}
function deleteNote(index) {
    let  notesTitle = localStorage.getItem('title');
    let notesContent = localStorage.getItem('content');
    let star = localStorage.getItem('star');
    if (notesContent == null) {
        titleObj = [];
        contentObj = [];
        starObj = [];
    }
    else {
        titleObj = JSON.parse(notesTitle);
        contentObj = JSON.parse(notesContent);
        starObj = JSON.parse(star);
    }
    titleObj.splice(index,1);
    contentObj.splice(index, 1);
    starObj.splice(index, 1);
    localStorage.setItem("title", JSON.stringify(titleObj));
    localStorage.setItem("content", JSON.stringify(contentObj));
    localStorage.setItem("star", JSON.stringify(starObj));
    showNotes();
};
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
});
function toggleStar(index) {
    let star = localStorage.getItem('star');
    if (star == null) {
        // titleObj = [];
        starObj = [];
    }
    else {
        // titleObj = JSON.parse(notesTitle);
        starObj = JSON.parse(star);
    }
    console.log(starObj);
    if (starObj[index] == 1) {
        starObj.splice(index, 1, '0');
        let str = document.getElementById('s' + index);
        let strFill = "";
        strFill += `<svg xmlns="http://www.w3.org/2000/svg" id="s${index}" onclick="toggleStar(${index})" width="16" height="16" fill="currentcolor" class="bi bi-star " viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>`;
        str.innerHTML = strFill;
    }
    else {
        starObj.splice(index, 1, '1');
        let str = document.getElementById('s' + index);
        let strFill = "";
        strFill += `<svg xmlns="http://www.w3.org/2000/svg" id="s${index}" onclick="toggleStar(${index})" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>`;
        str.innerHTML = strFill;
    }
    localStorage.setItem("star", JSON.stringify(starObj));
    console.log(index, starObj[index]);
}

let showAll = document.getElementById('showAll')
showAll.addEventListener('click', function()
{
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) 
    {
        element.style.display = 'block';
    });
});

let starred = document.getElementById('starred');
starred.addEventListener('click', function() 
{
    let star = localStorage.getItem('star');
    if (star == null) 
    {
        starObj = [];
    }
    else 
    {
        starObj = JSON.parse(star);
    }
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element, index) 
    {
        if (starObj[index] == '1') {
            element.style.display = 'block';
        }
        else {
            console.log('starred trigerred')
            element.style.display = 'none';
        }
    });
    localStorage.setItem("star", JSON.stringify(starObj));
    // showNotes();
});