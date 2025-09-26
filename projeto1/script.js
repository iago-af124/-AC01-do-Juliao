i = 0;
function basic() {
    name = document.getElementById("name").innerText;
    job = document.getElementById("job").innerText;
    introdution = document.getElementById("introdution").innerText;

    name = document.getElementById("name").innerText = "Name";
    job = document.getElementById("job").innerText = "Profissão: Lorem ipsum";
    introdution = document.getElementById("introdution").innerText = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    i++;
    if (i == 2) {
        document.getElementById("name").innerText = "Roger";
        document.getElementById("job").innerText = "Profissão: Filósofo, Pedagogo e Psicólogo";
        document.getElementById("introdution").innerText = "Roger é reconhecido por sua abordagem inovadora e revolucionária em suas áreas de atuação. Ele transforma conceitos tradicionais com ideias originais, promovendo mudanças positivas e impactantes na educação, filosofia e psicologia. Sua dedicação e visão inspiram colegas e alunos a buscar novas perspectivas e soluções criativas.";
        i = 0;
    }
}


