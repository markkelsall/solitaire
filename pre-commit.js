const { exec } = require('child_process');

exec('yarn test');
exec('yarn build');
exec('git add .');