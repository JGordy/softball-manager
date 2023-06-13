const { TextServiceClient } =
    require('@google-ai/generativelanguage').v1beta2;

const { GoogleAuth } = require('google-auth-library');

const MODEL_NAME = 'models/text-bison-001';
const API_KEY = process.env.GOOGLE_AI_API_KEY;

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const prompt = `
[{
    name: Thor,
    preferredPositions: ['Shortstop', 'First Base', 'Left Field'],
    battingRating: 9,
    fieldRating: 7,
    gender: 'male'
},{
    name: Captain America,
    preferredPositions: ['Left Field', 'Left Center Field'],
    battingRating: 8,
    fieldRating: 8,
    gender: 'male'
},{
    name: The Vision,
    preferredPositions: ['Left Center Field', 'Left Field', 'Right Center Field'],
    battingRating: 9,
    fieldRating: 8,
    gender: 'male'
},{
    name: Hawkeye,
    preferredPositions: ['Pitcher'],
    battingRating: 7,
    fieldRating: 10,
    gender: 'male'
},{
    name: War Machine,
    preferredPositions: ['Right Center Field', 'Right Field'],
    battingRating: 8,
    fieldRating: 6,
    gender: 'male'
},{
    name: Scarlet Witch,
    preferredPositions: ['Catcher'],
    battingRating: 8,
    fieldRating: 7,
    gender: 'female'
},{
    name: Gamora,
    preferredPositions: ['Right Field', 'Second Base],
    battingRating: 8,
    fieldRating: 6,
    gender: 'female'
}, {
    name: Black Widow,
    preferredPositions: ['Second Base'],
    battingRating: 7,
    fieldRating: 9,
    gender: 'female'
}, {
    name: Professor X,
    preferredPositions: ['First Base'],
    battingRating: 6,
    fieldRating: 9,
    gender: 'male'
}, {
    name: The Hulk,
    preferredPositions: ['Third Base'],
    battingRating: 10,
    fieldRating: 6,
    gender: 'male'
},{
    name: Jean Gray,
    preferredPositions: ['Second Base', 'Right Field'],
    battingRating: 7,
    fieldRating: 6,
    gender: 'female'
},{
    name: Falcon,
    preferredPositions: ['Left Center Field', 'Right Center Field'],
    battingRating: 5,
    fieldRating: 8,
    gender: 'male'
},{
    name: Spider-man,
    preferredPositions: ['Left Center Field', 'Right Center Field'],
    battingRating: 6,
    fieldRating: 10,
    gender: 'male'
},{
    name: Captain Marvel,
    preferredPositions: ['Catcher],
    battingRating: 10,
    fieldRating: 7,
    gender: 'female'
}]

Using all of the supplied players above, create a single table comprised of a batting lineup and a fielding chart.

Return data in a bordered html table format with the batting order in an numbered list, without the skill rating present.
Rules for the combined batting order and fielding chart are:
1. Sort the batting order by highest battingRating with the higher batting skilled players batting first.
2. No more than three male players can bat in a row.
3. The fielding chart should have a column for each of 7 innings
4. Each position must be filled per inning with only one player in the position
5. If a position is already filled for the inning list the player as "Out"
6. Do not list the player as "Out" in consecutive innings.
7. Players can be rotated within thier preferred positions each inning
8. Positions are Pitcher, Catcher, First Base, Second Base, Third Base, Shortstop, Left Field, Left Center Field, Right Center Field, Right Field

Use the following table as an example:
<table>
    <tr>
        <th>Batting Order</th><th>Player</th><th>Inning 1</th><th>Inning 2</th><th>Inning 3</th>
    </tr>
    <tr>
        <td>1.</td><td>Joe</td><td>Left Field</td><td>Left Center Field</td><td>Out</td>
    </tr>
</table>
`;

export default async function getGenAiResponse() {
    return client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        })
        .then((response) => {
            console.log('response[0]: ', response[0]);
            const output = response[0]?.candidates?.[0].output?.replace(/[\r\n]+/gm, '').replace(/`/g, "").replace('html', '');
            console.log({ output });
            return output;
            // const formattedOutput = JSON.parse(output);
            // console.log({ formattedOutput });
            // const battingOrder = response[0].candidates[0].output.replace('\n', '');
            // console.log('battingOrder: ', battingOrder);
        });
}