fetch('./sidebar.html')
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





  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('close-icon');

  // Open Modal (e.g. on button click)
  function openModal() {
    overlay.style.display = 'flex';
  }

  // Close Modal
  function closeModal() {
    overlay.style.display = 'none';
  }

  // Attach event to close icon
  closeBtn.addEventListener('click', closeModal);

  // Optional: Close modal if clicking outside the modal box
  window.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closeModal();
    }
  });



   document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".Nav-item");
console.log("hii this is my nav")
    navItems.forEach(item => {
        item.addEventListener("click", () => {
           
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
});

