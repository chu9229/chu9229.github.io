alert("You are a soccer player choosing which club you want to sign your contract with.");

let club1_or_club2 = prompt("Do you (1) choose club1 or do you (2) choose club2? Please type 1 for club1 and 2 for club2.");

if(club1_or_club2 == 1) {
    let(more$_or_less$) = prompt("If you picked Club 1, you are presented with 2 more choices. Do you (1) choose more money but a horrible season or do you (2) choose less money but have a great season?");
        if(more$_or_less$ == 1) {
        alert("You have received a higher bid offer of more than 20 million, but also a bad season.");
    } else {
        if(more$_or_less$ == 2)
        alert("Your bid offer was decreased to 15 million, but you are having a great season.");
    }
} else {
    let changepos_or_more$ = prompt("As you choose club 2, you are presented with 2 more choices. Do you (1) change your position to have a better season, or do you (2) accept a higher bid offer but have a bad season? ");
    if(changepos_or_more$ == 1) {
        alert("You have chosen to change your position in exchange for a better season.");
    } else {
        if(changepos_or_more$ == 2)
        alert("You choose to get more money but have a bad season.");
    }
        
        
            
        
    
}
