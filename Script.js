document.addEventListener("DOMContentLoaded", function() {
    // Dados de exemplo
    const biografia = "Max Emilian Verstappen é um piloto de Fórmula 1 holandês, que atualmente compete pela Red Bull Racing. Ele nasceu em 30 de setembro de 1997, em Hasselt, Bélgica. Max é filho do ex-piloto de Fórmula 1 Jos Verstappen e da ex-kartista belga Sophie Kumpen.";
    const carreira = "Max Verstappen começou sua carreira na Fórmula 1 em 2015 pela Scuderia Toro Rosso. Em 2016, foi promovido para a equipe principal da Red Bull Racing e venceu seu primeiro Grande Prêmio na Espanha, tornando-se o piloto mais jovem a vencer uma corrida de F1.";
    const conquistas = [
        "Piloto mais jovem a vencer uma corrida de F1",
        "Campeão Mundial de F1 2021",
        "Campeão Mundial de F1 2022"
    ];
    const estatisticas = [
        { temporada: 2015, corridas: 19, podios: 0, vitorias: 0, pontos: 49 },
        { temporada: 2016, corridas: 21, podios: 7, vitorias: 1, pontos: 204 },
        { temporada: 2017, corridas: 20, podios: 4, vitorias: 2, pontos: 168 },
        { temporada: 2018, corridas: 21, podios: 11, vitorias: 2, pontos: 249 },
        { temporada: 2019, corridas: 21, podios: 9, vitorias: 3, pontos: 278 },
        { temporada: 2020, corridas: 17, podios: 11, vitorias: 2, pontos: 214 },
        { temporada: 2021, corridas: 22, podios: 18, vitorias: 10, pontos: 395.5 },
        { temporada: 2022, corridas: 22, podios: 17, vitorias: 15, pontos: 454 }
    ];

    // Atualizar biografia
    document.getElementById("bio-content").innerText = biografia;

    // Atualizar carreira
    document.getElementById("carreira-content").innerText = carreira;

    // Atualizar conquistas
    const conquistasList = document.getElementById("conquistas-list");
    conquistasList.innerHTML = "";
    conquistas.forEach(conquista => {
        const li = document.createElement("li");
        li.innerText = conquista;
        conquistasList.appendChild(li);
    });

    // Atualizar estatísticas
    const estatisticasContent = document.getElementById("estatisticas-content");
    estatisticasContent.innerHTML = "";
    estatisticas.forEach(temporada => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${temporada.temporada}</td>
            <td>${temporada.corridas}</td>
            <td>${temporada.podios}</td>
            <td>${temporada.vitorias}</td>
            <td>${temporada.pontos}</td>
        `;
        estatisticasContent.appendChild(tr);
    });
});
