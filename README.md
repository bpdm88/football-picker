# football-picker - Futbol 5aside

This project was set as part of a technical challenge after completinig the DevelopMe_ coding bootcamp.

A React / Redux built app that allows users to create and customise two randomly selected five a side teams and return match confitions plus the games result.

You can checkout the app by visiting it [here](https://bpdm88.github.io/football-picker/)

## User Experience

*Step 1*

- The **'Create Player'** section allows the user to enter a name and adjust each skill (attack, defence, creativity) between a range of 0 - 5. 
- If preferred the user can select **'Auto Skill'** which will randomly assign the player a score for each attribute.
- When the user clicks **'Add Player'** it will be added to the **'Available Squad'** card.

- Alternatively, the user can use the **'Auto Squad'** button which will randomly select 10 of the 30 pre-made players available. 
- This option will remove any previously added players to the **'Available Squad'**.

*Step 2*

- Once 10 players have been added the **'Create Teams'** card will display details for the user to add to team names 
- Click the '**'Add Teams'** button to submit the teams.

*Step 3*

- On submit the squad will be randomly split in to two seperate teams of five in the **'Team News'** card. 
- The user can then click the **'Match Info'** button to get the match day settings.

*Step 4* 

- After the **'Match Day Information'** displays the user can click **'Kick Off'** which willl generate the games result in the **'Final Score'** card.

*Step 5*

- The **'Post Match Report'** will show the user the Man of the Match and confirm who won the game.
- Finally the user can select to **'Reset'** which will take the user back to the pages initial set-up.

## App Logic:

**Final Score** - The final score is based on each teams total abilities (attack, defence, creativity) for each player. 

- Step 1: Each abillity is totalled for each team
- Step 2: Each score is then divided by 5 to achieve a more realistic score
- Step 3: The defence score is then halved
- Step 4: An enhancement of 0 to 4 is then added depending on the teams creativity score.
- Step 5: The attack score is added to the creativity score and then the oppositions defence score is deducted
- Step 6: The score is the rounded up or down

Example: Team A (Attack - 21, Creativity 14) Team B (Defence 10) = 4.2 + 1 - 1 = 4.2 when rounded: 4 Goals scored by Team A.

**Man of the Match** 

- A player is randomly selected from either the winning team or if the score was a draw then from the entire player list.

**Match info** 

- Weather, Stadium and Referee each have six options and one of each is randomly selected for the game. 

- The SkyBet tip calculates which team has the higher attacking ability and sets them as favourite, if attack scores are the same the tip will be for a draw. 
