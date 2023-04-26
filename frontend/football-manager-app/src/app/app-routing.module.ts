import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './players/player/player.component';
import { UpdateTeamComponent } from './teams/update-team/update-team.component';
import { PlayerCreationComponent } from './players/player-creation/player-creation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'matches',
    loadChildren: () =>
      import('./matches/matches.module').then((m) => m.MatchesModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./players/players.module').then((m) => m.PlayersModule),
  },
  {
    path: 'players/new',
    component: PlayerCreationComponent,
  },
  // Let op: de volgorde van de routing object blijkt belangrijk te zijn.
  // Anders als dit plaats voor de `players/new` dan ziet Angular dit als de dynamische endpoint (:id)
  { path: 'players/:id', component: PlayerComponent },
  { path: 'teams/:id', component: UpdateTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
