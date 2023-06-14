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
    var d = {"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","gap":10,"definitions": [{"initialPosition":{"hfov":120,"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_7D453CB1_77B8_58DF_41DD_11BA12107583","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_camera"},{"displayPlaybackBar":true,"adjacentPanoramaPositionsEnabled":false,"viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionVerticalAngle":131.4,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionHorizontalAngle":65.7,"zoomEnabled":true,"id":"MainViewer_mobilePanoramaPlayer"},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_t.jpg"}],"thumbnailUrl":"media/panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","yaw":-44.32,"select":"this.overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1"},"distance":2.51,"class":"AdjacentPanorama","backwardYaw":-53.09},{"panorama":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","yaw":27.62,"select":"this.overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93"},"distance":3.21,"class":"AdjacentPanorama","backwardYaw":26.99}],"hfovMin":"103%","overlays":["this.overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1","this.overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93"],"pitch":0,"id":"panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","hfovMax":120,"class":"Panorama","hfov":360,"partial":false,"vfov":180},{"initialPosition":{"hfov":120,"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_75F8D658_78C7_C254_41C3_59A88D779034","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_77679DD6_78C4_465C_41D9_30208C687973_camera"},{"thumbnailUrl":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_t.jpg","vfov":180,"hfovMin":"103%","overlays":["this.overlay_66954238_77A8_4BCE_41D5_401250823C08"],"pitch":0,"id":"panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","label":trans('panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18.label'),"hfovMax":120,"class":"Panorama","hfov":360,"data":{"subtitle":trans('panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18.subtitle','panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18.data.subtitle'),"label":"Loft 05"},"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_t.jpg"}],"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","yaw":75.95,"select":"this.overlay_66954238_77A8_4BCE_41D5_401250823C08.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66954238_77A8_4BCE_41D5_401250823C08"},"distance":2.83,"class":"AdjacentPanorama","backwardYaw":-161.2}]},{"initialPosition":{"hfov":120,"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"displayOriginPosition":{"stereographicFactor":1,"hfov":165,"yaw":0,"class":"RotationalCameraDisplayPosition","pitch":90},"hoverFactor":0,"initialSequence":"this.sequence_7D41DCB0_77B8_58DD_41D7_658C1D159B9F","displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetHfov":120,"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetPitch":0}],"class":"PanoramaCamera","automaticZoomSpeed":0,"manualZoomSpeed":0,"id":"panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_camera"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18_camera","media":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973_camera","media":"this.panorama_77679DD6_78C4_465C_41D9_30208C687973","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE_camera","media":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_camera","media":"this.panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"data":{"name":"Main Viewer"},"toolTipBorderRadius":1,"width":"100%","toolTipShadowOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer_mobile","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0.01],"playbackBarBorderSize":0,"toolTipFontSize":6,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","playbackBarHeadShadow":true,"progressOpacity":1,"progressBarBorderColor":"#0066FF","toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipPaddingLeft":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":50,"toolTipPaddingRight":3,"minHeight":25,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","progressHeight":10,"toolTipFontStyle":"normal","playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipShadowSpread":0,"paddingBottom":0,"propagateClick":true,"playbackBarLeft":0,"toolTipPaddingBottom":2,"playbackBarHeadHeight":15,"subtitlesOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","progressBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"progressBorderSize":0,"subtitlesBottom":50,"playbackBarHeadShadowHorizontalLength":0,"progressLeft":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#00FF00","height":"100%","vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"surfaceReticleOpacity":0.6,"subtitlesShadow":false,"toolTipPaddingTop":2,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":0.5,"subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowVerticalLength":0,"borderRadius":0,"toolTipShadowVerticalLength":0,"toolTipShadowBlurRadius":1,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_t.jpg"}],"thumbnailUrl":"media/panorama_77679DD6_78C4_465C_41D9_30208C687973_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_7A87763A_77B9_CBCD_41D2_35EE9B9FBF18","yaw":-161.2,"select":"this.overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0"},"distance":2.55,"class":"AdjacentPanorama","backwardYaw":75.95},{"panorama":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","yaw":26.99,"select":"this.overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299"},"distance":3.09,"class":"AdjacentPanorama","backwardYaw":27.62}],"hfovMin":"150%","overlays":["this.overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0","this.overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299"],"pitch":0,"id":"panorama_77679DD6_78C4_465C_41D9_30208C687973","hfovMax":120,"class":"Panorama","hfov":360,"partial":false,"vfov":180},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_t.jpg"}],"thumbnailUrl":"media/panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_7D6CA060_77B9_C87D_418F_E12ACE73FAAE","yaw":-53.09,"select":"this.overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E"},"distance":2.86,"class":"AdjacentPanorama","backwardYaw":-44.32}],"hfovMin":"103%","overlays":["this.overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E"],"pitch":0,"id":"panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4","hfovMax":120,"class":"Panorama","hfov":360,"partial":false,"vfov":180},{"initialPosition":{"hfov":120,"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_7D455CB2_77B8_58DD_41D0_5C8E68C02538","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_7D6859B2_77B9_B8C2_41B8_E7C0D2D558A4_camera"},{"class":"PlayerMenuItem","label":"BS Estúdio","id":"TDVAuthor"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_7D453CB1_77B8_58DF_41DD_11BA12107583"},{"areas":["this.HotspotPanoramaOverlayArea_6ADBD75A_78CC_4254_41D5_448597B1461D"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_6BD596AD_78CC_42CC_41CF_8C7B8E508EC1","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-44.32,"vfov":7.27,"horizontalAlign":"center","hfov":7.85,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"verticalAlign":"middle","pitch":-34.05,"scaleMode":"fit_inside"}],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_6BD5E4EE_78CC_464C_41AA_82D56A4A5C70"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_6BD0C4EB_78CC_4674_41D0_9A5D2502AB93","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":27.62,"rotationY":-6.55,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":9.63,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"roll":-8.62,"verticalAlign":"middle","pitch":-27.92,"vfov":8.78}],"enabledInCardboard":true},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":2.66},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":2.66},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":2.66}],"class":"PanoramaCameraSequence","id":"sequence_75F8D658_78C7_C254_41C3_59A88D779034"},{"areas":["this.HotspotPanoramaOverlayArea_66E69249_77A8_484E_41CA_0C5965EBA56C"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_66954238_77A8_4BCE_41D5_401250823C08","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":75.95,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":8.96,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"roll":-4.65,"verticalAlign":"middle","pitch":-31.01,"vfov":8.14}],"enabledInCardboard":true},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_7D41DCB0_77B8_58DD_41D7_658C1D159B9F"},{"areas":["this.HotspotPanoramaOverlayArea_69A9218B_78CC_BEB4_41C1_74722B5B29F9"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_691770EE_78CC_BE4D_41C7_47A6FC6A79E0","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-161.2,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":7.7,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"roll":-4.37,"verticalAlign":"middle","pitch":-33.68,"vfov":6.46}],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_6A02ECC2_78CD_C6B4_41D3_3EA20F2E2AD1"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_6A0DACBE_78CD_C6CD_41DB_053C4B65A299","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":26.99,"vfov":6.13,"horizontalAlign":"center","hfov":6.34,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"verticalAlign":"middle","pitch":-28.79,"scaleMode":"fit_inside"}],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_6A9D3102_78CB_DFB4_41D4_F53B1A75F783"],"maps":[],"enabledInSurfaceSelection":false,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_6BE4E04F_78CB_DE4C_41D4_4320EA92785E","data":{"hasPanoramaAction":true,"label":"Image"},"items":[{"image":"this.res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76","distance":50,"yaw":-53.09,"vfov":6.78,"horizontalAlign":"center","hfov":9.37,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"verticalAlign":"middle","pitch":-30.68,"scaleMode":"fit_inside"}],"enabledInCardboard":true},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_7D455CB2_77B8_58DD_41D0_5C8E68C02538"},{"click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6ADBD75A_78CC_4254_41D5_448597B1461D"},{"class":"ImageResource","levels":[{"height":114,"width":131,"class":"ImageResourceLevel","url":"media/res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76_0.png"}],"id":"res_66C0BC9E_77A8_78C2_41D2_2C19C98B5B76"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6BD5E4EE_78CC_464C_41AA_82D56A4A5C70"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_66E69249_77A8_484E_41CA_0C5965EBA56C"},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_69A9218B_78CC_BEB4_41C1_74722B5B29F9"},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6A02ECC2_78CD_C6B4_41D3_3EA20F2E2AD1"},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6A9D3102_78CB_DFB4_41D4_F53B1A75F783"}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.5,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"overflow":"hidden","defaultVRPointer":"laser","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer_mobile"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","class":"Player","scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowScore":TDV.Tour.Script.quizShowScore,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getKey":TDV.Tour.Script.getKey,"openLink":TDV.Tour.Script.openLink,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"existsKey":TDV.Tour.Script.existsKey,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"historyGoForward":TDV.Tour.Script.historyGoForward,"initQuiz":TDV.Tour.Script.initQuiz,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizStart":TDV.Tour.Script.quizStart,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"registerKey":TDV.Tour.Script.registerKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumePlayers":TDV.Tour.Script.resumePlayers},"start":"this.get('data').surfaceSelectionHotspotMode = 'invisible'; this.init()","downloadEnabled":false,"menu":["this.TDVAuthor"],"borderSize":0,"data":{"name":"Player468","defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"initialScale":0.5},"minWidth":20,"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Jun 14 2023