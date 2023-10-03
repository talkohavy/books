import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { APP_URLS } from '../../utils/appUrls';
import { createNoSpacesAllowedRule } from '../../utils/rules';

const noSpacesAllowedRule = createNoSpacesAllowedRule();

export default function LoginPage() {
  const navigateTo = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = useCallback(() => navigateTo({ pathname: APP_URLS.books }), [navigateTo]);
  const isDisabled = !email || !password;

  return (
    <div className='mt-10 flex flex-col items-center justify-start gap-2 rounded-md border border-black bg-black p-5'>
      <Input value={email} setValue={setEmail} dontChangeRule={noSpacesAllowedRule} />
      <Input value={password} setValue={setPassword} />

      <Button
        isDisabled={isDisabled}
        onClick={onLoginClick}
        className='h-10 w-20 rounded-xl border border-black bg-red-500 p-1 text-white hover:rounded-2xl hover:bg-red-400 disabled:cursor-default disabled:rounded-xl disabled:bg-gray-400'
      >
        Login
      </Button>
    </div>
  );
}
