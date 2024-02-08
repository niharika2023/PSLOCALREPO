
const username = 'niharika2023';
const repository = 'PSLOCALREPO';

const api = `https://api.github.com/repos/${username}/${repository}/commits`;


fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    if (data.length > 0) {
    
      const latestCommit = data[0];
      const commitDate = new Date(latestCommit.commit.author.date);
      
      console.log('Latest commit:');
      console.log('Commit SHA:', latestCommit.sha);
      console.log('Author:', latestCommit.commit.author.name);
      console.log('Date:', commitDate.toLocaleDateString());
      console.log('Time:', commitDate.toLocaleTimeString());
      console.log('Message:', latestCommit.commit.message);
    } else {
      console.log('No commits found');
    }
  })
  .catch(error => {
    console.error('There was a problem fetching data:', error);
  });
