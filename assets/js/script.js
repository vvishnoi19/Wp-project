fetch('../sidebar.html')
.then(res=>res.text())
.then(data=>{document.getElementById('sidebar-container').innerHTML=data;

})
.catch(err=>{

    document.getElementById('sidebar-container').innerHTML=`<p>Error loading content</p>`
})



fetch('./header.html')
.then(res=>res.text())
.then(data=>{document.getElementById('header').innerHTML=data;

})
.catch(err=>{

    document.getElementById('header').innerHTML=`<p>Error loading content</p>`
})
     fetch('./pagination.html')
.then(res=>res.text())
.then(data=>{document.getElementById('pagination').innerHTML=data;

})
.catch(err=>{

    document.getElementById('pagination').innerHTML=`<p>Error loading content</p>`
})



document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".Nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
           
            navItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


