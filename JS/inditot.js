  async function initializePlayer(id, url, drmKey, enableCustomConfig) {
    const video = document.getElementById(id);
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();    
    const config = {
        'controlPanelElements': ['play_pause','time_and_duration','spacer','mute','volume','captions','language' ,'quality','fullscreen'],
        'playbackRates': [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        'seekBarColors': {base: 'rgba(32,178,169,255)', buffered: 'rgba(255,255,255,.9)', played: 'rgb(255,0,0)'},
        'volumeBarColors': {base: 'rgba(255, 255, 255, .4)', level: 'rgba(255,255,255,.9)'}};
    ui.configure(config);
    player.configure({drm: {clearKeys: drmKey}});
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);
   if (enableCustomConfig) {
        player.configure('manifest.dash.ignoreMinBufferTime', true);
        player.configure('streaming.rebufferingGoal', 3 /* second */);
   }
    try {
        await player.load(url);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function onPlayerError(error) {
    console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

document.addEventListener('shaka-ui-loaded', function() {
    

initializePlayer('tvone', 'https://streaming.indihometv.com/atm/DASH/tvone/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('indosiar', 'https://streaming.indihometv.com/atm/DASH/indosiar/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('sctv', 'https://streaming.indihometv.com/atm/DASH/sctv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('inews', 'https://streaming.indihometv.com/atm/DASH/inews/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('useeprime', 'https://streaming.indihometv.com/atm/DASH/useeprime/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('trans7', 'https://streaming.indihometv.com/atm/DASH/trans7/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('transtv', 'https://streaming.indihometv.com/atm/DASH/transtv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('antv', 'https://streaming.indihometv.com/atm/DASH/ANTV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('indikids', 'https://streaming.indihometv.com/atm/DASH/indikids/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('seatoday', 'https://streaming.indihometv.com/atm/DASH/seatoday/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('metrotv', 'https://streaming.indihometv.com/atm/DASH/METRO_TV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('kompastv', 'https://streaming.indihometv.com/atm/DASH/KOMPAS_TV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('tvri', 'https://streaming.indihometv.com/atm/DASH/TVRI/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('rtv', 'https://streaming.indihometv.com/atm/DASH/RAJAWALI_TV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('rodjatv', 'https://streaming.indihometv.com/atm/DASH/rodjatv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('jtv', 'https://streaming.indihometv.com/atm/DASH/jtv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('mncnews', 'https://streaming.indihometv.com/atm/DASH/mncnews/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('btv', 'https://streaming.indihometv.com/atm/DASH/beritasatu/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('rrinet', 'https://streaming.indihometv.com/atm/DASH/RRI_NET_HD/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('balitv', 'https://streaming.indihometv.com/atm/DASH/balitv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('mqtv', 'https://streaming.indihometv.com/atm/DASH/MQTV_HD/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('mtatv', 'https://streaming.indihometv.com/atm/DASH/mtatv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('alquran', 'https://streaming.indihometv.com/atm/DASH/alquran/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('jaktv', 'https://streaming.indihometv.com/atm/DASH/JAK_TV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('nusantaratv', 'https://streaming.indihometv.com/atm/DASH/nusantaratv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('antara', 'https://streaming.indihometv.com/atm/DASH/antara/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('tvmu', 'https://streaming.indihometv.com/atm/DASH/muhammadiyahtv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('pramborstv', 'https://streaming.indihometv.com/atm/DASH/PRAMBORS_TV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('idx', 'https://streaming.indihometv.com/atm/DASH/idx/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('jawapos', 'https://streaming.indihometv.com/atm/DASH/jawapos/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('muitv', 'https://streaming.indihometv.com/atm/DASH/muitv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('tawaftv', 'https://streaming.indihometv.com/atm/DASH/tawaftv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('tv9', 'https://streaming.indihometv.com/atm/DASH/tv9/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('indonesiana', 'https://streaming.indihometv.com/atm/DASH/indonesiana/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('uchannel', 'https://streaming.indihometv.com/atm/DASH/uchannel/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('cctv4', 'https://streaming.indihometv.com/atm/DASH/CCTV_4/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('dwtv', 'https://streaming.indihometv.com/atm/DASH/DWTV/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('atv', 'https://streaming.indihometv.com/atm/DASH/atv/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('zeebioskop', 'https://streaming.indihometv.com/atm/DASH/zbioskop/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
initializePlayer('mykids', 'https://streaming.indihometv.com/atm/DASH/mykids/manifest.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});
  
});
