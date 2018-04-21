
//init github
const github = new Github;

// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// search input event listner
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make Http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert

            }else{
               // show profile
               ui.showProfile(data.profile);
            }
        })

    }else{
        // clear profile

    }
});
