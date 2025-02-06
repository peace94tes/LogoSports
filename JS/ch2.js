
        function getParameterByName(name) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var ConfiguracionCanales = {
"S1": { url: "https://yhjkrf.site/chunklist/hlsch1.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", },
"S2": { url: "https://yhjkrf.site/chunklist/hlsch2.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", },
"S3": { url: "https://yhjkrf.site/chunklist/hlsch3.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", },
"S4": { url: "https://yhjkrf.site/chunklist/hlsch4.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // cytavision Sports 4
"S5": { url: "https://yhjkrf.site/chunklist/hlsch5.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Sky Calcio
"S6": { url: "https://yhjkrf.site/chunklist/hlsch6.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Supersport EFL
"S7": { url: "https://yhjkrf.site/chunklist/hlsch7.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // cytavision Sports 3 (e)
"S8": { url: "https://yhjkrf.site/chunklist/hlsch8.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // TNT Cinema
"S9": { url: "https://yhjkrf.site/chunklist/hlsch9.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Sport TV 3 PT
"S10": { url: "https://yhjkrf.site/chunklist/hlsch10.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Nascar
"S11": { url: "https://yhjkrf.site/chunklist/hlsch11.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // ?
"S12": { url: "https://yhjkrf.site/chunklist/hlsch12.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // TSN 5 Usa
"S13": { url: "https://yhjkrf.site/chunklist/hlsch13.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // V Sport Vinter ? (Swedia, Finlandia, Norwegia)
"S14": { url: "https://yhjkrf.site/chunklist/hlsch14.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // ESPN 2 NL
"S15": { url: "https://yhjkrf.site/chunklist/hlsch15.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // ?
"S16": { url: "https://yhjkrf.site/chunklist/hlsch16.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Sport TV 4 PT
"S17": { url: "https://yhjkrf.site/chunklist/hlsch17.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Live Streaming
"S18": { url: "https://yhjkrf.site/chunklist/hlsch18.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // SN
"S19": { url: "https://yhjkrf.site/chunklist/hlsch19.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // ?
"S20": { url: "https://yhjkrf.site/chunklist/hlsch20.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // a Sport TR
"S21": { url: "https://yhjkrf.site/chunklist/hlsch21.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // SccEx 2 Saudi
"S22": { url: "https://yhjkrf.site/chunklist/hlsch22.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // SccEx 1 Saudi
"S23": { url: "https://yhjkrf.site/chunklist/hlsch23.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // FS1 Usa
"S24": { url: "https://yhjkrf.site/chunklist/hlsch24.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Erorr
"S25": { url: "https://yhjkrf.site/chunklist/hlsch25.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // FS2 Usa
"S26": { url: "https://yhjkrf.site/chunklist/hlsch26.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // ?
"S27": { url: "https://yhjkrf.site/chunklist/hlsch27.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Erorr
"S28": { url: "https://yhjkrf.site/chunklist/hlsch28.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Erorr
"S29": { url: "https://yhjkrf.site/chunklist/hlsch29.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Erorr
"S30": { url: "https://yhjkrf.site/chunklist/hlsch30.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Mi82LzIwMjUgNSA6MTEgOjU1ICBQTSZoYXNoX3ZhbHVlPU15WC82czZPd2JWSEZlcjJwOUlUQVE9PSZ2YWxpZG1pbnV0ZXM9NzIwJmlkPTIwMDE6NDQ4YTo2MGMwOjk1OGU6OTA1NDoxOWVjOjllNDE6NTkyNSZzdHJtX2xlbj01", }, // Erorr

        };


var id = getParameterByName('id');
var config = ConfiguracionCanales[id];

if (config) {
    var sources = [];

    if (config.url.includes('.m3u8')) {
        sources.push({
            file: config.url
        });
    }
    
    if (config.url.includes('.mpd') && config.k1 && config.k2) {
        sources.push({
            file: config.url,
            drm: {"clearkey": {"keyId": config.k1, "key": config.k2}}
        });
    }

 //JWWWWWW
    jwplayer("player").setup({
        playlist: [{
            sources: sources
        }],
        width: "100%",
        aspectratio: "16:9",
        autostart: true,
        mute: false,
        stretching: "uniform",
        image: "https://cdn.jsdelivr.net/gh/peace94tes/LogoSports@refs/heads/main/20250121_011123.png",
       logo: {
            file: 'https://cdn.jsdelivr.net/gh/peace94tes/peacetv@main/Peace_Logo_1.png',
            position: 'top-right',
            //link: '/',
          },
        cast: {}, 
        //sharing: {}
        });
// https://0792z.blogspot.com/2001/02/?m=1uwe~10&zy=https://l.5/yt/id.m3u8?id=cVytpwP05Ec?zyz
        }
