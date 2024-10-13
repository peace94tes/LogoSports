    jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';

    // Channel data - add more channels if needed
    const channels = {
      'ar1': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena1.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'ar2': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena2.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'ar3': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena3.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'ar4': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena4.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'ar5': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena5.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'ar6': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/arena6.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'arp1': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/as_premium1.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'arp2': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/as_premium2.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      'arp3': { 
        url: 'https://webtvstream.bhtelecom.ba/hls6/as_premium3.mpd', 
        drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
      },
      's1': { 
        url: 'https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd', 
        drm: { 'd84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f' }
      },
      's2': { 
        url: 'https://ssc-2-enc.edgenextcdn.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd', 
        drm: { '8bcfc55359e24bd7ad1c5560a96ddd3c': 'b5dcf721ab522af92a9d3bf0bd55b596' }
      },
      's3': { 
        url: 'https://ssc-3-enc.edgenextcdn.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd', 
        drm: { '7de5dd08ad8041d586c2f16ccc9490a1': '5e1503f3398b34f5099933fedab847ef' }
      },
      's4': { 
        url: 'https://ssc-4-enc.edgenextcdn.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd', 
        drm: { '5c672f6b85a94638872d0214f7806ed4': 'bf8756fbb866ee2d5c701c2289dd8de3' }
      },
      's5': { 
        url: 'https://ssc-5-enc.edgenextcdn.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd', 
        drm: { 'c88b512b17ab4f6cb09eb0ff4a1056ed': 'adc08ee1c20a734972a55c9aebbd1888' }
      },
      'sx1': { 
        url: 'https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd', 
        drm: { 'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401' }
      },
      'sx2': { 
        url: 'https://ssc-extra-2-enc.edgenextcdn.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd', 
        drm: { '4d89249bd4ca4ebc9e70443265f9507d': 'cf074ffd2646c9c2f8513b47fa57bc30' }
      },
      'sx3': { 
        url: 'https://ssc-extra3-enc.edgenextcdn.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', 
        drm: { '98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a' }
      },
      'spoid1': { 
        url: 'https://atemecdnbalancer-voe.sysln.id/live/eds/SPOTVHD/mpd/SPOTVHD.mpd', 
        drm: { 'e60ece8f0d9042fcb52508055ec48e5e': '213f438bd4961cda987d41b7f154f1e5' }
      },
      'spoid2': { 
        url: 'https://atemecdnbalancer-voe.sysln.id/live/eds/SPOTV2HD/mpd/SPOTV2HD.mpd', 
        drm: { 'e6ed3fdf6e9f491d9ead109fc0b00cfc': '3bc6c45722eb5fa7b343de9bffc4f7c7' }
      },
      'spo1my': { 
        url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227608/3221227608.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawWP5a6lzyDPJ57LXeuC05Cs44sM6v4Pb96oLcepTGODErcymHBIhx5oJP4jv2fPK0%3D%3A20230206101724%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101724%2Curn:Huawei:liveTV:XTV100000161%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOy27CMBRE8ZLK3YehIVXIKRKVahE6Laa2NcmihODHZD695A2bGfmjM4coeljr1B2dV7Zqsu1LeoS2EhRk611tu2MFYYlujVBSabhfT-5JpgF-z7tfkTGMy6l4EKydrk7eLh12dzHjqLK39iJ4qPXpEyy_IHE4Vwkh7kPE__y-D1Hv04YtauaqDZltc0KKQuZs3lJW6Th1bAL0i6MV0Qyn8H9AcrCJ2JX6AGOGoykprv39wxmpfNEzpVq7L0AAAA&tenantId=6001', 
        drm: { '7de0fa3c35f52f8a8517f1600dd11ed7': '2d59cf94d10020aeee01a97cd0716eea' }
      },
      'spo2my': { 
        url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227726/3221227726.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUeOV6Zn1IaYCsVySN%2F6aTU0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV100000162%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBiE36bHpi0I9tCTGxOTDbuJrFczhZ9KLNRt0cS3X1D2NpmZbzJTREOHD5PZwoqt0IXSXZ7JEnqWCp2WFhtlBUv0WwWjWAPv-9FVoV2w03F3loILrpTkUrF6mdt7uLVZ3QdL0WT2JHio2_ItKnjDyQO5yI5TH0Y-bfH8yf6tcKoXq_JotwUWuSlyvOSTYtbI13nhF2QdmG4IVL7GdwLMB18InZDc4WjCgOZ8e79m_uK7fzmD_CkDoH0AAAA&tenantId=6001', 
        drm: { '7c67cb7de9465062c06ac94e8e065462': '5931fc07f285ffe40eb98e130bb090f9' }
      },
      'tnt1': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd', 
        drm: { 'ae26845bd33038a9c0774a0981007294': '63ac662dde310cfb4cc6f9b43b34196d' }
      },
      'tnt2': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd', 
        drm: { '6d1708b185c6c4d7b37600520c7cc93c': '1aace05f58d8edef9697fd52cb09f441' }
      },
      'tnt3': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd', 
        drm: { '4e993aa8c1f295f8b94e8e9e6f6d0bfe': '86a1ed6e96caab8eb1009fe530d2cf4f' }
      },
      'tnt4': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd', 
        drm: { 'e31a5a81caff5d07ea2411a571fc2e59': '96c5ef69479732ae734f962748c19729' }
      },
      'tnt5': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd', 
        drm: { '60c0d9b41475e01db4ffb91ed557fbcc': '36ee40e58948ca15e3caba8d47b8f34b' }
      },
      'ad1': { 
        url: 'https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd', 
        drm: { 'eb5a3a48f3e191a00e3ac1e2d470c491': '2c8b7198563527e524d66628c092ef1f' }
      },
      'ad2': { 
        url: 'https://uselector.cdn.intigral-ott.net/ADSP2/ADSP2.isml/manifest.mpd', 
        drm: { 'efca93272b9d34f5cf9d8598f43be5ea': '55e5fe489e9c18f6c979c3126d4bcfed' }
      },
      'usac': { 
        url: 'https://cfrt.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd', 
        drm: { '252a671825ba31ec8433f978c32ccf6d': 'ee560759ecc8d2274df2e63fcef56915' }
      },
      'tel': { 
        url: 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(WNJU)/master.mpd', 
        drm: { 'e1f756cffcc838e28a3da6541c00ee8b': '1444b1c17a5c1f78435de12dcff47c8e' }
      },
      'dazn1': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd', 
        drm: { '44dd9cd370b08a868ead115fe84ecfde': 'bff19ab0a51cf14e848389b152913fd0' }
      },
      'dazn2': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd', 
        drm: { '0eab5a3f3e3b4ba5d42d40ca30d17571': 'f3f061ded9b70e8160590d5802ecda6d' }
      },
      'dazn3': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd', 
        drm: { 'bad8efff688c0dbb3711e4a7114c22a3': '6ba800673b20776c0c850130d45e1920' }
      },
      'dazn4': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd', 
        drm: { 'd27104d427e4f87e75b19395a9f8796b': '723593c70e2d4c4862754398e80168f8' }
      },
      'daznla1': { 
        url: 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd', 
        drm: { '43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a' }
      },
      '054': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-054/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '055': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-055/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '056': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-056/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '057': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-057/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '058': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-058/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '059': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-059/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '017': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-017/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '018': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-018/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '022': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-022/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '024': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-024/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '016': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-016/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '035': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-035/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '036': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-036/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '037': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-037/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      '038': { 
        url: 'https://cors-proxy.cooks.fyi/https://dash.elutuna.workers.dev/dash/dazn-linear-038/stream.mpd', 
        drm: { '8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769' }
      },
      'rtlde': { 
        url: 'https://pnowlive-a.akamaized.net/live/rtlhd/dash/rtlhd.mpd', 
        drm: { '57e48b99f3f6d4f13f5c5afdcca084ca': '29379a5e2d3405fad2f5d9cbe92586c3' }
      },
      '2no': { 
        url: 'https://ch11-hls-live.akamaized.net/out/u/433127.mpd', 
        drm: { 'd12e4c9dc52f4cbab7ac9b2278317e47': 'a7987e5b6ec42db68a25486e108ca9f2' }
      },
      'nbc': { 
        url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(knbc)/master.mpd', 
        drm: { '0045a118e231f1326bcdb45350b1ceaa': '8c13afbfa54ea37a368b8b859021f6e3' }
      },
      'UFC1': { 
        url: 'https://live.mocdn.tv/out/v1/e3b6cb27892d4466a522bf43fe92da1a/manifest_L1.mpd', 
        drm: { '3e17c3798a294c49b93c1b2ddbcd8f29': '0917fa8c9cf68c206efc24946d0c22cc' }
      },
      'UFC2': { 
        url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=21.9.62.16880&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', 
        drm: { 'cbb673fb120882354735ed57eeb05b4c': 'fe003f7aeec40eb65d20b14edfda2a86' }
      },
    };

    // Get channel from URL
    function getChannelFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id') || 'ar1'; // default to 'ar1' if not specified
    }

    // Initialize the player with a specific channel
    function initializePlayer(channelKey) {
      const channel = channels[channelKey];

      if (channel) {
        jwplayer("player").setup({
          playlist: [{
            "file": channel.url,
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipcBUNKGv5VLVEuuC19SOawWUX41AvkgWScOb2MxVuFMFQVLvEeqxY_8-QMSMQWIOtSL-94V1xD5noTPCtBC1wOh1cSN0X-DliRfwEkdH_HKf5_OnuYJdTvKUPehf4kV5S9kk3jfilyXOJ7sqc-YjTCAJr39_DBKYGfRlxw70McLcbc2yzcDvXBUWkVWM/s1600/20240418_193205.jpg", // Poster image
            "type": "dash",
            "label": "HD",
            "drm": {
              "clearkey": {
                "keyId": Object.keys(channel.drm)[0],
                "key": Object.values(channel.drm)[0]
              }
            }
          }],
          width: "100%",
          aspectratio: "16:9",
          autostart: false,
          mute: false,
          stretching: "uniform",
          logo: {
            file: 'https://cdn.jsdelivr.net/gh/peace94tes/peacetv@main/Peace_Logo_1.png',
            position: 'top-right',
            //link: '/',
          },
          cast: {},
          sharing: false
        });
      } else {
        console.error(`Channel '${channelKey}' not found!`);
      }
    }

    // Get the channel from the URL and initialize the player
    const selectedChannel = getChannelFromUrl();
    initializePlayer(selectedChannel);

    // Landscape orientation handling remains unchanged
    function requestLandscapeOrientation() {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(function(error) {
          console.error('Orientation lock failed: ', error);
        });
      }
    }

    function onFullscreenChange() {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        requestLandscapeOrientation();
      }
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('mozfullscreenchange', onFullscreenChange);
    document.addEventListener('MSFullscreenChange', onFullscreenChange);
