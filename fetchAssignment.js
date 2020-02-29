let form = document.querySelector('form');
let msg = document.querySelector('.msg');
form.addEventListener('submit', getuser, false);
let githubUsers = [];
form.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.querySelector('input').value;
    // console.log(input);
    if (name == '') {
        msg.innerHTML = "Please input your Username"
        return;
    } else {
        msg.innerHTML = "";

        let user = {
            id: Date.now(),
            name,
        };
        form.reset();
        getuser();
    }
});

function getuser(name) {
return fetch(`https://api.github.com/users/${name}`)
    .then(res => {
        if (res.status != 200) {
          return null;
            }else {
            let data = res.json()
            githubUsers.push(data)
            console.log(githubUsers);
        };
    })
};
