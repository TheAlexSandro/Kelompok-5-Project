var data = [
    [1, 'Iris', 'https://drive.google.com/file/d/1s36xxxgFPuoXvJZPxOyNHMA-Aq0DOKSy/preview'],
    [2, 'Alpha', 'https://drive.google.com/file/d/1hTN9HZrMrFNlqwdkCAqHJOfH-6M498Ln/preview'],
    [3, 'Equal', 'https://drive.google.com/file/d/19peVRGta9Y9DSEiiCxChmVDpO0qOPK4S/preview'],
    [4, 'Comot', 'https://drive.google.com/file/d/1sjNymDINEZLe5U5dWoTq-j67bVnfX88s/preview'],
    [5, 'Blueprint', 'https://drive.google.com/file/d/1gGdLB66fzY_LXge6AKwWzI4kak5fDYGI/preview'],
    [6, 'Ascension', 'https://drive.google.com/file/d/1wLiIIw_eQdmP56PSEhyjqqwQEci0BXYC/preview'],
    [7, 'Protokol Gegas', 'https://drive.google.com/file/d/1iQbZOGTj7z-_gBoGlzXO_TxqdAIt2gZ_/preview'],
    [8, 'Performa', 'https://drive.google.com/file/d/1qiqKXwEGvTBvjG64smsBDgSCizzgFc6h/preview'],
    [9, 'Potensi', 'https://drive.google.com/file/d/1tEEW5y9OY8XEiBH0HkgF1I_kpQkUaQt8/preview'],
    [10, 'Sensasi', 'https://drive.google.com/file/d/1C5oFAQwmY6zOEdM8doW2t72MeJHpLJm0/preview'],
    [11, 'Bukti', 'https://drive.google.com/file/d/1euNArxC5UHsQ7mTAREuhEKEPHs3XZHcG/preview'],
    [12, 'Uno', 'https://drive.google.com/file/d/1qdnd_Swph5YvvT8xzDWZIyBv9Ot9Dk-9/preview'],
    [13, 'Override', 'https://drive.google.com/file/d/1iEAe8BXO4WXm1KczjgXOetpO_j0256aR/preview']
]
var backPage = 'serial.html'

document.addEventListener('DOMContentLoaded', () => {
    var getUrl = window.location.href
    var currentUrl = new URL(getUrl);
    var params = new URLSearchParams(currentUrl.search);
    var getEpisode = params.get('episode')

    if (String(getUrl).includes('tonton.html')) {
        var cont = document.getElementById('container')

        if (!getEpisode) {
            document.title = `Bad Request`
            var title = document.getElementById('load')
            title.innerHTML = `400 - Bad Request`

            var desc = document.createElement('p')
            desc.textContent = `Tidak ada parameter yang dibutuhkan.`

            var button = document.createElement("div");
            button.className = "button";
            button.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Kembali';
            button.style.marginBottom = `${window.innerHeight - 100}px`
            button.addEventListener("click", function () {
                window.location.href = backPage
            });

            cont.appendChild(desc)
            cont.appendChild(button)
        } else {
            var eps = getEpisode - 1

            try {
                document.title = `Eps ${getEpisode} - ${data[eps][1]}`
                var link = data[eps][2]

                var title = document.getElementById('load')
                title.innerHTML = `Ejen Ali Musim 1`

                var desc = document.createElement('p')
                desc.textContent = `Episode ${getEpisode} - ${data[eps][1]}`

                var hr = document.createElement('hr')

                var iframe = document.createElement('iframe')
                iframe.src = link;
                iframe.className = "video-preview";
                iframe.allow = "autoplay";
                iframe.allowFullscreen = true

                var button = document.createElement("div");
                button.className = "button";
                button.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Kembali';
                button.addEventListener("click", function () {
                    window.location.href = backPage
                });

                cont.appendChild(desc)
                cont.appendChild(hr)
                cont.appendChild(iframe)
                cont.appendChild(button)
            } catch {
                document.title = `Not Found`
                var title = document.getElementById('load')
                title.innerHTML = `404 - Not Found`

                var desc = document.createElement('p')
                desc.textContent = `Tidak ada video yang ditemukan, coba periksa parameter episode.`

                var button = document.createElement("div");
                button.className = "button";
                button.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Kembali';
                button.style.marginBottom = `${window.innerHeight - 100}px`
                button.addEventListener("click", function () {
                    window.location.href = backPage
                });

                cont.appendChild(desc)
                cont.appendChild(button)
            }
        }
    } else {
        var container = document.getElementById("video-container");

        data.forEach(function (item) {
            var card = document.createElement("div");
            card.className = "video-card";

            var iframe = document.createElement("iframe");
            iframe.src = item[2];
            iframe.className = "video-preview";
            iframe.allow = "autoplay";

            var videoInfo = document.createElement("div");
            videoInfo.className = "video-info";

            var episodeTitle = document.createElement("h3");
            episodeTitle.textContent = `Episode Ke ${item[0]}`;

            var strong = document.createElement("strong");
            strong.textContent = item[1];

            var desc = document.createElement('p')
            desc.textContent = `Tekan tombol di bawah untuk menonton.`

            var button = document.createElement("div");
            button.className = "button";
            button.innerHTML = 'Tonton Video <i class="fa-solid fa-arrow-right"></i>';
            button.addEventListener("click", function () {
                window.location.href = `/tonton.html?episode=${item[0]}`
            });

            videoInfo.appendChild(episodeTitle);
            videoInfo.appendChild(strong);
            videoInfo.appendChild(desc)
            videoInfo.appendChild(button);

            card.appendChild(iframe);
            card.appendChild(videoInfo);

            container.appendChild(card);
        });
    }
})