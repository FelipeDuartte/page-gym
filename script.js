function mostrarVideos(categoria) { document.querySelectorAll('.section').forEach(section => { section.style.display = section.getAttribute('data-category') === categoria ? 'block' : 'none'; }); 
}