const { exec } = require('child_process');

exec('yarn test');
exec('git checkout -- dist');