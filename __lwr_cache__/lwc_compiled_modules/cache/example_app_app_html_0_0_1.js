import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="pokemon_background${0}"${2}><img src="https://i.imgur.com/t6wRv6G.png" style="width:1920px;height:1080px;"${3}></div>`;
const $fragment2 = parseFragment`<div class="pokemon_image${0}" style="bgPokemonStyle(mapper.properties.battle.yourPokemon)"${2}></div>`;
const $fragment3 = parseFragment`<div class="pokemon_type1${0}"${2}><img src="https://i.imgur.com/smgGzD5.png" style="width:165px;height:48px;"${3}></div>`;
const $fragment4 = parseFragment`<div class="pokemon_type2${0}"${2}><img src="https://i.imgur.com/smgGzD5.png" style="width:165px;height:48px;"${3}></div>`;
const $fragment5 = parseFragment`<div class="HP_Title${0}"${2}>HP:</div>`;
const $fragment6 = parseFragment`<div class="name_attack${0}"${2}> ATK: </div>`;
const $fragment7 = parseFragment`<div class="name_defense${0}"${2}> DEF: </div>`;
const $fragment8 = parseFragment`<div class="name_speed${0}"${2}> SPD: </div>`;
const $fragment9 = parseFragment`<div class="name_special${0}"${2}> SPC:</div>`;
const $fragment10 = parseFragment`<div class="resets${0}"${2}> RESETS: </div>`;
const $fragment11 = parseFragment`<div class="game_time${0}"${2}> GAME TIME: </div>`;
const $fragment12 = parseFragment`<div class="real_time${0}"${2}> REAL TIME: </div>`;
const $fragment13 = parseFragment`<div class="name_snessy${0}"${2}> SNESSY </div>`;
const $fragment14 = parseFragment`<div class="exp_title${0}"${2}> EXP: </div>`;
const $fragment15 = parseFragment`<div class="move_title${0}"${2}> MOVE: </div>`;
const $fragment16 = parseFragment`<div class="power_title${0}"${2}> PWR: </div>`;
const $fragment17 = parseFragment`<div class="pp_title${0}"${2}> PP: </div>`;
const $fragment18 = parseFragment`<div class="boulder_badge${0}"${2}><img src="https://i.imgur.com/JX6p69j.png" style="width:75px; height:75px;"${3}></div>`;
const $fragment19 = parseFragment`<div class="cascade_badge${0}"${2}><img src="https://i.imgur.com/07KyuqE.png" style="width:62px; height:85px;"${3}></div>`;
const $fragment20 = parseFragment`<div class="thunder_badge${0}"${2}><img src="https://i.imgur.com/pNl5bhB.png" style="width:93px; height:92px;"${3}></div>`;
const $fragment21 = parseFragment`<div class="rainbow_badge${0}"${2}><img src="https://i.imgur.com/3SxaOeT.png" style="width:84px; height:84px;"${3}></div>`;
const $fragment22 = parseFragment`<div class="soul_badge${0}"${2}><img src="https://i.imgur.com/4S6fHLH.png" style="width:82px; height:78px;"${3}></div>`;
const $fragment23 = parseFragment`<div class="marsh_badge${0}"${2}><img src="https://i.imgur.com/JZhSnIM.png" style="width:80px; height:80px;"${3}></div>`;
const $fragment24 = parseFragment`<div class="volcano_badge${0}"${2}><img src="https://i.imgur.com/ZcUqYMK.png" style="width:81px; height:79px;"${3}></div>`;
const $fragment25 = parseFragment`<div class="earth_badge${0}"${2}><img src="https://i.imgur.com/Usv29Tf.png" style="width:81px; height:81px;"${3}></div>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "d-flex": true,
    "justify-content-between": true,
    "h-100": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "d-flex": true,
    "flex-column": true,
    "justify-content-around": true,
    "text-center": true
  },
  styleDecls: [["width", "100%", false]],
  key: 2
};
const stc3 = {
  classMap: {
    "level": true
  },
  key: 11
};
const stc4 = {
  classMap: {
    "HP_Value": true
  },
  key: 12
};
const stc5 = {
  classMap: {
    "move1": true
  },
  key: 15
};
const stc6 = {
  classMap: {
    "pp1": true
  },
  key: 16
};
const stc7 = {
  classMap: {
    "move2": true
  },
  key: 17
};
const stc8 = {
  classMap: {
    "pp2": true
  },
  key: 18
};
const stc9 = {
  classMap: {
    "move3": true
  },
  key: 19
};
const stc10 = {
  classMap: {
    "pp3": true
  },
  key: 20
};
const stc11 = {
  classMap: {
    "move4": true
  },
  key: 21
};
const stc12 = {
  classMap: {
    "pp4": true
  },
  key: 22
};
const stc13 = {
  classMap: {
    "stat_attack": true
  },
  key: 23
};
const stc14 = {
  classMap: {
    "stat_defense": true
  },
  key: 24
};
const stc15 = {
  classMap: {
    "stat_speed": true
  },
  key: 25
};
const stc16 = {
  classMap: {
    "stat_special": true
  },
  key: 26
};
const stc17 = {
  classMap: {
    "nickname": true
  },
  key: 43
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("main", stc0, [$cmp.ready ? api_element("div", stc1, [api_element("div", stc2, [api_static_fragment($fragment1(), 4), api_static_fragment($fragment2(), 6), api_static_fragment($fragment3(), 8), api_static_fragment($fragment4(), 10), api_element("div", stc3, [api_text(" Level: " + api_dynamic_text($cmp.level))]), api_element("div", stc4, [api_text(api_dynamic_text($cmp.battleStatMaxHp))]), api_static_fragment($fragment5(), 14), api_element("div", stc5, [api_text(api_dynamic_text($cmp.move1) + " ?? \"-\" ")]), api_element("div", stc6, [api_text(api_dynamic_text($cmp.move1pp))]), api_element("div", stc7, [api_text(api_dynamic_text($cmp.move2) + " ?? \"-\" ")]), api_element("div", stc8, [api_text(api_dynamic_text($cmp.move2pp))]), api_element("div", stc9, [api_text(api_dynamic_text($cmp.move3) + " ?? \"-\" ")]), api_element("div", stc10, [api_text(api_dynamic_text($cmp.move3pp))]), api_element("div", stc11, [api_text(api_dynamic_text($cmp.move4) + " ?? '-' ")]), api_element("div", stc12, [api_text(api_dynamic_text($cmp.move4pp))]), api_element("div", stc13, [api_text(api_dynamic_text($cmp.battleStatAttack) + " ?? '-'")]), api_element("div", stc14, [api_text(api_dynamic_text($cmp.battleStatDefense) + " ?? '-'")]), api_element("div", stc15, [api_text(api_dynamic_text($cmp.battleStatSpeed) + " ?? '-'")]), api_element("div", stc16, [api_text(api_dynamic_text($cmp.battleStatSpecial) + " ?? '-'")]), api_static_fragment($fragment6(), 28), api_static_fragment($fragment7(), 30), api_static_fragment($fragment8(), 32), api_static_fragment($fragment9(), 34), api_static_fragment($fragment10(), 36), api_static_fragment($fragment11(), 38), api_static_fragment($fragment12(), 40), api_static_fragment($fragment13(), 42), api_element("div", stc17, [api_text(" " + api_dynamic_text($cmp.nickname.value) + " ?? \"-\" ")]), api_static_fragment($fragment14(), 45), api_static_fragment($fragment15(), 47), api_static_fragment($fragment16(), 49), api_static_fragment($fragment17(), 51), $cmp.boulderBadgeState ? api_static_fragment($fragment18(), 53) : null, $cmp.cascadeBadgeState ? api_static_fragment($fragment19(), 55) : null, $cmp.thunderBadgeState ? api_static_fragment($fragment20(), 57) : null, $cmp.rainbowBadgeState ? api_static_fragment($fragment21(), 59) : null, $cmp.soulBadgeState ? api_static_fragment($fragment22(), 61) : null, $cmp.marshBadgeState ? api_static_fragment($fragment23(), 63) : null, $cmp.volcanoBadgeState ? api_static_fragment($fragment24(), 65) : null, $cmp.earth_badge ? api_static_fragment($fragment25(), 67) : null])]) : null])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "example-app_app"
}
freezeTemplate(tmpl);
