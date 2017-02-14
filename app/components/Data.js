import NBA from 'nba';

export function getPlayerStats(name) {
    let player = NBA.findPlayer(name);

    return NBA.stats.playerProfile({PlayerID: player.playerId})
        .then(function(stats) {
            return stats;
        });
};

export function getWarriorsTeamInfo() {
    return NBA.stats.teamInfoCommon({TeamID: 1610612744})
        .then(function(stats) {
            return stats;
        });
};
