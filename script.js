
function showSection(id){
    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}
function openCertificate(image) {
    document.getElementById("modalCertificate").src = image;

    document
        .getElementById("certificateModal")
        .classList.add("active");
}

function closeCertificate(){
    document
        .getElementById('certificateModal')
        .classList.remove('active');
}