import { Injectable } from '@angular/core';
import { TeamsService } from '../teams.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private teamsService: TeamsService) { }

  add(team: string) {
    this.teamsService
      .addTeam(team)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(id: string) {
    this.teamsService
      .deleteTeamById(id)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  update(id: string, team: string) {
    this.teamsService
      .updateTeamById(id, team)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}