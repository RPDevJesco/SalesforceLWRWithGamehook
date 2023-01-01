import { LightningElement, track } from 'lwc';
export default class HelloWorldApp extends LightningElement {
    storedData = null;
    @track ready = false;
    @track boulderBadgeState = false;
    @track cascadeBadgeState = false;
    @track thunderBadgeState = false;
    @track rainbowBadgeState = false;
    @track soulBadgeState = false;
    @track marshBadgeState = false;
    @track volcanoBadgeState = false;
    @track earthBadgeState = false;
    @track nickname = '';
    @track battleStatSpecial = '';
    @track battleStatSpeed = '';
    @track battleStatDefense = '';
    @track battleStatAttack = '';
    @track move4pp = '';
    @track move4 = '';
    @track move3pp = '';
    @track move3 = '';
    @track move2pp = '';
    @track move2 = '';
    @track move1pp = '';
    @track move1 = '';
    @track battleStatMaxHp = '';
    @track level = '';
    connectedCallback() {
        Promise.all([
            this.storedData = this.getDataFromMapper()
        ])
            .then(() => {
                this.getBattleStats();
                this.getPokemonData();
                this.getMoveAndPPData();
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

    /**
     * To do: Fix this so that it works properly and isn't such an ugly / unwieldly function.
     */
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
        if (badgeState === 'true') badgeElement.style.visibility = 'visible'
        if (badgeState === 'false') badgeElement.style.visibility = 'hidden'
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
}
