
import './App.css';

import LinkCard from './LinkCard/LinkCard';


function App() {
  const data = [
    {
      tittle: 'linkdin',
      tagline: 'Follow me on Linkdin',
      username: 'gayatrisathawane10',
      link: 'https://www.linkedin.com/in/gayatrisathawane10/'
    },
    {
      tittle: 'github',
      tagline: 'Follow me on Github',
      username: 'gayatrisathawane10',
      link: 'https://github.com/gayatrisathawane'
    },
    {
      tittle: 'gmail',
      tagline: 'Follow me on Gmail',
      username: 'gayatrisathawane10',
     
    },
    {
      tittle: 'facebook',
      tagline: 'Follw me on Facebook',
      username: 'gayatrisathawane10',
      link: 'https://www.facebook.com/gayatri.sathawane.96/'
    }
  ]
  return (
    <div className='container'>
    
      <h3 className="app-tittle">LINKTREE - ALTR</h3>
      {
        data.map((cardinfo) => {

          return <LinkCard
            tittle={cardinfo.tittle}
            tagline={cardinfo.tagline}
            username={cardinfo.username}
            link={cardinfo.link} />
        })
      }
    </div>
  );
}

export default App;
