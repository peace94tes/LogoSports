
        // Daftar file M3U8 berdasarkan key https://ratix94.blogspot.com/p/streamnotfound.html
        const videoSources = {
<!-- Awal Data -->
'S1': 'https://yhjkrf.site/chunklist/hlsch1.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01',
'S2': 'https://yhjkrf.site/chunklist/hlsch2.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01',
'S3': 'https://yhjkrf.site/chunklist/hlsch3.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01',
'S4': 'https://yhjkrf.site/chunklist/hlsch4.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // cytavision Sports 4
'S5': 'https://yhjkrf.site/chunklist/hlsch5.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Sky Calcio
'S6': 'https://yhjkrf.site/chunklist/hlsch6.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Supersport EFL
'S7': 'https://yhjkrf.site/chunklist/hlsch7.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // cytavision Sports 3 (e)
'S8': 'https://yhjkrf.site/chunklist/hlsch8.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // TNT Cinema
'S9': 'https://yhjkrf.site/chunklist/hlsch9.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Sport TV 3 PT
'S10': 'https://yhjkrf.site/chunklist/hlsch10.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Nascar
'S11': 'https://yhjkrf.site/chunklist/hlsch11.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // ?
'S12': 'https://yhjkrf.site/chunklist/hlsch12.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // TSN 5 Usa
'S13': 'https://yhjkrf.site/chunklist/hlsch13.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // V Sport Vinter ? (Swedia, Finlandia, Norwegia)
'S14': 'https://yhjkrf.site/chunklist/hlsch14.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // ESPN 2 NL
'S15': 'https://yhjkrf.site/chunklist/hlsch15.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // ?
'S16': 'https://yhjkrf.site/chunklist/hlsch16.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Sport TV 4 PT
'S17': 'https://yhjkrf.site/chunklist/hlsch17.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Live Streaming
'S18': 'https://yhjkrf.site/chunklist/hlsch18.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // SN
'S19': 'https://yhjkrf.site/chunklist/hlsch19.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // ?
'S20': 'https://yhjkrf.site/chunklist/hlsch20.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // a Sport TR
'S21': 'https://yhjkrf.site/chunklist/hlsch21.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // SccEx 2 Saudi
'S22': 'https://yhjkrf.site/chunklist/hlsch22.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // SccEx 1 Saudi
'S23': 'https://yhjkrf.site/chunklist/hlsch23.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // FS1 Usa
'S24': 'https://yhjkrf.site/chunklist/hlsch24.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Erorr
'S25': 'https://yhjkrf.site/chunklist/hlsch25.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // FS2 Usa
'S26': 'https://yhjkrf.site/chunklist/hlsch26.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // ?
'S27': 'https://yhjkrf.site/chunklist/hlsch27.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Erorr
'S28': 'https://yhjkrf.site/chunklist/hlsch28.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Erorr
'S29': 'https://yhjkrf.site/chunklist/hlsch29.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Erorr
'S30': 'https://yhjkrf.site/chunklist/hlsch30.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01', // Erorr
<!-- Akhir Data -->
        };

        // Fungsi untuk mendapatkan parameter dari URL
        function getQueryParameter(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Ambil key dari URL
        const videoKey = getQueryParameter('key');

        // Tentukan file M3U8 berdasarkan key, gunakan sumber default jika key tidak ditemukan
        const videoFile = videoSources[videoKey] || Object.values(videoSources)[0]; // Gunakan file pertama sebagai default

        // Konfigurasi Clappr Player
        var playerElement = document.getElementById("player");
        var player = new Clappr.Player({
            source: videoFile,
            height: '100%',
            width: '100%',
            loop: false,
            poster: 'https://cdn.jsdelivr.net/gh/peace94tes/LogoSports@refs/heads/main/20250121_011123.png',
            watermark: 'https://cdn.jsdelivr.net/gh/peace94tes/peacetv@main/Peace_Logo_1.png',
                position: 'top-right',
                      //  watermarkLink: '#',
            plugins: [LevelSelector],
            mediacontrol: {
                seekbar: 'rgb(32,178,170)',
                buttons: '#FFF'
              },
            playback: {
                hlsjsConfig: {
                    startPosition: -1, // Selalu mulai dari posisi live terkini
                }
            },
            mimeType: "application/x-mpegURL"
        });
        player.attachTo(playerElement);

        // Fungsi untuk mengubah orientasi ke landscape saat fullscreen
        player.on(Clappr.Events.PLAYER_FULLSCREEN, function() {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch(function(error) {
                    console.error('Orientation lock failed:', error);
                });
            }
        });

        // Kembalikan orientasi saat keluar dari fullscreen
        player.on(Clappr.Events.PLAYER_EXIT_FULLSCREEN, function() {
            if (screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
            }
        });

        // Event handling untuk error
        player.on(Clappr.Events.PLAYER_ERROR, function() {
            console.error('Error occurred while playing the video. Retrying...');
            setTimeout(function() {
                player.load({ source: videoFile });
                player.play();
            }, 5000); // Coba lagi setelah 5 detik
        });
