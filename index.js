var fs = require('fs');

var json = fs.readFileSync('db.json');
var data = JSON.parse(json)

const express = require('express')
const app = express();
const port = 80;
const cors = require('cors');
const res = require('express/lib/response');

app.listen(port, () => console.log('Server starting'));
app.use(express.static(__dirname + '/public'))
app.use(cors())

app.get('/', homePage)

function homePage(request, response) {
    response.sendFile('index.html', { root: __dirname })
}

app.get('/team/:team', searchTeam)

function searchTeam(request, response) {
    var reply = searchTeamHelper(request)

    response.send(reply)
}

function searchTeamHelper(request) {
    if (!searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[0]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[0])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[1]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[1])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[2]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[2])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[3]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[0].Divisions[3])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[0]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[0])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[1]).status)
    {        
        return searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[1])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[2]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[2])
    }
    else if (!searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[3]).status)
    {
        return searchTeamWithDivisionHelper(request, data.Conferences[1].Divisions[3])
    }
    else {
        var reply = {
            status: "Not Found"
        }

        return reply
    }
}

app.get('/Conferences', allData)

function allData(request, response) {
    response.send(data)
}

app.get('/:name', searchByName)

function searchByName(request, response) {
    var reply = searchByNameHelper(request)

    response.send(reply)
}

function searchByNameHelper(request) {

    if (!searchNameHelper(request, data.Conferences[0].Divisions[0].teams[0]).status)
    {
        return searchNameHelper(request, data.Conferences[0].Divisions[0].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[0].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[0].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[0].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[0].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[0].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[0].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[1].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[1].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[1].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[1].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[1].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[1].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[1].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[1].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[2].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[2].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[2].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[2].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[2].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[2].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[2].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[2].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[3].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[3].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[3].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[3].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[3].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[3].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[0].Divisions[3].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[0].Divisions[3].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[0].teams[0]).status)
    {
        return searchNameHelper(request, data.Conferences[1].Divisions[0].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[0].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[0].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[0].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[0].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[0].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[0].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[1].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[1].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[1].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[1].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[1].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[1].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[1].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[1].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[2].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[2].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[2].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[2].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[2].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[2].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[2].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[2].teams[3])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[3].teams[0]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[3].teams[0])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[3].teams[1]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[3].teams[1])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[3].teams[2]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[3].teams[2])
    }
    else if (!searchNameHelper(request, data.Conferences[1].Divisions[3].teams[3]).status) {
        return searchNameHelper(request, data.Conferences[1].Divisions[3].teams[3])
    }
    else {
        var reply = {
            status: "Not Found"
        }

        return reply
    }
}

app.get('/all/:pos', allPos)

function allPos(request, response) {
    var reply = allPosHelper(request)

    response.send(reply)
}

function allPosHelper(request) {    
    var replies = [searchAllPosByConfHelper(request, data.Conferences[0]),  searchAllPosByConfHelper(request, data.Conferences[1])]

    return replies
}

app.get('/Conference/:conference/', searchConference)

function searchConference(request, response) {
    var reply = searchConferenceHelper(request)

    response.send(reply);
}

function searchConferenceHelper(request) {
    var req = request.params.conference

    if (req == data.Conferences[0].name) {
        var reply = data.Conferences[0]
    }
    else if (req == data.Conferences[1].name) {
        var reply = data.Conferences[1]
    }
    else {
        var reply = {
            status: "Not Found"
        }
    }

    return reply
}

app.get('/Conference/:conference/all/:pos', searchAllPosByConf)

function searchAllPosByConf(request, response) {
    var conf = searchConferenceHelper(request)

    var reply = searchAllPosByConfHelper(request, conf)

    response.send(reply)
}

function searchAllPosByConfHelper(request, conf) {
    var replies = [searchAllPosByDivisionHelper(request, conf.Divisions[0]), searchAllPosByDivisionHelper(request, conf.Divisions[1]), searchAllPosByDivisionHelper(request, conf.Divisions[2]), searchAllPosByDivisionHelper(request, conf.Divisions[3])]

    return replies
}

app.get('/Conference/:conference/:division', searchDivision)

function searchDivision(request, response) {
    var conf = searchConferenceHelper(request)

    var reply = searchDivisionHelper(request, conf)

    response.send(reply)
}

function searchDivisionHelper(request, conference) {
    var req = request.params.division;

    if (req == conference.Divisions[0].name) {
        var reply = conference.Divisions[0]
    }
    else if (req == conference.Divisions[1].name) {
        var reply = conference.Divisions[1]
    }
    else if (req == conference.Divisions[2].name) {
        var reply = conference.Divisions[2]
    }
    else if (req == conference.Divisions[3].name) {
        var reply = conference.Divisions[3]
    }
    else {
        var reply = {
            status: "Not Found"
        }
    }

    return reply
}

app.get('/Conference/:conference/:division/all/:pos', searchAllPosByDivision)

function searchAllPosByDivision(request, response) {
    var conf = searchConferenceHelper(request)
    var div = searchDivisionHelper(request, conf)

    var reply = searchAllPosByDivisionHelper(request, div)

    response.send(reply)
}

function searchAllPosByDivisionHelper(request, div) {
    var replies = [searchPosHelper(request, div.teams[0]), searchPosHelper(request, div.teams[1]), searchPosHelper(request, div.teams[2]), searchPosHelper(request, div.teams[3])]

    return replies
}


app.get('/Conference/:conference/:division/:team', searchTeamWithDivision)

function searchTeamWithDivision(request, response) {
    var conf = searchConferenceHelper(request)
    var div = searchDivisionHelper(request, conf)

    var reply = searchTeamWithDivisionHelper(request, div)

    response.send(reply)
}

function searchTeamWithDivisionHelper(request, division) {
    var req = request.params.team

    if (req == division.teams[0].name) {
        var reply = division.teams[0]
    }
    else if (req == division.teams[1].name) {
        var reply = division.teams[1]
    }
    else if (req == division.teams[2].name) {
        var reply = division.teams[2]
    }
    else if (req == division.teams[3].name) {
        var reply = division.teams[3]
    }
    else {
        var reply = {
            status: "Not Found"
        }
    }

    return reply
}

app.get('/Conference/:conference/:division/:team/pos/:pos', searchPos)

function searchPos(request, response) {
    var conf = searchConferenceHelper(request)
    var div = searchDivisionHelper(request, conf)
    var team = searchTeamHelper(request, div)

    var reply = searchPosHelper(request, team)

    response.send(reply)
}

function searchPosHelper(request, team) {
    var req = request.params.pos

    if (req == "WR") {
        var reply = [team.player[2], team.player[3], team.player[4]]
    }
    else if (req == "T") {
        var reply = [team.player[6], team.player[10]]
    }
    else if (req == "G") {
        var reply = [team.player[7], team.player[9]]
    }
    else if (req == "DE")
    {   
        if (team.name == "Miami Dolphins" || team.name == "Denver Broncos" || team.name == "Los Angeles Chargers" || team.name == "Baltimore Ravens" || team.name == "Pittsburgh Steelers" || team.name == "Jacksonville Jaguars" || team.name == "Tennessee Titans" || team.name == "New York Giants" || team.name == "Arizona Cardinals" || team.name == "Los Angeles Rams" || team.name == "Green Bay Packers" || team.name == "Minnesota Vikings" || team.name == "Atlanta Falcons" || team.name == "Tampa Bay Buccaneers")
        {
            var reply = [team.player[11], team.player[13]]
        }
        else {
            var reply = [team.player[11], team.player[14]]
        }
    }
    else if (req == "DT") {
        if (team.name == "Miami Dolphins" || team.name == "Denver Broncos" || team.name == "Los Angeles Chargers" || team.name == "Baltimore Ravens" || team.name == "Pittsburgh Steelers" || team.name == "Jacksonville Jaguars" || team.name == "Tennessee Titans" || team.name == "New York Giants" || team.name == "Arizona Cardinals" || team.name == "Los Angeles Rams" || team.name == "Green Bay Packers" || team.name == "Minnesota Vikings" || team.name == "Atlanta Falcons" || team.name == "Tampa Bay Buccaneers")
        {
            var reply = [team.player[12]]
        }
        else {
            var reply = [team.player[12], team.player[13]]
        }
    }
    else if (req == "LB") {
        if (team.name == "Miami Dolphins" || team.name == "Denver Broncos" || team.name == "Los Angeles Chargers" || team.name == "Baltimore Ravens" || team.name == "Pittsburgh Steelers" || team.name == "Jacksonville Jaguars" || team.name == "Tennessee Titans" || team.name == "New York Giants" || team.name == "Arizona Cardinals" || team.name == "Los Angeles Rams" || team.name == "Green Bay Packers" || team.name == "Minnesota Vikings" || team.name == "Atlanta Falcons" || team.name == "Tampa Bay Buccaneers")
        {
            var reply = [team.player[14], team.player[15], team.player[16], team.player[17]]
        }
        else {
            var reply = [team.player[15], team.player[16], team.player[17]]
        }
    }
    else if (req == "CB")
    {
        var reply = [team.player[18], team.player[21]]
    }
    else if (req == "S")
    {
        var reply = [team.player[19], team.player[20]]
    }

    else {
        if (req == team.player[0].position) {
            var reply = team.player[0]
        }
        else if (req == team.player[1].position) {
            var reply = team.player[1]
        }
        else if (req == team.player[5].position) {
            var reply = team.player[5]
        }
        else if (req == team.player[8].position) {
            var reply = team.player[8]
        }
        else if (req == team.player[22].position) {
            var reply = team.player[22]
        }
        else if (req == team.player[23].position) {
            var reply = team.player[23]
        }
        else {
            var reply = {
                status: "Not Found"
            }
        }
    }

    return reply
}
 
app.get('/Conference/:conference/:division/:team/name/:name', searchName)
 
function searchName(request, response) {
    var conf = searchConferenceHelper(request)
    var div = searchDivisionHelper(request, conf)
    var team = searchTeamHelper(request, div)
 
    var reply = searchNameHelper(request, team)
 
    response.send(reply)
}
 
function searchNameHelper(request, team) {
    var req = request.params.name
 
    if (req == team.player[0].name) {
        var reply = team.player[0]
    }
    else if (req == team.player[1].name) {
        var reply = team.player[1]
    }
    else if (req == team.player[2].name) {
        var reply = team.player[2]
    }
    else if (req == team.player[3].name) {
        var reply = team.player[3]
    }
    else if (req == team.player[4].name) {
        var reply = team.player[4]
    }
    else if (req == team.player[5].name) {
        var reply = team.player[5]
    }
    else if (req == team.player[6].name) {
        var reply = team.player[6]
    }
    else if (req == team.player[7].name) {
        var reply = team.player[7]
    }
    else if (req == team.player[8].name) {
        var reply = team.player[8]
    }
    else if (req == team.player[9].name) {
        var reply = team.player[9]
    }
    else if (req == team.player[10].name) {
        var reply = team.player[10]
    }
    else if (req == team.player[11].name) {
        var reply = team.player[11]
    }
    else if (req == team.player[12].name) {
        var reply = team.player[12]
    }
    else if (req == team.player[13].name) {
        var reply = team.player[13]
    }
    else if (req == team.player[14].name) {
        var reply = team.player[14]
    }
    else if (req == team.player[15].name) {
        var reply = team.player[15]
    }
    else if (req == team.player[16].name) {
        var reply = team.player[16]
    }
    else if (req == team.player[17].name) {
        var reply = team.player[17]
    }
    else if (req == team.player[18].name) {
        var reply = team.player[18]
    }
    else if (req == team.player[19].name) {
        var reply = team.player[19]
    }
    else if (req == team.player[20].name) {
        var reply = team.player[20]
    }
    else if (req == team.player[21].name) {
        var reply = team.player[21]
    }
    else if (req == team.player[22].name) {
        var reply = team.player[22]
    }
    else if (req == team.player[23].name) {
        var reply = team.player[23]
    }
    else {
        var reply = {
            status: "Not Found"
        }
    }
 
    return reply
}