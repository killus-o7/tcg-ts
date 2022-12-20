// PLAYER
type id = String
declare enum SelectedDeck {
    FIRST,
    SECOND,
    THIRD,
    FOURTH
}

// MATCH
type PlayerEntryInfo = { id: id, selectedDeck: SelectedDeck }

// CARDS

// RESOURCES