import { useState } from 'react';

import LogOutMain from './components/LogOutMain';
import LogInMain from './components/LogInMain';

const App = () => {
    const [login, setLogin] = useState(false);

    return login ? <LogInMain /> : <LogOutMain />;
};

export default App;
