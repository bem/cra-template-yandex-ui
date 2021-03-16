import { FC } from 'react';
import { Button } from '@yandex/ui/Button/desktop/bundle';

import './App.css';

export const App: FC = () => {
  return (
    <div className="App">
      <Button view="default" size="m">
        Button
      </Button>
    </div>
  );
};
