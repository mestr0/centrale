import './App.css';

import Combustibile from './components/Combustibile';
import Compressore from './components/Compressore';
import Generatore from './components/Generatore';
import Generatore2 from './components/Generatore2';
import Trasformatore from './components/Trasformatore';
import Trasformatore2 from './components/Trasformatore2';
import Badge from './components/Badge';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div>
      <Badge />
      <ol></ol>
      <Grid item xs={2}>
      <Combustibile />
      <Compressore />
      <Generatore />
      <Generatore2 />
      <Trasformatore />
      <Trasformatore2 />
      </Grid>
    </div>
  );
}

export default App;
