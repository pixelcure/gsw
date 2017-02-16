import NBA from 'nba';

export function getPlayerStats(name) {
    let player = NBA.findPlayer(name);
    return NBA.stats.playerProfile({PlayerID: player.playerId})
        .then((stats) => {
            return stats;
        })
        .catch((err) => {
            console.warn(err);
        });
};

export function getWarriorsTeamInfo() {
    return NBA.stats.teamInfoCommon({TeamID: 1610612744})
        .then((stats) => {
            return stats;
        })
        .catch((err) => {
            console.warn(err);
        });
};

export function getTeamInfo() {
    return NBA.stats.homepageV2({PlayerOrTeam: 'Team', 'StatType': 'points'})
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
        });
};

export function getTeamDashboard() {
    return NBA.stats.teamPlayerDashboard({TeamID: 1610612744})
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
        });
};
