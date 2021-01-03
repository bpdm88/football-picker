# football-picker - Futbol 5aside

This project was set as part of a technical challenge after completinig the DevelopMe_ coding bootcamp.

A React / Redux built app that allows users to create and customise two randomly selected five a side teams and return match confitions plus the games result.

You can checkout the app by visiting it [here](https://bpdm88.github.io/football-picker/)

## User Experience

*Step 1*: 

- The **'Create Player'** section allows the user to enter a name and adjust each skill (attack, defence, creativity) between a range of 0 - 5. 
- Alternativly the user can select **'Auto Skill'** which will randomly assign the player a score for each attribute.
- When the user clicks **'Add Player'** it will be added to the **'Available Squad'** card.

- Alternatively, the user can use the **'Auto Squad'** button which will randomly select 10 of the 30 pre-made players available. 
- This option will remove any previously added players to the **'Available Squad'**.

*Step 2*: Once 10 players have been added either via the user adding them themselves or using the 'Auto Squad' option the **'Create Teams'** card will display details fo rthe user to add to team names and the submit them via the '**'Add Teams'** button.

*Step 3*: On doing this the squad will be randomly split in to two seperate teams of five in the **'Team News'** card. The user can then click the **'Match Info'** button to get the match day settings.

*Step 4*: After the **'Match Day Information'** displays the user can click **'Kick Off'** which willl generate the games result in the **'Final Score'** card.

*Step 5*: The **'Post Match Report'** will show the user the Man of the Match, confirm who won the game and give the user an option to **'Reset'** which will take the user back to the pages initial set-up.

### Apps Methodologies:

**Final Score** - The final score is based on each teams total abilities (attack, defence, creativity) for each player. The higher the teams attack and creativity the more likely they are to score more goals, the higher the oppositions defence score the more able they are to negate the number of goals scored by the opposition.

Step 1: Each abillity is totalled for each team
Step 2: Each score is then divided by 5 to achieve a more realistic score i.e. ( a max score of 25 would equal 5)
Step 3: The defence score is then halved i.e ( a max score of 25 would equal 5 and then halved to be 2.5 )
Step 4: An enhancement of 0 to 4 is then added depending on the teams creativity score ( i.e. a team creativity score of 1.3 would equal an enhancement of 0.5)
Step 5: The attack score is added to the creativity score and then teh oppositions defence score is deducted. (i.e. attack 3.3 + creativity 0.5 - opps defence 1 = 2.8 )
Step 6: The score is the rounded up or down - therefore 2.8 becomes 3 goals scores for that team.

**Man of the Match** - A player is randomly selected from either the winning team or if the score was a draw then from the entire player list.

**Match info** - Weather is randomly selected from an array of 6 options, the stadium is randomly selected from an array of 6 options, the referee is randomly selected from 6 options. The SkyBet tip calculates which team has the higher attacking ability and selects them as teh favourite, if teh attack scores are the same the tip will eb for a draw. 
