# Importing Utilities
This is the github mostly so we all can contribute to importing tools to make game master more accessible, but also because it was a neat little experiment.
These are on the chrome extension store ! Check 'em out!
https://chrome.google.com/webstore/detail/roll20-character-parser-4/bbgjpikdfcbpadbmkclkbmmlaailacgc
https://chrome.google.com/webstore/detail/roll20-character-parser-d/ifcmilildkphnhpceobdlbhhffdakocf

## Important rules about importing
###  Basic Rules
  *  Seperate Entries ',' or a new line
  *  Specify Quantitity with (\<number\>)
  *  Specify Extra options with [\<options\>]
###  Match the title/category of any field to import
    *  <Category Name> : <Line Break>
    *  <Category Data/Entries>
###  Categories
####  Aptitudes
      *  <Name>
      *  Toughness
####  Equipment Gear Inventory
      *  <Amount> <Name> [<weaponkey>=<damage>;..]
      *  1 Shotgun [damage=1d10+3;range=30m;pen=2;]
####  Skills
      *  <Name> (<Stat>) (<Bonus>)
      *  Athletics (Str) (+4)
####  Specials
      *  <Name> : <Description>
      *  Stout Toughness : This character does take damage
####  Talents
      *  <Name> (<Rank>)
      *  Sound Consitution (Rank 1)
####  Traits
      *  <Name>
      *  Psyker
####  Spells Force Psychic
      *  <Name> : <Description>
      *  Magic Missile : Launch a energy attack at an enemy
####  Descriptions Notes Other
      *  <Name> : <Value>
      *  Race : Gnome
####  Stats
      *  <Stat Name> : <Equation>
      *  Dexterity : 13+4
