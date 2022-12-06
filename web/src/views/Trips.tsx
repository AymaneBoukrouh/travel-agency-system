import { useEffect } from 'react';

import { useTheme } from '@mui/material';

import { useTopBar } from '@/hooks/useTopBar';

import Trips from '@/components/Trips';

const Auth = () => {
  const theme = useTheme();

  const { setTopBarBackgroundColor } = useTopBar();

  useEffect(() => {
    setTopBarBackgroundColor(theme.palette.primary.dark);
  }, [])

  return (
    <div className="d-flex flex-column" style={{ padding: '30px 15%', backgroundColor: theme.palette.primary.main }}>
      <div className="p-3 mb-3">
        <Trips title="Morocco" />
      </div>
      <div className="p-3 mb-3">
        <Trips title="Abroad" />
      </div>
    </div>
  )
}

export default Auth;
