let btns = document.getElementById("btns");

btns.onclick = function () {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => {
            let x = '';
            data.results.forEach(user => {
                x += `
                <div class="col-lg-3">
                  <div class="card">
                      <img src="${user.picture.large}" class="card-img-top" alt="">
                      <div class="card-body">
                         <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                         p class="card-text">${user.email}</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                </div>
            `;
            });
            document.querySelector('#list').innerHTML = x;
        })
        .catch(err => console.log(err));
};
