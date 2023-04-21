package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table (name = "matches")
@Entity
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "match_id_seq")
    @SequenceGenerator(name = "match_id_seq", sequenceName = "match_id_seq", allocationSize = 1)
    Long id;

    @Column(name = "team_1")
    Team team1;

    @Column(name = "team2")
    Team team2;

    @Column(name = "goals_team1")
    int goalsTeam1;

    @Column(name = "goals_team2")
    int goalsTeam2;
}