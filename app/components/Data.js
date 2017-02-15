import NBA from 'nba';

export function getPlayerStats(name) {
    let player = NBA.findPlayer(name);
    return NBA.stats.playerProfile({PlayerID: player.playerId})
        .then((stats) => {
            return stats;
        });
};

export function getWarriorsTeamInfo() {
    return NBA.stats.teamInfoCommon({TeamID: 1610612744})
        .then((stats) => {
            return stats;
        });
};

export function getTeamInfo() {
    return NBA.stats.homepageV2({PlayerOrTeam: 'Warriors'})
        .then((data) => {
            return data;
        })
}
