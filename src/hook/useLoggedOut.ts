import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { removeCookie } from '@utils/cookies';

function useLoggedOut() {
  const router = useRouter();
  const query = useQueryClient();

  const logout = (redirectPath = '/sign') => {
    removeCookie('token');
    router.push(redirectPath);
    query.clear();
  };

  return logout;
}

export default useLoggedOut;
