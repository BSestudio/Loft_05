(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"gap":10,"definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_7D455CB2_77B8_58DD_41D0_5C8E68C02538","id":"panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_75F8D658_78C7_C254_41C3_59A88D779034","id":"panorama_77679DD6_78C4_465C_41D9_30208C687973_camera"},{"hfovMin":"103%","thumbnailUrl":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E"],"id":"panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","hfovMax":120,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":2.86,"yaw":-53.09,"select":"this.overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","data":{"overlayID":"overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E"},"class":"AdjacentPanorama","backwardYaw":-44.32}],"hfov":360},{"manualZoomSpeed":0,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":0,"class":"PanoramaCamera","initialSequence":"this.sequence_7D41DCB0_77B8_58DD_41D7_658C1D159B9F","id":"panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_camera"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":true,"zoomEnabled":true,"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","adjacentPanoramaPositionsEnabled":false,"arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"hfovMin":"103%","thumbnailUrl":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_66954238_77A8_4BCE_41D5_401250823C08"],"id":"panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","hfovMax":120,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":2.83,"yaw":75.95,"select":"this.overlay_66954238_77A8_4BCE_41D5_401250823C08.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","data":{"overlayID":"overlay_66954238_77A8_4BCE_41D5_401250823C08"},"class":"AdjacentPanorama","backwardYaw":-161.2}],"hfov":360},{"hfovMin":"150%","thumbnailUrl":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0","this.overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299"],"id":"panorama_77679DD6_78C4_465C_41D9_30208C687973","hfovMax":120,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":2.55,"yaw":-161.2,"select":"this.overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","data":{"overlayID":"overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0"},"class":"AdjacentPanorama","backwardYaw":75.95},{"distance":3.09,"yaw":26.99,"select":"this.overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","data":{"overlayID":"overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299"},"class":"AdjacentPanorama","backwardYaw":27.62}],"hfov":360},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":1,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarProgressBorderColor":"#000000","id":"MainViewer_mobile","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0.01],"paddingLeft":0,"playbackBarHeadShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":6,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#0066FF","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":3,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"class":"ViewerArea","minHeight":25,"playbackBarHeadShadowBlurRadius":1.5,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":3,"minWidth":50,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":1,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":true,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":2,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#6633CC","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":2,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":1,"shadow":false,"data":{"name":"Main Viewer"}},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_camera","media":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973_camera","media":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_camera","media":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_camera","media":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_7D453CB1_77B8_58DF_41DD_11BA12107583","id":"panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_camera"},{"hfovMin":"103%","thumbnailUrl":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1","this.overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93"],"id":"panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","hfovMax":120,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":2.51,"yaw":-44.32,"select":"this.overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","data":{"overlayID":"overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1"},"class":"AdjacentPanorama","backwardYaw":-53.09},{"distance":3.21,"yaw":27.62,"select":"this.overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","data":{"overlayID":"overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93"},"class":"AdjacentPanorama","backwardYaw":26.99}],"hfov":360},{"class":"PlayerMenuItem","label":"BS Estúdio","id":"TDVAuthor"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_7D455CB2_77B8_58DD_41D0_5C8E68C02538","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_75F8D658_78C7_C254_41C3_59A88D779034","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6A9D3102_78CB_DFB4_41D4_F53B1A75F783"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-53.09,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.78,"data":{"label":"Image"},"verticalAlign":"middle","hfov":9.37,"pitch":-30.68,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_7D41DCB0_77B8_58DD_41D7_658C1D159B9F","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_66E69249_77A8_484E_41CA_0C5965EBA56C"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_66954238_77A8_4BCE_41D5_401250823C08","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":75.95,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":8.14,"data":{"label":"Image"},"roll":-4.65,"verticalAlign":"middle","hfov":8.96,"pitch":-31.01,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_69A9218B_78CC_BEB4_41C1_74722B5B29F9"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-161.2,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.46,"data":{"label":"Image"},"roll":-4.37,"verticalAlign":"middle","hfov":7.7,"pitch":-33.68,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6A02ECC2_78CD_C6B4_41D3_3EA20F2E2AD1"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":26.99,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.13,"data":{"label":"Image"},"verticalAlign":"middle","hfov":6.34,"pitch":-28.79,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_7D453CB1_77B8_58DF_41DD_11BA12107583","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6ADBD75A_78CC_4254_41D5_448597B1461D"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-44.32,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7.27,"data":{"label":"Image"},"verticalAlign":"middle","hfov":7.85,"pitch":-34.05,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6BD5E4EE_78CC_464C_41AA_82D56A4A5C70"],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93","items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":27.62,"rotationY":-6.55,"vfov":8.78,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Image"},"roll":-8.62,"verticalAlign":"middle","hfov":9.63,"pitch":-27.92,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_6A9D3102_78CB_DFB4_41D4_F53B1A75F783"},{"class":"ImageResource","levels":[{"height":114,"width":131,"class":"ImageResourceLevel","url":"media/res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76_0.png"}],"id":"res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_66E69249_77A8_484E_41CA_0C5965EBA56C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_69A9218B_78CC_BEB4_41C1_74722B5B29F9"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_6A02ECC2_78CD_C6B4_41D3_3EA20F2E2AD1"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_6ADBD75A_78CC_4254_41D5_448597B1461D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_6BD5E4EE_78CC_464C_41AA_82D56A4A5C70"}],"defaultVRPointer":"laser","width":"100%","borderRadius":0,"mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":true,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"menu":["this.TDVAuthor"],"scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getKey":TDV.Tour.Script.getKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"downloadFile":TDV.Tour.Script.downloadFile,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowScore":TDV.Tour.Script.quizShowScore,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initAnalytics":TDV.Tour.Script.initAnalytics,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPixels":TDV.Tour.Script.getPixels,"mixObject":TDV.Tour.Script.mixObject,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playAudioList":TDV.Tour.Script.playAudioList,"translate":TDV.Tour.Script.translate,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.5,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer_mobile"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.get('data').surfaceSelectionHotspotMode = 'invisible'; this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"pt","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"name":"Player468","locales":{"pt":"locale/pt.txt"},"initialScale":0.5},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 1 2023