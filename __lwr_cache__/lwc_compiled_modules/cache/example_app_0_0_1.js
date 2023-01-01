import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.storedData = null;
    this.ready = false;
    this.boulderBadgeState = false;
    this.cascadeBadgeState = false;
    this.thunderBadgeState = false;
    this.rainbowBadgeState = false;
    this.soulBadgeState = false;
    this.marshBadgeState = false;
    this.volcanoBadgeState = false;
    this.earthBadgeState = false;
    this.nickname = '';
    this.battleStatSpecial = '';
    this.battleStatSpeed = '';
    this.battleStatDefense = '';
    this.battleStatAttack = '';
    this.move4pp = '';
    this.move4 = '';
    this.move3pp = '';
    this.move3 = '';
    this.move2pp = '';
    this.move2 = '';
    this.move1pp = '';
    this.move1 = '';
    this.battleStatMaxHp = '';
    this.level = '';
  }
  connectedCallback() {
    Promise.all([this.storedData = this.getDataFromMapper()]).then(() => {
      //this.setBadgeState();
    }).then(() => {
      //this.getBadgeData();
      this.getBattleStats();
      this.getPokemonData();
      this.getMoveAndPPData();
      console.log('boulderBadgeState: ' + this.boulderBadgeState);
      console.log('cascadeBadgeState: ' + this.cascadeBadgeState);
      console.log('thunderBadgeState: ' + this.thunderBadgeState);
      console.log('rainbowBadgeState: ' + this.rainbowBadgeState);
      console.log('soulBadgeState: ' + this.soulBadgeState);
      console.log('marshBadgeState: ' + this.marshBadgeState);
      console.log('volcanoBadgeState: ' + this.volcanoBadgeState);
      console.log('earthBadgeState: ' + this.earthBadgeState);
    });
  }
  disconnectedCallback() {
    this.ready = false;
  }

  /**
   * Allows for iterating through the mapper based off the property name.
   * @param pathName the mapper's path for objects you are looking for e.g: player.badges.badge7
   */
  IterateThroughMapperData(pathName) {
    let data = this.storedData;
    if (data === null) return;
    let result = '';
    for (let key in data) {
      for (let key1 in data[key]) {
        if (data[key].path === pathName) {
          result = data[key].value;
        }
      }
    }
    return JSON.stringify(result);
  }
  setBadgeState() {
    this.boulderBadgeState = this.IterateThroughMapperData('player.badges.badge1') ? 'true' : 'false';
    this.cascadeBadgeState = this.IterateThroughMapperData('player.badges.badge2') ? 'true' : 'false';
    this.thunderBadgeState = this.IterateThroughMapperData('player.badges.badge3') ? 'true' : 'false';
    this.rainbowBadgeState = this.IterateThroughMapperData('player.badges.badge4') ? 'true' : 'false';
    this.soulBadgeState = this.IterateThroughMapperData('player.badges.badge5') ? 'true' : 'false';
    this.marshBadgeState = this.IterateThroughMapperData('player.badges.badge6') ? 'true' : 'false';
    this.volcanoBadgeState = this.IterateThroughMapperData('player.badges.badge7') ? 'true' : 'false';
    this.earthBadgeState = this.IterateThroughMapperData('player.badges.badge8') ? 'true' : 'false';
    this.collectedBadges(this.boulderBadgeState, 'boulder_badge');
    this.collectedBadges(this.cascadeBadgeState, 'cascade_badge');
    this.collectedBadges(this.thunderBadgeState, 'thunder_badge');
    this.collectedBadges(this.rainbowBadgeState, 'soul_badge');
    this.collectedBadges(this.soulBadgeState, 'marsh_badge');
    this.collectedBadges(this.marshBadgeState, 'boulder_badge');
    this.collectedBadges(this.volcanoBadgeState, 'volcano_badge');
    this.collectedBadges(this.earthBadgeState, 'earth_badge');
  }
  getBadgeData() {
    this.collectedBadges(this.boulderBadgeState, 'boulder_badge');
    this.collectedBadges(this.cascadeBadgeState, 'cascade_badge');
    this.collectedBadges(this.thunderBadgeState, 'thunder_badge');
    this.collectedBadges(this.rainbowBadgeState, 'soul_badge');
    this.collectedBadges(this.soulBadgeState, 'marsh_badge');
    this.collectedBadges(this.marshBadgeState, 'boulder_badge');
    this.collectedBadges(this.volcanoBadgeState, 'volcano_badge');
    this.collectedBadges(this.earthBadgeState, 'earth_badge');
  }
  getBattleStats() {
    this.battleStatSpecial = this.IterateThroughMapperData('player.team.0.statExpSpecial');
    this.battleStatSpeed = this.IterateThroughMapperData('player.team.0.statExpSpeed');
    this.battleStatDefense = this.IterateThroughMapperData('player.team.0.statExpDefense');
    this.battleStatAttack = this.IterateThroughMapperData('player.team.0.statExpAttack');
    this.battleStatMaxHp = this.IterateThroughMapperData('player.team.0.maxHp');
  }
  getMoveAndPPData() {
    this.move1 = this.IterateThroughMapperData('player.team.0.move1');
    this.move1pp = this.IterateThroughMapperData('player.team.0.move1pp');
    this.move2 = this.IterateThroughMapperData('player.team.0.move2');
    this.move2pp = this.IterateThroughMapperData('player.team.0.move2pp');
    this.move3 = this.IterateThroughMapperData('player.team.0.move3');
    this.move3pp = this.IterateThroughMapperData('player.team.0.move3pp');
    this.move4 = this.IterateThroughMapperData('player.team.0.move4');
    this.move4pp = this.IterateThroughMapperData('player.team.0.move4pp');
  }
  getPokemonData() {
    this.nickname = this.IterateThroughMapperData('player.team.0.species');
    this.level = this.IterateThroughMapperData('player.team.0.level');
  }
  collectedBadges(badgeState, className) {
    let badgeElement = document.getElementsByClassName(className)[0];
    if (badgeState === 'true') badgeElement.style.visibility = 'visible';
    if (badgeState === 'false') badgeElement.style.visibility = 'hidden';
  }

  /**
   * Pulls the mapper JSON data from the mapper's localhost website
   */
  async getDataFromMapper() {
    const url = "http://localhost:8085/mapper/properties/";
    const response = await fetch(url);
    if (response !== null) this.ready = true;
    this.storedData = await response.json();
    return this.storedData;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(HelloWorldApp, {
  track: {
    ready: 1,
    boulderBadgeState: 1,
    cascadeBadgeState: 1,
    thunderBadgeState: 1,
    rainbowBadgeState: 1,
    soulBadgeState: 1,
    marshBadgeState: 1,
    volcanoBadgeState: 1,
    earthBadgeState: 1,
    nickname: 1,
    battleStatSpecial: 1,
    battleStatSpeed: 1,
    battleStatDefense: 1,
    battleStatAttack: 1,
    move4pp: 1,
    move4: 1,
    move3pp: 1,
    move3: 1,
    move2pp: 1,
    move2: 1,
    move1pp: 1,
    move1: 1,
    battleStatMaxHp: 1,
    level: 1
  },
  fields: ["storedData"]
});
export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});