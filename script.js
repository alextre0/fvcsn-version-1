const steps = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
  document.getElementById('step4'),
];

const accountModal = document.getElementById('accountModal');
const gateBtn = document.getElementById('accountGateBtn');
const profileSection = document.getElementById('profile');
const usernameMsg = document.getElementById('usernameMsg');

const topAvatar = document.getElementById('topAvatar');
const picPreview = document.getElementById('picPreview');
const bannerPreview = document.getElementById('bannerPreview');

const statTeam = document.getElementById('statTeam');
const statDate = document.getElementById('statDate');
const gamesDateLabel = document.getElementById('gamesDateLabel');
const daysStrip = document.getElementById('daysStrip');
const gamesList = document.getElementById('gamesList');

const homeScreen = document.getElementById('homeScreen');
const liveScreen = document.getElementById('liveScreen');
const backToHome = document.getElementById('backToHome');
const liveAwayTeam = document.getElementById('liveAwayTeam');
const liveHomeTeam = document.getElementById('liveHomeTeam');
const liveAwayScore = document.getElementById('liveAwayScore');
const liveHomeScore = document.getElementById('liveHomeScore');
const eventScoreLine = document.getElementById('eventScoreLine');
const awayRosterTitle = document.getElementById('awayRosterTitle');
const homeRosterTitle = document.getElementById('homeRosterTitle');
const awayRosterList = document.getElementById('awayRosterList');
const homeRosterList = document.getElementById('homeRosterList');

const teamProfileScreen = document.getElementById('teamProfileScreen');
const closeTeamProfile = document.getElementById('closeTeamProfile');
const teamProfileTitle = document.getElementById('teamProfileTitle');
const teamProfileName = document.getElementById('teamProfileName');
const teamStatGrid = document.getElementById('teamStatGrid');
const teamPastGames = document.getElementById('teamPastGames');
const teamUpcomingGames = document.getElementById('teamUpcomingGames');

const takenNames = ['admin', 'fvcsn', 'wolves', 'tigers'];
const state = {
  accountCreated: false,
  selectedDateKey: '2026-02-17',
};

const teamLogo = {
  Hampshire: 'logos/hampshire.svg',
  Central: 'logos/central.svg',
  Huntley: 'logos/huntley.svg',
  'Prairie Ridge': 'logos/prairie-ridge.svg',
  McHenry: 'logos/mchenry.svg',
  'Dundee-Crown': 'logos/dundee-crown.svg',
  Jacobs: 'logos/jacobs.svg',
  'Crystal Lake South': 'logos/crystal-lake-south.svg',
  'Cary-Grove': 'logos/cary-grove.svg',
  'Crystal Lake Central': 'logos/crystal-lake-central.svg',
};

const scheduleByDate = {
  '2026-02-17': [
    { away: 'Cary-Grove', awayRec: '24-4', home: 'McHenry', homeRec: '18-10', time: '7:00pm', awayScore: '79', homeScore: '67' },
    { away: 'Central', awayRec: '16-10', home: 'Jacobs', homeRec: '16-11', time: '7:00pm', awayScore: '63', homeScore: '72' },
    { away: 'Crystal Lake South', awayRec: '21-7', home: 'Crystal Lake Central', homeRec: '18-10', time: '7:00pm', awayScore: '66', homeScore: '68' },
    { away: 'Prairie Ridge', awayRec: '5-21', home: 'Dundee-Crown', homeRec: '5-18', time: '7:00pm', awayScore: '59', homeScore: '61' },
    { away: 'Huntley', awayRec: '8-19', home: 'Hampshire', homeRec: '8-19', time: '7:00pm', awayScore: '57', homeScore: '60' },
  ],
  '2026-02-19': [
    { away: 'Crystal Lake Central', awayRec: '18-10', home: 'Jacobs', homeRec: '16-11', time: '7:00pm', awayScore: '70', homeScore: '73' },
  ],
  '2026-02-20': [
    { away: 'Prairie Ridge', awayRec: '5-21', home: 'Cary-Grove', homeRec: '24-4', time: '7:00pm', awayScore: '52', homeScore: '77' },
    { away: 'Huntley', awayRec: '8-19', home: 'Central', homeRec: '16-10', time: '7:00pm', awayScore: '54', homeScore: '69' },
    { away: 'Crystal Lake South', awayRec: '21-7', home: 'McHenry', homeRec: '18-10', time: '7:00pm', awayScore: '74', homeScore: '71' },
    { away: 'Dundee-Crown', awayRec: '5-18', home: 'Hampshire', homeRec: '8-19', time: '7:00pm', awayScore: '58', homeScore: '65' },
  ],
};

const teamStats = {
  'Cary-Grove': { conf: '15-1', overall: '25-4', pf: '1684', pa: '1363', streak: '2W' },
  'Crystal Lake South': { conf: '13-3', overall: '22-7', pf: '1793', pa: '1499', streak: '7W' },
  Central: { conf: '12-4', overall: '17-11', pf: '1585', pa: '1459', streak: '1L' },
  McHenry: { conf: '10-6', overall: '19-10', pf: '1579', pa: '1417', streak: '1W' },
  Jacobs: { conf: '8-8', overall: '16-12', pf: '1425', pa: '1428', streak: '1L' },
  'Prairie Ridge': { conf: '6-10', overall: '6-22', pf: '1265', pa: '1479', streak: '1L' },
  'Crystal Lake Central': { conf: '6-10', overall: '18-11', pf: '1609', pa: '1415', streak: '1L' },
  Huntley: { conf: '5-11', overall: '8-20', pf: '1432', pa: '1544', streak: '6L' },
  Hampshire: { conf: '3-13', overall: '8-20', pf: '1313', pa: '1399', streak: '3L' },
  'Dundee-Crown': { conf: '2-14', overall: '5-19', pf: '1047', pa: '1233', streak: '2L' },
};


const teamUpcoming = {
  'Prairie Ridge': ['Feb 20 · @ Cary-Grove · 7:00 PM', 'Feb 24 · vs Huntley · 7:00 PM'],
  'Cary-Grove': ['Feb 20 · vs Prairie Ridge · 7:00 PM', 'Feb 24 · @ Crystal Lake South · 7:00 PM'],
  Central: ['Feb 20 · vs Huntley · 7:00 PM', 'Feb 24 · @ Dundee-Crown · 7:00 PM'],
  McHenry: ['Feb 20 · vs Crystal Lake South · 7:00 PM', 'Feb 24 · @ Jacobs · 7:00 PM'],
};

const teamPast = {
  'Prairie Ridge': ['Feb 17 · L 59-61 at Dundee-Crown', 'Feb 14 · L 44-63 vs Crystal Lake South'],
  'Cary-Grove': ['Feb 17 · W 79-67 at McHenry', 'Feb 14 · W 71-58 vs Central'],
  Central: ['Feb 17 · L 63-72 at Jacobs', 'Feb 14 · L 58-71 at Cary-Grove'],
  McHenry: ['Feb 17 · L 67-79 vs Cary-Grove', 'Feb 14 · W 64-59 vs Huntley'],
};
const rosterByTeam = {
  'Prairie Ridge': [['1', 'Luke Vanderwiel', 'Sr.'], ['2', 'Bryce Kachiroubas', 'Sr.'], ['3', 'Rory Rezendes', 'Sr.'], ['4', 'Lucas Michalios', 'So.'], ['5', 'Luca Boscarino', 'Jr.'], ['10', 'Connor Koch', 'Sr.'], ['11', 'Elijah Loeding', 'Sr.'], ['12', 'Sebastian Cummins', 'Fr.'], ['21', 'Brendan Beu', 'Sr.'], ['22', 'Johnny Kemp', 'Sr.'], ['23', 'Reagan Turman', 'Sr.'], ['24', 'Everett Stone', 'So.'], ['25', 'Tommy Meehan', 'Sr.'], ['33', 'Maddon McKim', 'Sr.'], ['34', 'Tiago Gray', '-']],
  'Cary-Grove': [['0', 'Brandon Freund', 'Sr.'], ['2', 'Aj Berndt', 'Sr.'], ['3', 'Conner Strike', 'Sr.'], ['4', 'Dylan Dumele', 'Sr.'], ['10', 'Will Talkington', 'Sr.'], ['14', 'Brady Bauer', 'Sr.'], ['21', 'Brady Elbert', 'Sr.'], ['22', 'Adam Bauer', 'Sr.'], ['34', 'Andrew Bolf', 'Sr.']],
  Central: [['0', 'Patrick Magan', 'Jr.'], ['1', 'Brady Andersen', 'Sr.'], ['3', 'Daniel Cassata', 'Sr.'], ['4', 'Ryan Carpenter', 'Jr.'], ['5', 'Cedric Ceniza', 'Jr.'], ['10', "Colton O'Neil", 'Jr.'], ['11', 'Jordan Coombs', 'So.'], ['13', 'Declan Wilson', 'Fr.'], ['21', 'Markus Hansen', 'Fr.'], ['22', 'Cash Cumpata', 'Jr.'], ['23', 'Stefan Meseldzija', 'Sr.'], ['24', 'Bennek Braden', 'Jr.'], ['32', 'Tyler Kotwica', 'Sr.']],
  'Crystal Lake South': [['1', 'Noah Cook', 'Jr.'], ['3', 'Nick Stowasser', 'Jr.'], ['5', 'Carson Trivellini', 'Jr.'], ['10', 'Mugi Bayuo', 'Jr.'], ['11', 'Michael Santos', 'Jr.'], ['21', 'Ryan Morgan', 'So.'], ['23', 'David McFadden', 'Sr.'], ['24', 'Vince Santarelli', 'Sr.'], ['32', 'Wes Bogda', 'So.'], ['34', 'John Morgan', 'So.']],
  McHenry: [['1', 'Henry Collette', 'Jr.'], ['2', 'Dayton Warren', 'Sr.'], ['3', 'Dane Currie', 'Jr.'], ['4', 'Cole Tapia', 'Sr.'], ['5', 'Julian Correa', 'So.'], ['11', 'Haydn Schmidt', 'Sr.'], ['12', 'Charlie Schuldt', 'Sr.'], ['15', 'Parker Ostertag', 'Jr.'], ['20', 'Owen Hobson', 'Sr.'], ['22', 'Blake Renfro', 'Sr.'], ['23', 'Dylan Fischler', 'So.'], ['24', 'Adam Anwar', 'Sr.'], ['32', 'Garet Lobbins', 'Jr.'], ['40', 'Nate Ottaway', 'Jr.'], ['42', 'Mason Sites', 'Jr.'], ['43', 'Josiah Kordik', 'Jr.']],
  Jacobs: [['0', 'Samson Averehi', 'Sr.'], ['1', 'Jack Magee', 'Sr.'], ['2', 'Ernesto Castro Ham', 'Sr.'], ['3', 'Malachi Bell', 'Fr.'], ['4', 'Rylan Godfrey', 'Jr.'], ['5', 'Jacob Demayo', 'So.'], ['10', 'Noah Merlin', 'Sr.'], ['11', 'Carson Goehring', 'Sr.'], ['12', 'Evan Wojtowicz', 'Sr.'], ['13', 'Elijah Bell', 'Jr.'], ['14', 'Amari Parks', 'Jr.'], ['15', 'Chris Williams', 'Fr.'], ['20', 'Owen Crouch', 'So.'], ['21', 'Elijah Nicholson', 'So.'], ['23', 'George Donze', 'Sr.'], ['25', 'Quinn Gorges', 'Jr.']],
  Huntley: [['1', 'Nolan Reynolds', 'Jr.'], ['2', 'Dominic Schnetter', 'Sr.'], ['3', 'Aidan Gibbs', 'Sr.'], ['4', 'Parker Filipek', 'Jr.'], ['5', 'Jalen Howard', 'Jr.'], ['10', 'Brady Hassels', 'Jr.'], ['12', 'Tyler Dudzinski', 'Jr.'], ['14', 'Ksawier Dzik', 'Sr.'], ['15', 'Isaac Muze', 'So.'], ['20', 'Isaiah Onu', 'Jr.'], ['21', 'Antonio Miramontes', 'Sr.'], ['22', 'Seun Oladipo', 'So.'], ['24', 'Casey Kaczmarski', 'Sr.'], ['25', 'Nick Busby', 'Sr.']],
  'Crystal Lake Central': [['0', 'Avery Lee', 'Sr.'], ['1', 'Sonny Shanahan', 'Jr.'], ['2', 'Danny Spychala', 'Jr.'], ['4', 'Bud Shanahan', 'Jr.'], ['5', 'JR Mason', 'Sr.'], ['13', 'Nico Lenzi', 'Sr.'], ['20', 'Thomas Loizzo', 'Jr.'], ['21', 'Michael Marry', 'Jr.'], ['22', 'Johnny Geisser', 'Sr.'], ['23', 'Logan Laudadio', 'Jr.'], ['24', 'Jack Powell', 'Jr.'], ['25', 'Aidan Watson', 'Sr.'], ['30', 'Konner Altergott', 'Sr.'], ['31', 'Federico Romero', 'Sr.'], ['32', 'Player #32', '-'], ['33', 'Grant Kuligowski', 'Sr.']],
  Hampshire: [['1', 'Bradley Boyd', 'Jr.'], ['2', 'Cole Harkin', 'Sr.'], ['5', 'Jordan Parish', 'Sr.'], ['10', 'Brody Anderson', 'Jr.'], ['12', 'John Belshan', 'Sr.'], ['14', 'Tyler Lacke', 'Jr.'], ['15', 'Eli Schol', 'Sr.'], ['20', 'Tyler Johnson', 'So.'], ['21', 'Trey Simmons', 'Jr.'], ['22', 'Jaiden Baldwin', 'Sr.'], ['23', 'Sean Roth', 'Sr.'], ['34', 'Devin Bach', 'Sr.'], ['52', 'Sam Williams', 'So.']],
  'Dundee-Crown': [['1', 'Kadin Malone', 'Sr.'], ['2', 'Shane Demarsh', 'Jr.'], ['3', 'Rasheed Trice', 'Sr.'], ['4', 'Josiah Simmons', 'Jr.'], ['5', 'Max Backus', 'Jr.'], ['10', 'Kamryn Mejia', 'Jr.'], ['12', 'Anthony Spain', 'Jr.'], ['13', 'DeMario Rodriguez', 'Sr.'], ['14', 'AJ Chrusniak', 'Jr.'], ['15', 'Ereyon Bailey', 'Jr.'], ['21', 'Anthony Pittman', 'So.'], ['33', 'Nathan Pederson', 'So.'], ['35', 'Hudson Reardon', 'So.']],
};

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle('active-step', i === index));
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatDateLabel(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function fillRoster(container, roster) {
  container.innerHTML = '';
  (roster || []).forEach((player) => {
    const row = document.createElement('div');
    row.className = 'roster-row';
    row.innerHTML = `<span>#${player[0]}</span><span>${player[1]}</span><span>${player[2]}</span>`;
    container.appendChild(row);
  });
}

function renderGamesForDate(dateKey) {
  const games = scheduleByDate[dateKey] || [];
  gamesList.innerHTML = '';
  if (!games.length) {
    gamesList.innerHTML = '<article class="game-card schedule-card"><p class="meta" style="text-align:left">No games scheduled</p></article>';
    return;
  }

  games.forEach((g) => {
    const card = document.createElement('article');
    card.className = 'game-card schedule-card open-game';
    card.dataset.away = g.away;
    card.dataset.home = g.home;
    card.dataset.awayScore = g.awayScore;
    card.dataset.homeScore = g.homeScore;
    card.innerHTML = `
      <div class="team-line"><span class="team-info"><img class="team-logo" src="${teamLogo[g.away]}" alt="${g.away} logo" />${g.away}</span><em>${g.awayRec}</em></div>
      <div class="team-line"><span class="team-info"><img class="team-logo" src="${teamLogo[g.home]}" alt="${g.home} logo" />${g.home}</span><em>${g.homeRec}</em></div>
      <p class="meta">${g.time}</p>`;
    card.addEventListener('click', () => openLiveGame(card));
    gamesList.appendChild(card);
  });
}

function renderDateStrip() {
  const today = new Date();
  const forcedToday = new Date('2026-02-17T12:00:00');
  // keep seeded to requested timeline while still date-driven layout
  const base = isNaN(today.getTime()) ? forcedToday : forcedToday;

  daysStrip.innerHTML = '';
  for (let i = -3; i <= 8; i += 1) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const key = formatDateKey(d);
    const btn = document.createElement('button');
    btn.dataset.dateKey = key;
    if (key === state.selectedDateKey) btn.classList.add('active');
    btn.innerHTML = `${formatDateLabel(d)} <strong>${d.toLocaleDateString('en-US', { weekday: 'short' })}</strong>`;
    btn.addEventListener('click', () => {
      state.selectedDateKey = key;
      if (daysStrip && gamesDateLabel) renderDateStrip();
      gamesDateLabel.textContent = formatDateLabel(d);
      renderGamesForDate(key);
    });
    daysStrip.appendChild(btn);
  }

  const selected = new Date(state.selectedDateKey);
  gamesDateLabel.textContent = formatDateLabel(selected);
}

function openLiveGame(card) {
  const away = card.dataset.away;
  const home = card.dataset.home;
  liveAwayTeam.textContent = away;
  liveHomeTeam.textContent = home;
  liveAwayScore.textContent = card.dataset.awayScore;
  liveHomeScore.textContent = card.dataset.homeScore;
  eventScoreLine.textContent = `${card.dataset.awayScore}-${card.dataset.homeScore} · Q4 49.2`;
  awayRosterTitle.textContent = `${away} Roster`;
  homeRosterTitle.textContent = `${home} Roster`;
  fillRoster(awayRosterList, rosterByTeam[away]);
  fillRoster(homeRosterList, rosterByTeam[home]);
  homeScreen.classList.add('hidden');
  liveScreen.classList.remove('hidden');
}

function openTeamProfile(team) {
  const stats = teamStats[team];
  teamProfileTitle.textContent = `${team} Profile`;
  teamProfileName.textContent = team;
  teamStatGrid.innerHTML = `
    <div><span>Conference</span><strong>${stats?.conf || '-'}</strong></div>
    <div><span>Overall</span><strong>${stats?.overall || '-'}</strong></div>
    <div><span>Points For</span><strong>${stats?.pf || '-'}</strong></div>
    <div><span>Points Against</span><strong>${stats?.pa || '-'}</strong></div>
    <div><span>Streak</span><strong>${stats?.streak || '-'}</strong></div>
  `;
  teamUpcomingGames.innerHTML = '';
  (teamUpcoming[team] || ['No upcoming games available']).forEach((game) => {
    const item = document.createElement('article');
    item.innerHTML = `<p>${game}</p>`;
    teamUpcomingGames.appendChild(item);
  });

  teamPastGames.innerHTML = '';
  (teamPast[team] || ['No past games available']).forEach((game) => {
    const item = document.createElement('article');
    item.innerHTML = `<p>${game}</p>`;
    teamPastGames.appendChild(item);
  });

  teamProfileScreen.classList.remove('hidden');
}

// account flow
gateBtn?.addEventListener('click', () => {
  if (!gateBtn.classList.contains('done')) accountModal.classList.add('active');
});

document.getElementById('step1')?.addEventListener('submit', (e) => {
  e.preventDefault();
  state.createdAt = new Date().toLocaleDateString();
  showStep(1);
});

document.getElementById('step2')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim().toLowerCase();
  if (takenNames.includes(username)) {
    usernameMsg.textContent = 'Username already taken. Pick another one.';
    usernameMsg.style.color = '#ff7f7f';
    return;
  }
  usernameMsg.textContent = 'Username approved.';
  usernameMsg.style.color = '#77d999';
  showStep(2);
});

document.getElementById('step3')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = document.getElementById('profilePic').files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    picPreview.style.backgroundImage = `url(${reader.result})`;
    picPreview.textContent = '';
    topAvatar.style.backgroundImage = `url(${reader.result})`;
    showStep(3);
  };
  reader.readAsDataURL(file);
});

document.getElementById('step4')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const team = document.getElementById('favoriteTeam').value;
  if (!team) return;
  statTeam.textContent = team;
  statDate.textContent = state.createdAt;
  accountModal.classList.remove('active');
  gateBtn.classList.add('done');
  gateBtn.textContent = 'Account Created ✓';
  state.accountCreated = true;
  profileSection.classList.add('hidden');
});

function toggleProfileFromAvatar() {
  if (!state.accountCreated) {
    accountModal.classList.add('active');
    return;
  }
  profileSection.classList.toggle('hidden');
}

topAvatar?.addEventListener('click', toggleProfileFromAvatar);
topAvatar?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleProfileFromAvatar();
  }
});

document.getElementById('bannerUpload')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    bannerPreview.style.backgroundImage = `url(${reader.result})`;
    bannerPreview.textContent = '';
  };
  reader.readAsDataURL(file);
});

let isDraggingDays = false;
let daysStartX = 0;
let daysScrollLeft = 0;
function startDaysDrag(clientX) {
  isDraggingDays = true;
  daysStrip.classList.add('dragging');
  daysStartX = clientX;
  daysScrollLeft = daysStrip.scrollLeft;
}
function moveDaysDrag(clientX) {
  if (!isDraggingDays) return;
  daysStrip.scrollLeft = daysScrollLeft - (clientX - daysStartX);
}
function endDaysDrag() {
  isDraggingDays = false;
  daysStrip.classList.remove('dragging');
}
daysStrip?.addEventListener('mousedown', (e) => startDaysDrag(e.clientX));
daysStrip?.addEventListener('mousemove', (e) => {
  e.preventDefault();
  moveDaysDrag(e.clientX);
});
daysStrip?.addEventListener('mouseup', endDaysDrag);
daysStrip?.addEventListener('mouseleave', endDaysDrag);
daysStrip?.addEventListener('touchstart', (e) => startDaysDrag(e.touches[0].clientX), { passive: true });
daysStrip?.addEventListener('touchmove', (e) => moveDaysDrag(e.touches[0].clientX), { passive: true });
daysStrip?.addEventListener('touchend', endDaysDrag);

backToHome?.addEventListener('click', () => {
  liveScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

closeTeamProfile?.addEventListener('click', () => teamProfileScreen.classList.add('hidden'));
document.querySelectorAll('.team-card').forEach((el) => el.addEventListener('click', () => openTeamProfile(el.dataset.team)));
document.querySelectorAll('.team-link').forEach((el) => el.addEventListener('click', () => openTeamProfile(el.dataset.team)));

if (daysStrip && gamesDateLabel) renderDateStrip();
if (gamesList) renderGamesForDate(state.selectedDateKey);


const pickDetailScreen = document.getElementById('pickDetailScreen');
const closePickDetail = document.getElementById('closePickDetail');
const pickDetailTitle = document.getElementById('pickDetailTitle');
const pickDetailHeading = document.getElementById('pickDetailHeading');
const pickDetailDescription = document.getElementById('pickDetailDescription');
const pickDetailBody = document.getElementById('pickDetailBody');

const draftMultipliers = [2.0, 1.8, 1.6, 1.4, 1.2];
let draftSelections = [];

function buildDraftPool() {
  const customPopularity = {
    'Elijah Loeding': 99,
    'Johnny Kemp': 98,
    'Brady Bauer': 97,
    'Adam Bauer': 96,
    'Brandon Freund': 95,
    'Aidan Watson': 94,
    'Nico Lenzi': 93,
    'Blake Renfro': 92,
    'Haydn Schmidt': 91,
    'Noah Merlin': 90,
  };

  const pool = [];
  Object.entries(rosterByTeam).forEach(([team, players], teamIndex) => {
    players.forEach((player, playerIndex) => {
      const name = player[1];
      const popularity = customPopularity[name] || (85 - teamIndex - Math.floor(playerIndex / 2));
      pool.push({ name, team, popularity });
    });
  });

  return pool.sort((a, b) => b.popularity - a.popularity || a.name.localeCompare(b.name));
}

function renderDraftPlayers(filteredPool) {
  const list = document.getElementById('draftPlayersList');
  list.innerHTML = filteredPool.map((p) => `
    <article class="draft-player${draftSelections.some((s) => s.label === `${p.name} (${p.team})`) ? ' selected' : ''}" data-player="${p.name}" data-team="${p.team}">
      <div><strong>${p.name}</strong><span>${p.team}</span></div>
      <em>${draftSelections.some((s) => s.label === `${p.name} (${p.team})`) ? 'Selected' : `🔥 ${p.popularity}`}</em>
    </article>
  `).join('');

  list.querySelectorAll('.draft-player').forEach((card) => {
    card.addEventListener('click', () => {
      const choice = {
        label: `${card.dataset.player} (${card.dataset.team})`,
        team: card.dataset.team,
      };
      if (draftSelections.some((s) => s.label === choice.label)) return;
      if (draftSelections.length >= 5) return;
      draftSelections.push(choice);
      renderDraftSlots();
      renderDraftPlayers(filteredPool);
    });
  });
}

function renderDraftSlots() {
  const container = document.getElementById('draftSlots');
  if (!container) return;
  container.innerHTML = draftMultipliers.map((multi, idx) => {
    const picked = draftSelections[idx];
    const label = picked ? picked.label : 'Empty';
    const logo = picked ? teamLogo[picked.team] : '';
    const icon = picked ? `<img src="${logo}" alt="${picked.team} logo" class="draft-slot-logo" />` : '<span class="draft-slot-empty">○</span>';
    return `<article><span>Spot ${idx + 1} · ${multi.toFixed(1)}x</span><div class="draft-slot-row">${icon}<strong>${label}</strong></div></article>`;
  }).join('');
}

function renderDraftUI() {
  draftSelections = [];
  const fullPool = buildDraftPool();
  pickDetailBody.innerHTML = `
    <div id="draftSlots" class="draft-slots"></div>
    <button id="draftClearBtn" class="draft-clear-btn" type="button">Clear Draft</button>
    <label class="draft-search-wrap">
      <span>Search Player</span>
      <input id="draftSearch" type="search" placeholder="Search any FVC player" />
    </label>
    <div id="draftPlayersList" class="pick-list draft-pool"></div>
  `;

  renderDraftSlots();
  renderDraftPlayers(fullPool);

  document.getElementById('draftClearBtn').addEventListener('click', () => {
    draftSelections = [];
    renderDraftSlots();
    const q = search.value.trim().toLowerCase();
    const filtered = fullPool.filter((p) => `${p.name} ${p.team}`.toLowerCase().includes(q));
    renderDraftPlayers(filtered);
  });

  const search = document.getElementById('draftSearch');
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    const filtered = fullPool.filter((p) => `${p.name} ${p.team}`.toLowerCase().includes(q));
    renderDraftPlayers(filtered);
  });
}

function openPickDetail(type) {
  if (type === 'draft') {
    pickDetailTitle.textContent = 'Daily Draft';
    pickDetailHeading.textContent = 'Draft 5 Different Players';
    pickDetailDescription.textContent = 'Select 5 players for the highest score. Lower-ranked players get bigger boosts.';
    renderDraftUI();
  }

  if (type === 'streak') {
    pickDetailTitle.textContent = 'Daily Streak';
    pickDetailHeading.textContent = 'Pick Team Winners';
    pickDetailDescription.textContent = 'Pick game winners each day. Keep getting picks right to build and maintain your streak.';
    pickDetailBody.innerHTML = '<div class="pick-list"><article>Huntley @ Hampshire</article><article>Prairie Ridge @ Dundee-Crown</article><article>Cary-Grove @ McHenry</article></div>';
  }

  if (type === 'dog') {
    pickDetailTitle.textContent = 'Dog of the Day';
    pickDetailHeading.textContent = 'Most-Voted Player';
    pickDetailDescription.textContent = 'Vote for the player you think had the biggest dog performance. The top-voted player wins Dog of the Day.';
    pickDetailBody.innerHTML = '<div class="pick-list"><article>Elijah Loeding (Prairie Ridge)</article><article>Johnny Kemp (Prairie Ridge)</article><article>Brady Bauer (Cary-Grove)</article></div>';
  }

  if (type === 'pool') {
    pickDetailTitle.textContent = 'Pool of the Day';
    pickDetailHeading.textContent = 'Daily Numbers Pool';
    pickDetailDescription.textContent = 'Pool of the Day works like a daily real pool: entries are grouped, outcomes are scored, and winners split the pool.';
    pickDetailBody.innerHTML = '<div class="pick-list"><article>Current Pool: FVC Friday Night</article><article>Entries: 255</article><article>Lock: 6:45 PM</article></div>';
  }

  pickDetailScreen.classList.remove('hidden');
}

document.querySelectorAll('.pick-btn').forEach((btn) => {
  btn.addEventListener('click', () => openPickDetail(btn.dataset.pick));
});

closePickDetail?.addEventListener('click', () => {
  pickDetailScreen.classList.add('hidden');
});
